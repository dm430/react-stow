import { localStorageInstance } from '../global/localStorage'
import createStorageHook from '../util/createStorageHook'

const useLocalStorage = createStorageHook(localStorageInstance)

export default useLocalStorage