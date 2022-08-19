---
id: "event.WindowEventBus"
title: "Class: WindowEventBus"
sidebar_label: "event.WindowEventBus"
custom_edit_url: null
---

[event](../modules/event.md).WindowEventBus

An [InMemoryEventBus](event.InMemoryEventBus.md) instance that also registers event listeners with the window.

## Implements

- [`EventBus`](../interfaces/event.EventBus.md)

## Constructors

### constructor

• **new WindowEventBus**()

## Properties

### eventBus

• `Protected` **eventBus**: [`InMemoryEventBus`](event.InMemoryEventBus.md)

#### Defined in

event/WindowEventBus.ts:10

## Methods

### dispatch

▸ **dispatch**<`T`\>(`event`, `payload?`): `void`

Dispatches all a message to all listeners registered under the provided event name.

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | the type for the payload. |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | The name of the event. |
| `payload?` | `T` | The value to be passed to the event listener. |

#### Returns

`void`

#### Implementation of

[EventBus](../interfaces/event.EventBus.md).[dispatch](../interfaces/event.EventBus.md#dispatch)

#### Defined in

event/WindowEventBus.ts:23

___

### register

▸ **register**(`event`, `listener`): () => `void`

Registers a listener under the provided event name with the [InMemoryEventBus](event.InMemoryEventBus.md) and window.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | The name of the event. |
| `listener` | `EventCallback` | - |

#### Returns

`fn`

A function used to deregister the established listener.

▸ (): `void`

Registers a listener under the provided event name with the [InMemoryEventBus](event.InMemoryEventBus.md) and window.

##### Returns

`void`

A function used to deregister the established listener.

#### Implementation of

[EventBus](../interfaces/event.EventBus.md).[register](../interfaces/event.EventBus.md#register)

#### Defined in

event/WindowEventBus.ts:34

___

### mapEventPayload

▸ `Static` `Private` **mapEventPayload**(`eventResult`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventResult` | `Event` |

#### Returns

`any`

#### Defined in

event/WindowEventBus.ts:12
