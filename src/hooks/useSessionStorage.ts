import createSessionStorageHook from '../util/createSessionStorageHook'

/**
 * A hook used to interface with session storage.
 *
 * @param key key for the key/value pair.
 * @param initialValue this value will be written to the store, if no key/value pair exits for the specifed key.
 * @param options used to supply additional options to the hook, such as key subscription.
 * @returns an array containing the current value, a set function, a delete function, and an error, if one occurred.
 */
const sessionStorageHook = createSessionStorageHook()

export default sessionStorageHook
