import { useState, useEffect, useCallback } from 'react'
import StorageBase from '../stores/StorageBase'
import JsonSerializer from '../serialization/JsonSerializer'
import Serializer from '../serialization/Serializer'

type StorageResolverCallback = () => StorageBase;
type SerializerResolverCallback = () => Serializer
type StorageHookReturnValues = [value: any, setValue: (newValue: any) => void, deleteKey: () => void]

export interface StorageHook { 
  (key: string, initialValue?: any, options?: StorageHookOptions): StorageHookReturnValues
}

export interface StorageHookOptions  {
  enableKeySubscription: boolean
}

const createStorageHook = (
  resolveStorageInstance: StorageBase | StorageResolverCallback,
  resolveSerializerInstance?: Serializer | SerializerResolverCallback
): StorageHook => {
  const storageInstance =
    typeof resolveStorageInstance === 'function'
      ? resolveStorageInstance()
      : resolveStorageInstance

  const serializer =
    (typeof resolveSerializerInstance === 'function'
      ? resolveSerializerInstance()
      : resolveSerializerInstance) ?? new JsonSerializer()

  const useStorage: StorageHook = (key, initialValue, options) => {
    const [value, setValue] = useState(initialValue ?? null)

    useEffect(() => {
      if (storageInstance.hasKey(key)) {
        const storedValue = storageInstance.getItem(key)
        setValue(storedValue)
      } else if (initialValue) {
        storageInstance.setItem(key, serializer.serialize(initialValue))
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
          storageInstance.setItem(key, serializer.serialize(newValue))
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
