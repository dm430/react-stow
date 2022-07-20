
import { jsonSerializerInstance, sessionStorageInstance } from '../global/constants';
import createStorageHook from "./createStorageHook";
import { SerializerResolver } from "./types";

export default (resolveSerializerInstance: SerializerResolver = jsonSerializerInstance) => {
    return createStorageHook(sessionStorageInstance, resolveSerializerInstance);
}
