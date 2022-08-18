---
id: "store.Storage"
title: "Interface: Storage"
sidebar_label: "store.Storage"
custom_edit_url: null
---

[store](../modules/store.md).Storage

Provides access to a particular storage domain. It allows for the addition, modification, or deletion of stored data.

## Methods

### clear

▸ **clear**(): `void`

Removes all key/value pairs, if any exist.

#### Returns

`void`

#### Defined in

store/Storage.ts:30

___

### getItem

▸ **getItem**(`key`): `any`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | the key for the key/value pair. |

#### Returns

`any`

the current value associated with the given key, or null if the given key does not exist.

#### Defined in

store/Storage.ts:10

___

### hasKey

▸ **hasKey**(`key`): `boolean`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | the key for the key/value pair. |

#### Returns

`boolean`

a boolean value that indicates if a key/value pair exists for a given key.

#### Defined in

store/Storage.ts:37

___

### removeItem

▸ **removeItem**(`key`): `void`

Removes the key/value pair entry for the given key, if one exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | the key for the key/value pair. |

#### Returns

`void`

#### Defined in

store/Storage.ts:25

___

### setItem

▸ **setItem**(`key`, `value`): `void`

Sets the value of the pair identified by key to value, creating a new key/value pair if none existed for the key previously.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | the key for the key/value pair. |
| `value` | `any` | the value to store. |

#### Returns

`void`

#### Defined in

store/Storage.ts:18
