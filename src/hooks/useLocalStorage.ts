import LocalStorage from '../stores/LocalStorage'
import createStorageHook from '../util/createStorageHook'

const useLocalStorage = createStorageHook(new LocalStorage())

export default useLocalStorage