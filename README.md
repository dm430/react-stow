A fully typed, flexable, and robust web storage abstraction thats easy to use.

# Basic usage

```
import React from 'react'
import { useLocalStorage } from 'react-stow/hooks'

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

The following APIs can be utilized to create custom hooks, change the utilzed serilaization mechanism, and manage subscriptions to data changes.

## Key subscription

By default both the `useLocalStorage` and `useSessionStorage` hooks subscribe to data changes for the key they are bound to. However, this behavior can be disabled by supplying an `options` object to the hook.

### Example

```
const [value, setValue, deleteEntry] = useLocalStorage(
	'example-key',
	'initial value',
	{ enableKeySubscription: false }
)
```

## Serialization

React Stow provides the ability for users to supply a custom serilaizer to a storage hook.
This can be achieved easily by using either the `createLocalStorageHook`, `createSessionStorageHook`, or the `createStorageHook` utilites located in `'react-stow/util'`.

### Example

```
import { createLocalStorageHook } from 'react-stow/util'

const useLocalStorage = createLocalStorageHook({
	serialize(value: any) {
		return btoa(value)
	},
	deserialize(value: string): any {
		return atob(value)
	}
})
```

## Custom Storage

The `createStorageHook` utility can be utilized to create a storage hook that uses a custom data store.

> Note: In order for a custom store to trigger events you must utilize an `EventBus` instance, and register it with your hooks. If you do not wish to create your own event bus you can utilize the default event bus by importing `import { eventBus } from 'react-stow'`.

### Example

```
import { localStorage, sessionStorage } from 'react-stow'
import { createStorageHook } from 'react-stow/util'

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

> Note: This example will trigger eventing since its utilizing built in stores within the custom store.
