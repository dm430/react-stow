import { sessionStorageInstance } from '../global/sessionStorage'
import createStorageHook from '../util/createStorageHook'

const useSessionStorage = createStorageHook(sessionStorageInstance)

export default useSessionStorage