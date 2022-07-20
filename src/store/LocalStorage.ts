import ClientStorageBase from './ClientStorageBase'

class LocalStorage extends ClientStorageBase {
    constructor() {
        super(window.localStorage)
    }
}

export default LocalStorage