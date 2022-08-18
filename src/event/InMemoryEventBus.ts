import EventBus, { EventCallback } from './EventBus'

/**
 * A basic in memory event bus implementation.
 */
export default class InMemoryEventBus implements EventBus {
	protected eventListeners = new Map<string, Map<number, EventCallback>>()

	dispatch<T>(event: string, payload?: T): void {
		const eventSubscriptions = this.eventListeners.get(event)

		eventSubscriptions?.forEach((listener) => {
			listener(payload)
		})
	}

	register(event: string, listener: EventCallback): () => void {
		const eventSubscriptions =
			this.eventListeners.get(event) ?? new Map<number, EventCallback>()
		const nextEventListenerId = eventSubscriptions.size + 1

		eventSubscriptions.set(nextEventListenerId, listener)
		this.eventListeners.set(event, eventSubscriptions)

		return () => {
			eventSubscriptions.delete(nextEventListenerId)

			if (eventSubscriptions.size == 0) {
				this.eventListeners.delete(event)
			}
		}
	}
}
