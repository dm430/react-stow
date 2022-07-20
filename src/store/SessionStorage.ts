import ClientStorageBase from './ClientStorageBase'

class SessionStorage extends ClientStorageBase {
    constructor() {
        super(window.sessionStorage)
    }
}

export default SessionStorage