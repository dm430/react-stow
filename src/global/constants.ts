import { LocalStorage, SessionStorage } from '../store'
import InMemoryEventBus from '../event/InMemoryEventBus'

export const sessionStorageInstance = new SessionStorage()
export const localStorageInstance = new LocalStorage()
export const eventBusInstance = new InMemoryEventBus()
