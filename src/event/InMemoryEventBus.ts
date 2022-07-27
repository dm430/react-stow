import EventBus, { EventCallback } from './EventBus'

export default class InMemoryEventBus implements EventBus {
	protected eventListeners = new Map<string, Map<number, EventCallback>>()

	dispatch<T>(event: string, arg?: T): void {
		const eventSubscriptions = this.eventListeners.get(event)

		eventSubscriptions?.forEach((listener) => {
			listener(arg)
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

			if (this.eventListeners.get(event)?.size == 0) {
				this.eventListeners.delete(event)
			}
		}
	}
}
