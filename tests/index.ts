import { useLocalStorage, localStorage, sessionStorage } from "../src";
import { createLocalStorageHook, createStorageHook } from "../src/util";

const Test = (props) => {
  const [value, setValue, deleteKey] = useLocalStorage("test-key", 123);

  const useCustomLocalStorage = createLocalStorageHook({
    serialize(value: any) {
      return value + " (custom serialize)";
    },
    deserialize(value: string): any {
      return value + " (custom deserialize)";
    },
  });

  let useCustomStorage = createStorageHook({
    getItem(key: string): any {
        return localStorage.getItem(key)
    },
    setItem(key: string, value: any): void {
        localStorage.setItem(key, value)
        sessionStorage.setItem(key, value)
    },
    removeItem(key: string): void {
        localStorage.removeItem(key)
        sessionStorage.removeItem(key)
    },
    clear(): void {
        localStorage.clear()
        sessionStorage.clear()
    },
    hasKey(key: string): boolean {
        return localStorage.hasKey(key)
    }
  })
};
