import { Serializer } from "../serialization";
import { Storage } from "../store";

class SerializedStorageDecorator extends Storage {
    storageInstance: Storage
    serializer: Serializer

    constructor(storageInstacne: Storage, serializer: Serializer) {
        super();
        this.storageInstance = storageInstacne
        this.serializer = serializer
    }

    getItem(key: string): any {
        const value = this.storageInstance.getItem(key)

        return this.serializer.deserialize(value)
    }

    setItem(key: string, value: any): void {
        const serializedValue = this.serializer.serialize(value)

        this.storageInstance.setItem(key, serializedValue)
    }

    removeItem(key: string): void {
        this.storageInstance.removeItem(key)
    }

    clear(): void {
        this.storageInstance.clear()
    }

    hasKey(key: string): boolean {
        return this.storageInstance.hasKey(key)
    }
}

export default SerializedStorageDecorator