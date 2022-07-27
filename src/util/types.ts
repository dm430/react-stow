import type Storage from '../store/Storage'
import type Serializer from '../serialization/Serializer'
import type EventBus from '../event/EventBus'

type StorageResolverCallback<T extends Storage> = () => T
type SerializerResolverCallback = () => Serializer
type EventBusResolverCallBack<T extends EventBus> = () => T

export type StorageResolver<T extends Storage> = T | StorageResolverCallback<T>
export type SerializerResolver = Serializer | SerializerResolverCallback
export type EventBusResolver<T extends EventBus> =
	| T
	| EventBusResolverCallBack<T>
