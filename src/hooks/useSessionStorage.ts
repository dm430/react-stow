import SessionStorage from '../stores/SessionStorage'
import createStorageHook from '../util/createStorageHook'

const useSessionStorage = createStorageHook(new SessionStorage())

export default useSessionStorage