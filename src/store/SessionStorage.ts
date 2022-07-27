import type EventBus from '../event/EventBus'
import type { Serializer } from '../serialization'

import guardWindow from '../util/guardWindow'
import ClientStorageBase from './ClientStorageBase'

class SessionStorage extends ClientStorageBase {
	constructor(serializer?: Serializer, eventBus?: EventBus) {
		super(
			guardWindow((window) => window?.sessionStorage),
			serializer,
			eventBus
		)
	}
}

export default SessionStorage
