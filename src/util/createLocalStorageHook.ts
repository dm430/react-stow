import type { SerializerResolver } from './types'

import {
	jsonSerializerInstance,
	localStorageInstance
} from '../global/constants'
import createStorageHook from './createStorageHook'

/**
 * A utility used to create a local storage hook instance.
 *
 * @param resolveSerializerInstance A serializer instance or resolver function.
 * @returns A storage hook bound to local storage and serializer.
 */
export default (
	resolveSerializerInstance: SerializerResolver = jsonSerializerInstance
) => {
	return createStorageHook(localStorageInstance, resolveSerializerInstance)
}
