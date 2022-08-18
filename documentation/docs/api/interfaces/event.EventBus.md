---
id: "event.EventBus"
title: "Interface: EventBus"
sidebar_label: "event.EventBus"
custom_edit_url: null
---

[event](../modules/event.md).EventBus

## Implemented by

- [`InMemoryEventBus`](../classes/event.InMemoryEventBus.md)
- [`WindowEventBus`](../classes/event.WindowEventBus.md)

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

#### Defined in

event/EventBus.ts:12

___

### register

▸ **register**(`event`, `callback`): () => `void`

Registers a listener under the provided event name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | The name of the event. |
| `callback` | `EventCallback` | The callback to be invoked when an event is dispatched. |

#### Returns

`fn`

A function used to deregister the established listener.

▸ (): `void`

Registers a listener under the provided event name.

##### Returns

`void`

A function used to deregister the established listener.

#### Defined in

event/EventBus.ts:21
