import { useState, useEffect, useCallback } from 'React'

import type { Resolver } from './resolve'
import type { Storage } from '../store'
import type { EventBus } from '../event'

import { EventType } from '../event'
import { eventBusInstance } from '../global/constants'
import resolve from './resolve'

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

/**
 * A utility used to create a storage hook instance.
 *
 * @param resolveStorageInstance A storage instance or resolver function.
 * @param resolveSerializerInstance A serializer instance or resolver function.
 * @returns A storage hook bound to a particular storage instance and serializer.
 */
const createStorageHook = <T extends Storage>(
	resolveStorageInstance: Resolver<T>,
	// Not super stoked about this, but I don't want it to be required in the consuming API.
	resolveEventBusInstance: Resolver<EventBus> = eventBusInstance
): StorageHook<T> => {
	const storageInstance = resolve<T>(resolveStorageInstance)
	const eventBusInstance = resolve<EventBus>(resolveEventBusInstance)

	const useStorage: StorageHook<T> = <T2>(
		key: string,
		initialValue?: T2,
		options: StorageHookOptions = { enableKeySubscription: true }
	): StorageHookReturnValues<T2> => {
		const [value, setValue] = useState(initialValue ?? null)
		const [error, setError] = useState<Error | null>(null)

		const safeSetValue = (resultFunction: (value: T2 | null) => any) => {
			setValue((previousValue) => {
				try {
					return resultFunction(previousValue)
				} catch (error) {
					setError(error as Error)
					return previousValue
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
			const unregister =
				options?.enableKeySubscription &&
				eventBusInstance.register(EventType.Storage, (event) => {
					if (event.key === key) {
						safeSetValue(() =>
							event.value ? storageInstance.getItem(key) : null
						)
					}
				})

			return () => {
				unregister && unregister()
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
