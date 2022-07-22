import type { SerializerResolver } from './types'

import {
	jsonSerializerInstance,
	sessionStorageInstance
} from '../global/constants'
import createStorageHook from './createStorageHook'

/**
 * A utility used to create a session storage hook instance.
 *
 * @param resolveSerializerInstance A serializer instance or resolver function.
 * @returns A storage hook bound to session storage and serializer.
 */
export default (
	resolveSerializerInstance: SerializerResolver = jsonSerializerInstance
) => {
	return createStorageHook(sessionStorageInstance, resolveSerializerInstance)
}
