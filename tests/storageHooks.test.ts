import { renderHook, act } from '@testing-library/react-hooks'

const useLocalStorage = require('../src/hooks/useLocalStorage').default
const useSessionStorage = require('../src/hooks/useSessionStorage').default

describe.each([
	['sessionStorage', useSessionStorage, window.sessionStorage],
	['localStorage', useLocalStorage, window.localStorage]
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
		const key = 'test-key'
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
		const key = 'test-key'

		renderHook(() => hook(key, expectedValue))
		expect(windowStore.getItem(key)).toBe(`"${expectedValue}"`)
	})

	it('should update state value when the setValue function is called', () => {
		const { result } = renderHook(() => hook('test-key'))
		const expectdValue = 'new value'

		act(() => {
			result.current[1](expectdValue)
		})

		expect(result.current[0]).toBe(expectdValue)
	})

	it(`should update the ${name} value when the setValue function is called`, () => {
		const { result } = renderHook(() => hook('test-key'))
		const expectdValue = 'new value'

		act(() => {
			result.current[1](expectdValue)
		})

		expect(windowStore.getItem('test-key')).toBe(`"${expectdValue}"`)
	})

	it(`should remove key from ${name} when the remove function is called`, () => {
		const { result } = renderHook(() => hook('test-key', 'inital value'))

		act(() => {
			result.current[2]()
		})

		expect(windowStore.length).toBe(0)
	})

	it('should be null when the remove function is called', () => {
		const { result } = renderHook(() => hook('test-key', 'inital value'))

		act(() => {
			result.current[2]()
		})

		expect(result.current[0]).toBeNull()
	})

	it('should return previous value and error when an error occures', () => {
		windowStore.setItem('test-key', '{ "bad": "test"')
		const { result } = renderHook(() => hook('test-key'))

		expect(result.current[0]).toBeNull()
		expect(result.current[3]).toBeInstanceOf(Error)
	})
})
