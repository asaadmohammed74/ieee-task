import { findLargestString } from "./task2"

describe('Task 2: find longest string', () => {
    test('should return null when no elements', () => {
        expect(findLargestString([])).toBeNull()
    })

    test('should return the longest string', () => {
        expect(findLargestString(['a', 'ab', 'abc'])).toBe('abc')
        expect(findLargestString(['a', 'ab', 'abc', 'abcd'])).toBe('abcd')
        expect(findLargestString(["apple", "banana", "pear", "kiwi"])).toBe("banana")
    })
})