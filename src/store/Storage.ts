interface Storage {
    getItem(key: string): any

    setItem(key: string, value: any): void

    removeItem(key: string): void

    clear(): void

    hasKey(key: string): boolean
}

export default Storage