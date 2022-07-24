import type { Serializer } from '../serialization'

import guardWindow from '../util/guardWindow'
import ClientStorageBase from './ClientStorageBase'

class SessionStorage extends ClientStorageBase {
	constructor(serializer?: Serializer) {
		super(
			guardWindow((window) => window?.sessionStorage),
			serializer
		)
	}
}

export default SessionStorage
