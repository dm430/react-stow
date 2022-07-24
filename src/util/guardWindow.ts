export default <T>(
	guardFunction: (window: Window) => T | undefined
): T | undefined =>
	typeof window === 'undefined' ? undefined : guardFunction(window)
