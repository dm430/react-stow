export type ResolverCallBack<T> = () => T
export type Resolver<T> = T | ResolverCallBack<T>

export default <T>(resolveInstance: Resolver<T>): T => {
	return resolveInstance instanceof Function
		? resolveInstance()
		: resolveInstance
}
