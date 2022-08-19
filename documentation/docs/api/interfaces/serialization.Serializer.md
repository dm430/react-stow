---
id: "serialization.Serializer"
title: "Interface: Serializer"
sidebar_label: "serialization.Serializer"
custom_edit_url: null
---

[serialization](../modules/serialization.md).Serializer

Provides a contract for storage serialization.

## Implemented by

- [`JsonSerializer`](../classes/serialization.JsonSerializer.md)
- [`NoOpSerializer`](../classes/serialization.NoOpSerializer.md)

## Methods

### deserialize

▸ **deserialize**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Defined in

serialization/Serializer.ts:6

___

### serialize

▸ **serialize**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Defined in

serialization/Serializer.ts:5
