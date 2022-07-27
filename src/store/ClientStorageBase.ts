import type LibraryStorage from './Storage'
import type { EventBus } from '../event'

import { JsonSerializer, Serializer } from '../serialization'

/**
 * A base class that provides additional functionality specific to web client storage.
 * All web based storage types should extend from this.
 */
abstract class ClientStorageBase implements LibraryStorage {
	protected clientStorage?: Storage
	protected serializer: Serializer
	protected eventBus?: EventBus

	constructor(
		clientStorage?: Storage,
		serializer: Serializer = new JsonSerializer(),
		eventBus?: EventBus
	) {
		this.clientStorage = clientStorage
		this.serializer = serializer
		this.eventBus = eventBus
	}

	getItem(key: string): any {
		this.assureClientSideExecution()
		return this.serializer.deserialize(this.clientStorage?.getItem(key))
	}

	setItem(key: string, value: any): void {
		this.assureClientSideExecution()

		const newValue = this.serializer.serialize(value)

		this.clientStorage?.setItem(key, newValue)
		this.eventBus?.dispatch('storage', { key, value: newValue })
	}

	removeItem(key: string): void {
		this.assureClientSideExecution()
		this.clientStorage?.removeItem(key)
		this.eventBus?.dispatch('storage', { key, value: null })
	}

	clear(): void {
		this.assureClientSideExecution()
		this.clientStorage?.clear()
		this.eventBus?.dispatch('storage', { key: null, value: null })
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
		if (this.clientStorage == undefined) {
			throw new Error(
				'The Web Storage API is not supported in the current execution enviorment.'
			)
		}
	}
}

export default ClientStorageBase
