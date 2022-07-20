import Serializer from './Serializer'

/**
 * An inert serializer that returns the value passed 
 * to it's serialize and deserialize functions.
 */
class NoOpSerializer implements Serializer {
    serialize(value: any): any {
        return value
    }

    deserialize(value: any) {
        return value
    }
}

export default NoOpSerializer