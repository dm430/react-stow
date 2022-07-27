# react-storage

A flexable and robust web storage abstraction thats easy to use.

# Basic usage

```
import React from 'react'
import { useLocalStorage } from 'react-storage/hooks'

const Example = () => {
	const [value, setValue, deleteEntry] = useLocalStorage(
		'example-key',
		'initial value'
	)

	return (
		<div>
			<p>{value}</p>
			<button onClick={() => setValue('new value')}>Change value</button>
			<button onClick={() => deleteEntry()}>Delete entry</button>
		</div>
	)
}
```

# Advanced usage

The following APIs can be utilized to create custom hooks,change the utilzed serilaization mechanism, and subscribe to data changes.

## Key subscription

By default both the `useLocalStorage` and `useSessionStorage` hooks subscribe to data changes for the key they are bound to. However, this behavior can be disabled by supplying an `options` object to the hook.

> NOTE: In order for a custom store to trigger events you must utilize an `EventBus` instance, and register it with your hooks. If you do not wish to create your own event bus you can utilize the default event bus by importing `import { eventBus } from 'react-storage'`.

### Example

```
const [value, setValue, deleteEntry] = useLocalStorage(
	'example-key',
	'initial value',
	{ enableKeySubscription: false }
)
```

## Serialization

React Storage provides the ability for users to supply a custom serilaizer to a storage hook.
This can be achieved easily by using either the `createLocalStorageHook`, `createSessionStorageHook`, and `createStorageHook` utilites located in `'react-storage/util'`.

### Example

```
import { createLocalStorageHook } from 'react-storage/util'

const useLocalStorage = createLocalStorageHook({
	serialize(value: any) {
		return value + ' (custom serialize)'
	},
	deserialize(value: string): any {
		return value + ' (custom deserialize)'
	}
})
```

## Custom Storage

The `createStorageHook` utility can be utilized to create a storage hook that uses a custom data store.

> Note: the current release does not support key subscriptions when using a custom data store.

### Example

```
import { localStorage, sessionStorage } from 'react-storage'
import { createStorageHook } from 'react-storage/util'

let useCombinedStorage = createStorageHook({
	getItem(key: string): any {
		return localStorage.getItem(key) || sessionStorage.getItem(key)
	},
	setItem(key: string, value: any): void {
		localStorage.setItem(key, value)
		sessionStorage.setItem(key, value)
	},
	removeItem(key: string): void {
		localStorage.removeItem(key)
		sessionStorage.removeItem(key)
	},
	clear(): void {
		localStorage.clear()
		sessionStorage.clear()
	},
	hasKey(key: string): boolean {
		return localStorage.hasKey(key) || sessionStorage.hasKey(key)
	}
})
```

> NOTE: This example will trigger eventing since its utilizing built in stores in the custom store.
