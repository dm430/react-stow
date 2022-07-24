import type { SerializerResolver } from './types'

import { localStorageInstance } from '../global/constants'
import { LocalStorage } from '../store'
import createStorageHook from './createStorageHook'
import resolveSerializer from './resolveSerializer'

/**
 * A utility used to create a local storage hook instance.
 *
 * @param resolveSerializerInstance A serializer instance or resolver function.
 * @returns A storage hook bound to local storage and serializer.
 */
export default (resolveSerializerInstance?: SerializerResolver) => {
	const serializer = resolveSerializer(resolveSerializerInstance)

	return createStorageHook(
		serializer ? new LocalStorage(serializer) : localStorageInstance
	)
}
