import type { Serializer } from '../serialization'

import guardWindow from '../util/guardWindow'
import ClientStorageBase from './ClientStorageBase'

class LocalStorage extends ClientStorageBase {
	constructor(serializer?: Serializer) {
		super(
			guardWindow((window) => window?.localStorage),
			serializer
		)
	}
}

export default LocalStorage
