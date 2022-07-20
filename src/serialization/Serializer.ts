/**
 * Provides a contract for storage serialization.
 */
interface Serializer {
    serialize(value: any): any
    deserialize(value: any): any
}

export default Serializer