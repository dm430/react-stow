import type { EventBus } from '../event'
import type { Serializer } from '../serialization'

import guardWindow from '../util/guardWindow'
import ClientStorageBase from './ClientStorageBase'

class LocalStorage extends ClientStorageBase {
	constructor(serializer?: Serializer, eventBus?: EventBus) {
		super(
			guardWindow((window) => window?.localStorage),
			serializer,
			eventBus
		)
	}
}

export default LocalStorage
