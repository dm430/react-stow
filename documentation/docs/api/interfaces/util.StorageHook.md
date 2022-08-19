---
id: "util.StorageHook"
title: "Interface: StorageHook<StorageType>"
sidebar_label: "util.StorageHook"
custom_edit_url: null
---

[util](../modules/util.md).StorageHook

## Type parameters

| Name | Type |
| :------ | :------ |
| `StorageType` | extends [`Storage`](store.Storage.md) |

## Callable

### StorageHook

▸ **StorageHook**<`ValueType`\>(`key`, `initialValue?`, `options?`): [`StorageHookReturnValues`](../modules/util.md#storagehookreturnvalues)<`ValueType`\>

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
| `options?` | [`StorageHookOptions`](util.StorageHookOptions.md) | used to supply additional options to the hook, such as key subscription. |

#### Returns

[`StorageHookReturnValues`](../modules/util.md#storagehookreturnvalues)<`ValueType`\>

an array containing the current value, a set function, a delete function, and an error, if one occurred.

#### Defined in

util/createStorageHook.ts:34
