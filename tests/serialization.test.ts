import { NoOpSerializer, JsonSerializer } from "../src/serialization"

describe.each([1234, true, { test: 1 }, "test text", [1, 2, 3, 4]])(
  "NoOpSerializer",
  (input) => {
    const serializer = new NoOpSerializer()

    it(`should return the expected value when serialize(${input}) is called`, () => {
      expect(serializer.serialize(input)).toEqual(input)
    })

    it(`should return the expected value when deserialize(${input}) is called`, () => {
      expect(serializer.deserialize(input)).toEqual(input)
    })
  }
)

describe.each([
  [1234, "1234"],
  [true, "true"],
  [{ test: 1 }, '{"test":1}'],
  ["test text", '"test text"'],
  [[1, 2, 3, 4], "[1,2,3,4]"],
])("JsonSerializer", (input, expectedOutput) => {
  const serializer = new JsonSerializer()

  it(`should return the expected value when serialize(${input}) is called`, () => {
    expect(serializer.serialize(input)).toEqual(expectedOutput)
  })

  it(`should return the expected value when deserialize(${expectedOutput}) is called`, () => {
    expect(serializer.deserialize(expectedOutput)).toEqual(input)
  })
})
