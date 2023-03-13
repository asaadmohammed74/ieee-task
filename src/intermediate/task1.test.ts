import { findTwoLargest } from "./task1"


describe('Task 1', () => {
    test('should return null when less then 2 elements', () => {
        expect(findTwoLargest([1])).toBeNull()
        expect(findTwoLargest([])).toBeNull()
        expect(findTwoLargest([1, 2, 3])).not.toBeNull()
    })

    test('should return the largest and second largest', () => {
        expect(findTwoLargest([1, 2, 3])).toEqual([3, 2])
        expect(findTwoLargest([5, 2, 9, 8, 7])).toEqual([9, 8])
    })
})