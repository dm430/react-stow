import Serializer from './Serializer'

/**
 * Provides JSON serialization and deserialization.
 */
class JsonSerializer implements Serializer {
	/**
	 * @param value A value to serialize to JSON.
	 * @returns A JSON represntation of the serialized value.
	 */
	serialize(value: any): string {
		return JSON.stringify(value)
	}

	/**
	 * @param value A JSON value to deserialize.
	 * @returns A value deserialized to it's appropriate type.
	 */
	deserialize(value: string) {
		return JSON.parse(value)
	}
}

export default JsonSerializer
