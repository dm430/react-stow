export type EventCallback = (value?: any) => any

export default interface EventBus {
	/**
	 * Dispatches all a message to all listeners registered under the provided event name.
	 *
	 * @typeParam T - the type for the payload.
	 *
	 * @param event The name of the event.
	 * @param payload The value to be passed to the event listener.
	 */
	dispatch<T>(event: string, payload?: T): void

	/**
	 * Registers a listener under the provided event name.
	 *
	 * @param event The name of the event.
	 * @param callback The callback to be invoked when an event is dispatched.
	 * @returns A function used to deregister the established listener.
	 */
	register(event: string, callback: EventCallback): () => void
}
