import { useState, useEffect, useCallback } from 'react'
import { SerializedStorageDecorator } from '../decorators';
import { NoOpSerializer } from '../serialization'
import { StorageResolver, SerializerResolver } from './types';
import { Storage } from "../store";

type StorageHookReturnValues<T> = [
  value: T | null,
  setValue: (newValue: T) => void,
  deleteKey: () => void,
  error: Error | null
]

// @ts-ignore T is not used but it does denote hook type for users.
export interface StorageHook<T extends Storage> { 
  <T2>(key: string, initialValue?: T2, options?: StorageHookOptions): StorageHookReturnValues<T2>
}

export interface StorageHookOptions  {
  enableKeySubscription: boolean
}

export interface HookOptions {
  enableKeySubscription?: boolean
}

const storageEventName = 'storage'

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

  const storageInstance = new SerializedStorageDecorator(innerStorageInstance, serializer)

  const useStorage: StorageHook<T> = <T2>(key: string, initialValue?: T2, options?: HookOptions): StorageHookReturnValues<T2> => {
    const [value, setValue] = useState(initialValue ?? null)
    const [error, setError] = useState<Error | null>(null)

    const safeSetValue = (resultFunction: (value: T2 | null) => any) => {
      setValue(value => {
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
          safeSetValue(() => event.newValue ? serializer.deserialize(event.newValue) : null)
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
