export { default as createStorageHook } from './createStorageHook'
export { default as createLocalStorageHook } from './createLocalStorageHook'
export { default as createSessionStorageHook } from './createSessionStorageHook'
export { default as resolve } from './resolve'

export type {
	StorageHookOptions,
	StorageHookReturnValues,
	StorageHook
} from './createStorageHook'

export type { Resolver, ResolverCallBack } from './resolve'
