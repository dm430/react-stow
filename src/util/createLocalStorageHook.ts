import type { Serializer } from '../serialization'
import type { Resolver } from './resolve'

import { localStorageInstance } from '../global/constants'
import { LocalStorage } from '../store'
import createStorageHook from './createStorageHook'
import resolveSerializer from './resolve'

/**
 * A utility used to create a local storage hook instance.
 *
 * @param resolveSerializerInstance A serializer instance or resolver function.
 * @returns A storage hook bound to local storage and serializer.
 */
export default (resolveSerializerInstance?: Resolver<Serializer>) => {
	const serializer = resolveSerializer(resolveSerializerInstance)

	return createStorageHook(
		serializer ? new LocalStorage(serializer) : localStorageInstance
	)
}
