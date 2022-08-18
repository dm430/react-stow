---
id: "serialization.JsonSerializer"
title: "Class: JsonSerializer"
sidebar_label: "serialization.JsonSerializer"
custom_edit_url: null
---

[serialization](../modules/serialization.md).JsonSerializer

Provides JSON serialization and deserialization.

## Implements

- [`Serializer`](../interfaces/serialization.Serializer.md)

## Constructors

### constructor

• **new JsonSerializer**()

## Methods

### deserialize

▸ **deserialize**(`value`): `any`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | A JSON value to deserialize. |

#### Returns

`any`

A value deserialized to it's appropriate type.

#### Implementation of

[Serializer](../interfaces/serialization.Serializer.md).[deserialize](../interfaces/serialization.Serializer.md#deserialize)

#### Defined in

serialization/JsonSerializer.ts:19

___

### serialize

▸ **serialize**(`value`): `string`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | A value to serialize to JSON. |

#### Returns

`string`

A JSON represntation of the serialized value.

#### Implementation of

[Serializer](../interfaces/serialization.Serializer.md).[serialize](../interfaces/serialization.Serializer.md#serialize)

#### Defined in

serialization/JsonSerializer.ts:11
