import { LocalStorage, SessionStorage } from '../store'
import { WindowEventBus } from '../event'
import { JsonSerializer } from '../serialization'

export const serializerInsance = new JsonSerializer()
export const eventBusInstance = new WindowEventBus()

export const localStorageInstance = new LocalStorage(
	serializerInsance,
	eventBusInstance
)

export const sessionStorageInstance = new SessionStorage(
	serializerInsance,
	eventBusInstance
)
