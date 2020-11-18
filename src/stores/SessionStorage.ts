import StorageBase from './StorageBase'

class SessionStorage extends StorageBase {
    getItem(key: string): any {
        this.assureClientSideExecution()
        return window.sessionStorage.getItem(key)
    }

    setItem(key: string, value: any): void {
        this.assureClientSideExecution()
        window.sessionStorage.setItem(key, value)
    }

    removeItem(key: string): void {
        this.assureClientSideExecution()
        window.sessionStorage.removeItem(key)
    }

    clear(): void {
        this.assureClientSideExecution()
        window.sessionStorage.clear()
    }

    hasKey(key: string): boolean {
       this.assureClientSideExecution()
       return Object.prototype.hasOwnProperty.call(window.sessionStorage, key)
    }
}

export default SessionStorage