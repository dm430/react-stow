import type { Serializer } from '../serialization'
import type { Resolver } from './resolve'

import { sessionStorageInstance } from '../global/constants'
import { SessionStorage } from '../store'
import createStorageHook from './createStorageHook'
import resolve from './resolve'

/**
 * A utility used to create a session storage hook instance.
 *
 * @param resolveSerializerInstance A serializer instance or resolver function.
 * @returns A storage hook bound to session storage and serializer.
 */
export default (resolveSerializerInstance?: Resolver<Serializer>) => {
	const serializer = resolve(resolveSerializerInstance)

	return createStorageHook(
		serializer ? new SessionStorage(serializer) : sessionStorageInstance
	)
}
