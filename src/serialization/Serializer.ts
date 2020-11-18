interface Serializer {
    serialize(value: any): string
    deserialize(value: string): any
}

export default Serializer