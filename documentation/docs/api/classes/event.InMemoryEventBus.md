---
id: "event.InMemoryEventBus"
title: "Class: InMemoryEventBus"
sidebar_label: "event.InMemoryEventBus"
custom_edit_url: null
---

[event](../modules/event.md).InMemoryEventBus

A basic in memory event bus implementation.

## Implements

- [`EventBus`](../interfaces/event.EventBus.md)

## Constructors

### constructor

• **new InMemoryEventBus**()

## Properties

### eventListeners

• `Protected` **eventListeners**: `Map`<`string`, `Map`<`number`, `EventCallback`\>\>

#### Defined in

event/InMemoryEventBus.ts:7

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

event/InMemoryEventBus.ts:9

___

### register

▸ **register**(`event`, `listener`): () => `void`

Registers a listener under the provided event name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | The name of the event. |
| `listener` | `EventCallback` | The callback to be invoked when an event is dispatched. |

#### Returns

`fn`

A function used to deregister the established listener.

▸ (): `void`

##### Returns

`void`

#### Implementation of

[EventBus](../interfaces/event.EventBus.md).[register](../interfaces/event.EventBus.md#register)

#### Defined in

event/InMemoryEventBus.ts:17
