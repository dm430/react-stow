import Storage from './Storage'

abstract class ClientStorageBase implements Storage {
    abstract getItem(key: string): any

    abstract setItem(key: string, value: any): void

    abstract removeItem(key: string): void

    abstract clear(): void

    abstract hasKey(key: string): boolean
  
    protected assureClientSideExecution(): void {
        if (typeof window === 'undefined') {
            throw new Error('The Web Storage API is not supported in this enviorment.')
        }
    }
  }

  export default ClientStorageBase