---
id: "store.LocalStorage"
title: "Class: LocalStorage"
sidebar_label: "store.LocalStorage"
custom_edit_url: null
---

[store](../modules/store.md).LocalStorage

## Hierarchy

- `ClientStorageBase`

  ↳ **`LocalStorage`**

## Constructors

### constructor

• **new LocalStorage**(`serializer?`, `eventBus?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `serializer?` | [`Serializer`](../interfaces/serialization.Serializer.md) |
| `eventBus?` | [`EventBus`](../interfaces/event.EventBus.md) |

#### Overrides

ClientStorageBase.constructor

#### Defined in

store/LocalStorage.ts:8

## Properties

### clientStorage

• `Protected` `Optional` **clientStorage**: `Storage`

#### Inherited from

ClientStorageBase.clientStorage

#### Defined in

store/ClientStorageBase.ts:12

___

### eventBus

• `Protected` `Optional` **eventBus**: [`EventBus`](../interfaces/event.EventBus.md)

#### Inherited from

ClientStorageBase.eventBus

#### Defined in

store/ClientStorageBase.ts:14

___

### serializer

• `Protected` **serializer**: [`Serializer`](../interfaces/serialization.Serializer.md)

#### Inherited from

ClientStorageBase.serializer

#### Defined in

store/ClientStorageBase.ts:13

## Methods

### assureClientSideExecution

▸ `Protected` **assureClientSideExecution**(): `void`

Asserts that the function was run on a web client.
Otherwise an error is thrown to indicate the current execution enviorment is not supported.

#### Returns

`void`

#### Inherited from

ClientStorageBase.assureClientSideExecution

#### Defined in

store/ClientStorageBase.ts:61

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

ClientStorageBase.clear

#### Defined in

store/ClientStorageBase.ts:46

___

### getItem

▸ **getItem**(`key`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`any`

#### Inherited from

ClientStorageBase.getItem

#### Defined in

store/ClientStorageBase.ts:26

___

### hasKey

▸ **hasKey**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

#### Inherited from

ClientStorageBase.hasKey

#### Defined in

store/ClientStorageBase.ts:52

___

### removeItem

▸ **removeItem**(`key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`void`

#### Inherited from

ClientStorageBase.removeItem

#### Defined in

store/ClientStorageBase.ts:40

___

### setItem

▸ **setItem**(`key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Inherited from

ClientStorageBase.setItem

#### Defined in

store/ClientStorageBase.ts:31
