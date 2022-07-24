import each from 'jest-each'
import { LocalStorage, SessionStorage } from '../src/store'

describe.each([
	['SessionStorage', SessionStorage, window?.sessionStorage],
	['LocalStorage', LocalStorage, window.localStorage]
])('storage class: %s', (_name, StorageClass, windowStore) => {
	const key = 'test-key'

	const windowSpy = jest.spyOn(window, 'window', 'get')

	afterEach(() => {
		windowSpy.mockClear()
	})

	const storageInstance = new StorageClass()

	beforeEach(() => {
		windowStore.clear()
	})

	each([
		[1],
		['test value'],
		[false],
		[{ someKey: 'some value', anotherKey: 123 }]
	]).it(`should write JSON to the ${name}`, (input) => {
		const expected = JSON.stringify(input)

		storageInstance.setItem(key, input)
		expect(windowStore.getItem(key)).toEqual(expected)
	})

	each([
		[1],
		['test value'],
		[false],
		[{ someKey: 'some value', anotherKey: 123 }]
	]).it(`should read JSON value from ${name}`, (input) => {
		windowStore.setItem(key, JSON.stringify(input))
		expect(storageInstance.getItem(key)).toEqual(input)
	})

	it('should clear all values from the store', () => {
		windowStore.setItem('test-1', 'false')
		windowStore.setItem('test-2', 'fake value')
		windowStore.setItem('test-1', '1234')

		storageInstance.clear()
		expect(windowStore.length).toBe(0)
	})

	it('should throw an error when window is undefined', () => {
		// @ts-ignore
		windowSpy.mockImplementation(() => undefined)
		const storageInsstance = new StorageClass()

		// Any function will work.
		expect(() => storageInsstance.clear()).toThrow()
	})
})
