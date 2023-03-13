import { reverseNumber } from './reverse-number'

describe('reverseNumber', () => {
    it('should return the same single digit', () => {
        expect(reverseNumber(0)).toBe(0)
        expect(reverseNumber(1)).toBe(1)
    })

    it('should reverse multi digit numbers', () => {
        expect(reverseNumber(1234)).toBe(4321)
        expect(reverseNumber(123456789)).toBe(987654321)
    })

    it('should remove trailing zeros', () => {
        expect(reverseNumber(1000)).toBe(1)
        expect(reverseNumber(45610200)).toBe(201654)
    })
})