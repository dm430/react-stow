import Serializer from './Serializer'

/**
 * An inert serializer that returns the value passed
 * to it's serialize and deserialize functions.
 */
class NoOpSerializer implements Serializer {
	/**
	 * @param value the value to pass through serialization.
	 * @returns the value passed to the function.
	 */
	serialize(value: any): any {
		return value
	}

	/**
	 * @param value the value to pass through deserialization.
	 * @returns the value passed to the function.
	 */
	deserialize(value: any) {
		return value
	}
}

export default NoOpSerializer
