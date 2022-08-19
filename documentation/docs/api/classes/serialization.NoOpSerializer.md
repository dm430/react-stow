---
id: "serialization.NoOpSerializer"
title: "Class: NoOpSerializer"
sidebar_label: "serialization.NoOpSerializer"
custom_edit_url: null
---

[serialization](../modules/serialization.md).NoOpSerializer

An inert serializer that returns the value passed
to it's serialize and deserialize functions.

## Implements

- [`Serializer`](../interfaces/serialization.Serializer.md)

## Constructors

### constructor

• **new NoOpSerializer**()

## Methods

### deserialize

▸ **deserialize**(`value`): `any`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | the value to pass through deserialization. |

#### Returns

`any`

the value passed to the function.

#### Implementation of

[Serializer](../interfaces/serialization.Serializer.md).[deserialize](../interfaces/serialization.Serializer.md#deserialize)

#### Defined in

serialization/NoOpSerializer.ts:20

___

### serialize

▸ **serialize**(`value`): `any`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | the value to pass through serialization. |

#### Returns

`any`

the value passed to the function.

#### Implementation of

[Serializer](../interfaces/serialization.Serializer.md).[serialize](../interfaces/serialization.Serializer.md#serialize)

#### Defined in

serialization/NoOpSerializer.ts:12
