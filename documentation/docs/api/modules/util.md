---
id: "util"
title: "Module: util"
sidebar_label: "util"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [StorageHook](../interfaces/util.StorageHook.md)
- [StorageHookOptions](../interfaces/util.StorageHookOptions.md)

## Type Aliases

### Resolver

Ƭ **Resolver**<`T`\>: `T` \| [`ResolverCallBack`](util.md#resolvercallback)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

util/resolve.ts:2

___

### ResolverCallBack

Ƭ **ResolverCallBack**<`T`\>: () => `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (): `T`

##### Returns

`T`

#### Defined in

util/resolve.ts:1

___

### StorageHookReturnValues

Ƭ **StorageHookReturnValues**<`ValueType`\>: [value: ValueType \| null, setValue: Function, deleteKey: Function, error: Error \| null]

#### Type parameters

| Name |
| :------ |
| `ValueType` |

#### Defined in

util/createStorageHook.ts:11

## Functions

### createLocalStorageHook

▸ **createLocalStorageHook**(`resolveSerializerInstance?`): [`StorageHook`](../interfaces/util.StorageHook.md)<[`LocalStorage`](../classes/store.LocalStorage.md)\>

A utility used to create a local storage hook instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resolveSerializerInstance?` | [`Resolver`](util.md#resolver)<[`Serializer`](../interfaces/serialization.Serializer.md)\> | A serializer instance or resolver function. |

#### Returns

[`StorageHook`](../interfaces/util.StorageHook.md)<[`LocalStorage`](../classes/store.LocalStorage.md)\>

A storage hook bound to local storage and serializer.

#### Defined in

util/createLocalStorageHook.ts:15

___

### createSessionStorageHook

▸ **createSessionStorageHook**(`resolveSerializerInstance?`): [`StorageHook`](../interfaces/util.StorageHook.md)<[`SessionStorage`](../classes/store.SessionStorage.md)\>

A utility used to create a session storage hook instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resolveSerializerInstance?` | [`Resolver`](util.md#resolver)<[`Serializer`](../interfaces/serialization.Serializer.md)\> | A serializer instance or resolver function. |

#### Returns

[`StorageHook`](../interfaces/util.StorageHook.md)<[`SessionStorage`](../classes/store.SessionStorage.md)\>

A storage hook bound to session storage and serializer.

#### Defined in

util/createSessionStorageHook.ts:15

___

### createStorageHook

▸ **createStorageHook**<`T`\>(`resolveStorageInstance`, `resolveEventBusInstance?`): [`StorageHook`](../interfaces/util.StorageHook.md)<`T`\>

A utility used to create a storage hook instance.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Storage`](../interfaces/store.Storage.md) |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `resolveStorageInstance` | [`Resolver`](util.md#resolver)<`T`\> | `undefined` | A storage instance or resolver function. |
| `resolveEventBusInstance` | [`Resolver`](util.md#resolver)<[`EventBus`](../interfaces/event.EventBus.md)\> | `windowEventBusInstance` | - |

#### Returns

[`StorageHook`](../interfaces/util.StorageHook.md)<`T`\>

A storage hook bound to a particular storage instance and serializer.

#### Defined in

util/createStorageHook.ts:58

___

### resolve

▸ **resolve**<`T`\>(`resolveInstance`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `resolveInstance` | [`Resolver`](util.md#resolver)<`T`\> |

#### Returns

`T`

#### Defined in

util/resolve.ts:4
