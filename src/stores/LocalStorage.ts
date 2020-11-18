import StorageBase from './StorageBase'

class LocalStorage extends StorageBase {
    getItem(key: string): any {
        this.assureClientSideExecution()
        return window.localStorage.getItem(key)
    }

    setItem(key: string, value: any): void {
        this.assureClientSideExecution()
        window.localStorage.setItem(key, value)
    }

    removeItem(key: string): void {
        this.assureClientSideExecution()
        window.localStorage.removeItem(key)
    }

    clear(): void {
        this.assureClientSideExecution()
        window.localStorage.clear()
    }

    hasKey(key: string): boolean {
       this.assureClientSideExecution()
       return Object.prototype.hasOwnProperty.call(window.localStorage, key)
    }
}

export default LocalStorage