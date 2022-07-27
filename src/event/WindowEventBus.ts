import EventBus, { EventCallback } from './EventBus'

import guardWindow from '../util/guardWindow'
import InMemoryEventBus from './InMemoryEventBus'

export default class WindowEventBus implements EventBus {
	protected eventBus = new InMemoryEventBus()

	dispatch<T>(event: string, arg?: T): void {
		this.dispatch(event, arg)
	}

	register(event: string, listener: EventCallback): () => void {
		const unregisterListener = this.register(event, listener)

		const eventHandler = guardWindow((window) => {
			const handleEvent = (event: StorageEvent) => {
				this.dispatch('storage', { key: event.key, value: event.newValue })
			}

			window?.addEventListener('storage', handleEvent)

			return handleEvent
		})

		return () => {
			unregisterListener()
			guardWindow(
				(window) =>
					eventHandler && window?.removeEventListener('storage', eventHandler)
			)
		}
	}
}
