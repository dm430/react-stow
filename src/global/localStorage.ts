import SerializedStorageDecorator from '../decorators/SerializedLocalStorage'
import JsonSerializer from '../serialization/JsonSerializer'
import { LocalStorage } from '../store'

export const localStorageInstance = new LocalStorage()

export default new SerializedStorageDecorator(localStorageInstance, new JsonSerializer())