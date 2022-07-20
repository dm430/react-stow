import { jsonSerializerInstance, localStorageInstance } from "../global/constants";
import { SerializerResolver } from "./types";
import createStorageHook from "./createStorageHook";

export default (resolveSerializerInstance: SerializerResolver = jsonSerializerInstance) => {
    return createStorageHook(localStorageInstance, resolveSerializerInstance);
}