import { renderHook, act } from '@testing-library/react-hooks'
import { useLocalStorage, useSessionStorage } from '../src/hooks'

const key = 'test-key'

describe.each([
	['useSessionStorage', useSessionStorage, window.sessionStorage],
	['useLocalStorage', useLocalStorage, window.localStorage]
])('storage: %s', (name, hook, windowStore) => {
	afterEach(() => {
		windowStore.clear()
	})

	it('should return null when no inital value is supplied, or no value is stored', () => {
		const { result } = renderHook(() => hook('test-key'))

		expect(result.current[0]).toBeNull()
	})

	it('should return the inital value when no value is stored', () => {
		const expectedValue = 'inital value'
		const { result } = renderHook(() => hook('test-key', expectedValue))

		expect(result.current[0]).toBe(expectedValue)
	})

	it(`should not store the inital value in ${name} when a value is stored`, () => {
		const expectedValue = 'this should not be overwritten'

		windowStore.setItem(key, JSON.stringify(expectedValue))

		const initalValue = 'inital value'
		renderHook(() => hook(key, initalValue))

		const storedValue = windowStore.getItem(key)

		expect(storedValue).not.toBe(`"${initalValue}"`)
		expect(storedValue).toBe(`"${expectedValue}"`)
	})

	it(`should store the inital value in ${name} when no value is stored`, () => {
		const expectedValue = 'inital value'

		renderHook(() => hook(key, expectedValue))
		expect(windowStore.getItem(key)).toBe(`"${expectedValue}"`)
	})

	it('should update state value when the setValue function is called', () => {
		const { result } = renderHook(() => hook(key))
		const expectdValue = 'new value'

		act(() => {
			result.current[1](expectdValue)
		})

		expect(result.current[0]).toBe(expectdValue)
	})

	it(`should update the ${name} value when the setValue function is called`, () => {
		const { result } = renderHook(() => hook(key))
		const expectdValue = 'new value store test'

		act(() => {
			result.current[1](expectdValue)
		})

		expect(windowStore.getItem(key)).toBe(`"${expectdValue}"`)
	})

	it(`should remove key from ${name} when the remove function is called`, () => {
		const { result } = renderHook(() => hook(key, 'inital value'))

		act(() => {
			result.current[2]()
		})

		expect(windowStore.length).toBe(0)
	})

	it('should be null when the remove function is called', () => {
		const { result } = renderHook(() => hook(key, 'inital value'))

		act(() => {
			result.current[2]()
		})

		expect(result.current[0]).toBeNull()
	})

	it('should return previous value and error when an error occures', () => {
		windowStore.setItem(key, '{ "bad": "test"')
		const { result } = renderHook(() => hook(key))

		expect(result.current[0]).toBeNull()
		expect(result.current[3]).toBeInstanceOf(Error)
	})

	it('should synchronize hook values', () => {
		const initialValue = 'inital value sync'
		const expected = 'new value synchronize'

		const { result: result1 } = renderHook(() => hook(key, initialValue))
		const { result: result2 } = renderHook(() => hook(key, initialValue))

		expect(result1.current[0]).toBe(initialValue)
		expect(result2.current[0]).toBe(initialValue)

		act(() => {
			result1.current[1](expected)
		})

		expect(result1.current[0]).toBe(expected)
		expect(result2.current[0]).toBe(expected)
	})

	it('should not synchronize hook values when one hook doesnt subscribe', () => {
		const initialValue = 'inital value sync'
		const expected = 'new value synchronize'

		const { result: result1 } = renderHook(() => hook(key, initialValue))
		const { result: result2 } = renderHook(() =>
			hook(key, initialValue, { enableKeySubscription: false })
		)

		expect(result1.current[0]).toBe(initialValue)
		expect(result2.current[0]).toBe(initialValue)

		act(() => {
			result1.current[1](expected)
		})

		expect(result1.current[0]).toBe(expected)
		expect(result2.current[0]).toBe(initialValue)
	})

	it('should return the new value when the window event bus is invoked', async () => {
		const { result } = renderHook(() => hook(key, 'inital value'))
		const expected = 'new value from event'
		const jsonExpected = `"${expected}"`

		act(() => {
			windowStore.setItem(key, jsonExpected)
			window.dispatchEvent(
				new StorageEvent('storage', {
					key: key,
					newValue: jsonExpected
				})
			)
		})

		expect(result.current[0]).toBe(expected)
	})
})
