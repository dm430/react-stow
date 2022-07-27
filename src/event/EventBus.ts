export type EventCallback = (value?: any) => any

export default interface EventBus {
	dispatch<T>(event: string, arg?: T): void
	register(event: string, callback: EventCallback): () => void
}
