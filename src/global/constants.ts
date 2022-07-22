import { LocalStorage, SessionStorage } from '../store'
import { SerializedStorageDecorator } from '../decorators'
import JsonSerializer from '../serialization/JsonSerializer'

export const jsonSerializerInstance = new JsonSerializer()

export const sessionStorageInstance = new SessionStorage()
export const jsonSessionStorageInstance = new SerializedStorageDecorator(
	sessionStorageInstance,
	jsonSerializerInstance
) as unknown as SessionStorage

export const localStorageInstance = new LocalStorage()
export const jsonLocalStorageInstance = new SerializedStorageDecorator(
	localStorageInstance,
	jsonSerializerInstance
) as unknown as LocalStorage
