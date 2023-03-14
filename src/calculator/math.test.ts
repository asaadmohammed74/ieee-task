import { evaluateGroups, evaluateString, fixNegativeNumbers, groupTokens, parseTokens } from './math'

describe('Calculator math core', () => {
    const str = '-1--57+-6/6+-9-18*55'

    test('should return a list of tokens', () => {
        const tokens = parseTokens(str)

        expect(tokens).toMatchObject([
            '-', 1, '-', '-', 57, '+', '-', 6, '/', 6, '+', '-', 9, '-', 18, '*', 55
        ])

        expect(str).toBe(tokens.join(''))
    })

    test('should remove consecutive negative numbers', () => {
        const tokens = fixNegativeNumbers(parseTokens(str))

        expect(tokens).toMatchObject([
            -1, '-', -57, '+', -6, '/', 6, '+', -9, '-', 18, '*', 55
        ])
    })

    test('should group multiplication and division', () => {
        const tokens = fixNegativeNumbers(parseTokens(str))

        const groups = groupTokens(tokens)

        expect(groups).toMatchObject([
            [-1], ['-'], [-57], ['+'], [-6, '/', 6], ['+'], [-9], ['-'], [18, '*', 55]
        ])
    })

    test('should evaluate nested groups', () => {
        const tokens = fixNegativeNumbers(parseTokens(str))

        const groups = groupTokens(tokens)

        const flatTokens = evaluateGroups(groups)

        expect(flatTokens).toMatchObject([
            -1, '-', -57, '+', -6 / 6, '+', -9, '-', 18 * 55
        ])
    })

    test('should return correct value', () => {
        expect(evaluateString(str)).toBe(
            -1 - (-57) + -6 / 6 + -9 - 18 * 55
        )
    })

    test('should throw on invalid input', () => {
        expect.assertions(1);

        try {
            evaluateString('12++4')
        } catch (e) {
            expect(e).toBe("token stream must alternate between number and operation")
        }
    })

    test('should throw when input begin with an op and a number', () => {
        expect.assertions(1);

        try {
            evaluateString('+12++4')
        } catch (e) {
            expect(e).toBe("token stream must start with a number")
        }
    })
})