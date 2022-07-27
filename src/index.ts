export { default as useLocalStorage } from './hooks/useLocalStorage'
export { default as useSessionStorage } from './hooks/useSessionStorage'

export {
	localStorageInstance as localStorage,
	sessionStorageInstance as sessionStorage,
	eventBusInstance as eventBus
} from './global/constants'
