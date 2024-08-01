import foo from './foo'

test("foo(1 + 2) returns 3", () => {
    expect(foo(1,2)).toBe(3)
})