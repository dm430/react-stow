import { useState, useEffect, useCallback } from 'react'

import type { StorageResolver, SerializerResolver } from './types'
import type { Storage } from '../store'

import { SerializedStorageDecorator } from '../decorators'
import { NoOpSerializer } from '../serialization'

type StorageHookReturnValues<T> = [
	value: T | null,
	setValue: (newValue: T) => void,
	deleteKey: () => void,
	error: Error | null
]

/**
 * A hook used to interface with a type of storage.
 *
 * @param key key for the key/value pair.
 * @param initialValue this value will be written to the store, if no key/value pair exits for the specifed key.
 * @param options used to supply additional options to the hook, such as key subscription.
 * @returns an array containing the current value, a set function, a delete function, and an error, if one occurred.
 */
// @ts-ignore T is not used but it does denote hook type for users.
export interface StorageHook<T extends Storage> {
	<T2>(
		key: string,
		initialValue?: T2,
		options?: StorageHookOptions
	): StorageHookReturnValues<T2>
}

/**
 * An interface that defines hook options.
 */
export interface StorageHookOptions {
	enableKeySubscription: boolean
}

const storageEventName = 'storage'

/**
 * A utility used to create a storage hook instance.
 *
 * @param resolveStorageInstance A storage instance or resolver function.
 * @param resolveSerializerInstance A serializer instance or resolver function.
 * @returns A storage hook bound to a particular storage instance and serializer.
 */
const createStorageHook = <T extends Storage>(
	resolveStorageInstance: StorageResolver<T>,
	resolveSerializerInstance?: SerializerResolver
): StorageHook<T> => {
	const innerStorageInstance =
		typeof resolveStorageInstance === 'function'
			? resolveStorageInstance()
			: resolveStorageInstance

	const serializer =
		(typeof resolveSerializerInstance === 'function'
			? resolveSerializerInstance()
			: resolveSerializerInstance) ?? new NoOpSerializer()

	const storageInstance = new SerializedStorageDecorator(
		innerStorageInstance,
		serializer
	)

	const useStorage: StorageHook<T> = <T2>(
		key: string,
		initialValue?: T2,
		options?: StorageHookOptions
	): StorageHookReturnValues<T2> => {
		const [value, setValue] = useState(initialValue ?? null)
		const [error, setError] = useState<Error | null>(null)

		const safeSetValue = (resultFunction: (value: T2 | null) => any) => {
			setValue((value) => {
				try {
					return resultFunction(value)
				} catch (error) {
					setError(error as Error)
					return value
				}
			})
		}

		useEffect(() => {
			if (storageInstance.hasKey(key)) {
				safeSetValue(() => storageInstance.getItem(key))
			} else if (initialValue) {
				storageInstance.setItem(key, initialValue)
			}
		}, [key, initialValue])

		useEffect(() => {
			const handleStorage = (event: StorageEvent) => {
				if (event.key === key) {
					safeSetValue(() =>
						event.newValue ? serializer.deserialize(event.newValue) : null
					)
				}
			}

			options?.enableKeySubscription &&
				window.addEventListener(storageEventName, handleStorage)

			return () => {
				options?.enableKeySubscription &&
					window.removeEventListener(storageEventName, handleStorage)
			}
		}, [key, value, options?.enableKeySubscription])

		const setStorageValue = useCallback(
			(newValue: any) => {
				if (newValue !== value) {
					safeSetValue(() => {
						storageInstance.setItem(key, newValue)
						return newValue
					})
				}
			},
			[key, value]
		)

		const deleteStorageKey = useCallback(() => {
			safeSetValue(() => {
				storageInstance.removeItem(key)
				return null
			})
		}, [key])

		return [value, setStorageValue, deleteStorageKey, error]
	}

	return useStorage
}

export default createStorageHook
