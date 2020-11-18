import Serializer from './Serializer'

class JsonSerializer implements Serializer {
    serialize(value: any): string {
        return JSON.stringify(value)
    }

    deserialize(value: string) {
        return JSON.parse(value)
    }
}

export default JsonSerializer