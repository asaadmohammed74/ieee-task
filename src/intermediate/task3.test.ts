import { sumPositive } from "./task3"

describe('Task 3: find sum of all positive integers', () => {
    test('should return 0 when no elements', () => {
        expect(sumPositive([])).toBe(0)
    })

    test('should return the sum of all positive integers', () => {
        expect(sumPositive([1, 2, 3])).toBe(6)
        expect(sumPositive([1, -2, 3, 4, -5])).toBe(8)
        expect(sumPositive([-1, -2, -3])).toBe(0)
    })
})