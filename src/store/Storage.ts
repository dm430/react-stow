/**
 *  Provides access to a particular storage domain. It allows for the addition, modification, or deletion of stored data.
 */
interface Storage {
	/**
	 *
	 * @param key the key for the key/value pair.
	 * @returns the current value associated with the given key, or null if the given key does not exist.
	 */
	getItem(key: string): any

	/**
	 * Sets the value of the pair identified by key to value, creating a new key/value pair if none existed for the key previously.
	 *
	 * @param key the key for the key/value pair.
	 * @param value the value to store.
	 */
	setItem(key: string, value: any): void

	/**
	 * Removes the key/value pair entry for the given key, if one exists.
	 *
	 * @param key the key for the key/value pair.
	 */
	removeItem(key: string): void

	/**
	 * Removes all key/value pairs, if any exist.
	 */
	clear(): void

	/**
	 *
	 * @param key the key for the key/value pair.
	 * @returns a boolean value that indicates if a key/value pair exists for a given key.
	 */
	hasKey(key: string): boolean
}

export default Storage
