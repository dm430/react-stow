import type LibraryStorage from './Storage'

/**
 * A base class that provides additional functionality specific to web client storage.
 * All web based storage types should extend from this.
 */
abstract class ClientStorageBase implements LibraryStorage {
	protected clientStorage: Storage

	constructor(clientStorage: Storage) {
		this.clientStorage = clientStorage
	}

	getItem(key: string): any {
		this.assureClientSideExecution()
		return this.clientStorage.getItem(key)
	}

	setItem(key: string, value: any): void {
		this.assureClientSideExecution()
		this.clientStorage.setItem(key, value)
	}

	removeItem(key: string): void {
		this.assureClientSideExecution()
		this.clientStorage.removeItem(key)
	}

	clear(): void {
		this.assureClientSideExecution()
		this.clientStorage.clear()
	}

	hasKey(key: string): boolean {
		this.assureClientSideExecution()
		return Object.prototype.hasOwnProperty.call(this.clientStorage, key)
	}

	/**
	 * Asserts that the function was run on a web client.
	 * Otherwise an error is thrown to indicate the current execution enviorment is not supported.
	 */
	protected assureClientSideExecution(): void {
		if (typeof window === 'undefined') {
			throw new Error(
				'The Web Storage API is not supported in the current execution enviorment.'
			)
		}
	}
}

export default ClientStorageBase
