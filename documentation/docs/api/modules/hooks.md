---
id: "hooks"
title: "Module: hooks"
sidebar_label: "hooks"
sidebar_position: 0
custom_edit_url: null
---

## Functions

### useLocalStorage

▸ **useLocalStorage**<`ValueType`\>(`key`, `initialValue?`, `options?`): [`StorageHookReturnValues`](util.md#storagehookreturnvalues)<`ValueType`\>

A hook used to interface with a type of storage.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `ValueType` | the type for the value associated with the key/value pair. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | key for the key/value pair. |
| `initialValue?` | `ValueType` | this value will be written to the store, if no key/value pair exits for the specifed key. |
| `options?` | [`StorageHookOptions`](../interfaces/util.StorageHookOptions.md) | used to supply additional options to the hook, such as key subscription. |

#### Returns

[`StorageHookReturnValues`](util.md#storagehookreturnvalues)<`ValueType`\>

an array containing the current value, a set function, a delete function, and an error, if one occurred.

#### Defined in

util/createStorageHook.ts:34

___

### useSessionStorage

▸ **useSessionStorage**<`ValueType`\>(`key`, `initialValue?`, `options?`): [`StorageHookReturnValues`](util.md#storagehookreturnvalues)<`ValueType`\>

A hook used to interface with a type of storage.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `ValueType` | the type for the value associated with the key/value pair. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | key for the key/value pair. |
| `initialValue?` | `ValueType` | this value will be written to the store, if no key/value pair exits for the specifed key. |
| `options?` | [`StorageHookOptions`](../interfaces/util.StorageHookOptions.md) | used to supply additional options to the hook, such as key subscription. |

#### Returns

[`StorageHookReturnValues`](util.md#storagehookreturnvalues)<`ValueType`\>

an array containing the current value, a set function, a delete function, and an error, if one occurred.

#### Defined in

util/createStorageHook.ts:34
