import SerializedStorageDecorator from '../decorators/SerializedLocalStorage'
import JsonSerializer from '../serialization/JsonSerializer'
import { SessionStorage } from '../store'

export const sessionStorageInstance = new SessionStorage()

export default new SerializedStorageDecorator(sessionStorageInstance, new JsonSerializer())