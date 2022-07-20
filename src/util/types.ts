import Storage from '../store/Storage'
import Serializer from '../serialization/Serializer'

type StorageResolverCallback<T extends Storage> = () => T;
type SerializerResolverCallback = () => Serializer;

export type StorageResolver<T extends Storage> = T | StorageResolverCallback<T>;
export type SerializerResolver = Serializer | SerializerResolverCallback;
