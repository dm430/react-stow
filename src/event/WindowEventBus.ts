import EventBus, { EventCallback } from './EventBus'

import guardWindow from '../util/guardWindow'
import InMemoryEventBus from './InMemoryEventBus'

/**
 * An {@link InMemoryEventBus} instance that also registers event listeners with window.
 */
export default class WindowEventBus implements EventBus {
	protected eventBus = new InMemoryEventBus()

	private static mapEventPayload(eventResult: Event): any {
		if (eventResult instanceof StorageEvent) {
			return {
				key: eventResult.key,
				value: eventResult.newValue
			}
		}

		return eventResult
	}

	dispatch<T>(event: string, arg?: T): void {
		this.eventBus.dispatch(event, arg)
	}

	/**
	 * Registers a listener under the provided event name with the {@link InMemoryEventBus} and window.
	 *
	 * @param event The name of the event.
	 * @param callback The callback to be invoked when an event is dispatched.
	 * @returns A function used to deregister the established listener.
	 */
	register(event: string, listener: EventCallback): () => void {
		const unregisterListener = this.eventBus.register(event, listener)
		const eventHandler = guardWindow((window) => {
			const handleEvent = (eventResult: Event) => {
				this.dispatch(event, WindowEventBus.mapEventPayload(eventResult))
			}

			window?.addEventListener(event, handleEvent)

			return handleEvent
		})

		return () => {
			unregisterListener()
			guardWindow(
				(window) =>
					eventHandler && window?.removeEventListener(event, eventHandler)
			)
		}
	}
}
