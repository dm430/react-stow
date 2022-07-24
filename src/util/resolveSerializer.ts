import type { Serializer } from '../serialization'
import type { SerializerResolver } from './types'

export default (
	resolveSerializerInstance?: SerializerResolver
): Serializer | undefined => {
	return typeof resolveSerializerInstance === 'function'
		? resolveSerializerInstance()
		: resolveSerializerInstance
}
