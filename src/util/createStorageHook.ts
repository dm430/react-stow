import { useState, useEffect, useCallback } from 'react'
import SerializedStorageDecorator from '../decorators/SerializedLocalStorage';
import JsonSerializer from '../serialization/JsonSerializer'
import { StorageResolver, SerializerResolver } from './types';

type StorageHookReturnValues = [value: any, setValue: (newValue: any) => void, deleteKey: () => void]

export interface StorageHook { 
  (key: string, initialValue?: any, options?: StorageHookOptions): StorageHookReturnValues
}

export interface StorageHookOptions  {
  enableKeySubscription: boolean
}

const createStorageHook = (
  resolveStorageInstance: StorageResolver,
  resolveSerializerInstance?: SerializerResolver
): StorageHook => {
  const innerStorageInstance =
    typeof resolveStorageInstance === 'function'
      ? resolveStorageInstance()
      : resolveStorageInstance

  const serializer =
    (typeof resolveSerializerInstance === 'function'
      ? resolveSerializerInstance()
      : resolveSerializerInstance) ?? new JsonSerializer()

  const storageInstance = new SerializedStorageDecorator(innerStorageInstance, serializer)

  const useStorage: StorageHook = (key, initialValue, options) => {
    const [value, setValue] = useState(initialValue ?? null)

    useEffect(() => {
      if (storageInstance.hasKey(key)) {
        const storedValue = storageInstance.getItem(key)
        setValue(storedValue)
      } else if (initialValue) {
        storageInstance.setItem(key, initialValue)
      }
    }, [key, initialValue])

    useEffect(() => {
      const handleStorage = (event: StorageEvent) => {
        if (event.key === key && event.newValue !== value) {
          setValue(event.newValue)
        }
      }

      const storageEventName = 'storage'

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
          storageInstance.setItem(key, newValue)
          setValue(newValue)
        }
      },
      [key, value]
    )

    const deleteStorageKey = useCallback(() => {
      storageInstance.removeItem(key)
      setValue(null)
    }, [key])

    return [value, setStorageValue, deleteStorageKey] 
  }

  return useStorage
}

export default createStorageHook
