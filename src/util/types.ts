import Storage from '../store/Storage'
import Serializer from '../serialization/Serializer'

type StorageResolverCallback = () => Storage;
type SerializerResolverCallback = () => Serializer;

export type StorageResolver = Storage | StorageResolverCallback;
export type SerializerResolver = Serializer | SerializerResolverCallback;
