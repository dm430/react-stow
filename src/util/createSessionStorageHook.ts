import type { SerializerResolver } from './types'

import { sessionStorageInstance } from '../global/constants'
import { SessionStorage } from '../store'
import createStorageHook from './createStorageHook'
import resolveSerializer from './resolveSerializer'

/**
 * A utility used to create a session storage hook instance.
 *
 * @param resolveSerializerInstance A serializer instance or resolver function.
 * @returns A storage hook bound to session storage and serializer.
 */
export default (resolveSerializerInstance?: SerializerResolver) => {
	const serializer = resolveSerializer(resolveSerializerInstance)

	return createStorageHook(
		serializer ? new SessionStorage(serializer) : sessionStorageInstance
	)
}
