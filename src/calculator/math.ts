// TODO: support ( )

type Operations = '+' | '-' | '/' | '*' //| '(' | ')'
type Token = number | Operations

export function isOp(c: string): c is Operations {
	return c === '+' || c === '-' || c === '/' || c === '*' // || c === '(' || c === ')'
}

export function parseTokens(str: string) {
	const tokens = [] as Token[]
	let n = ''

	for (let i = 0; i < str.length; i++) {
		const c = str[i]

		if (isOp(c)) {
			if (n.length !== 0) {

				tokens.push(+n)

				n = '';
			}

			tokens.push(c)

			continue;
		}

		n += c
	}

	if (n.length !== 0) {
		tokens.push(+n)
	}

	return tokens
}

export function fixNegativeNumbers(tokens: Token[]) {
	const newTokens = [] as Token[]

	for (let i = 0; i < tokens.length; i++) {
		const token = tokens[i]

		if (token === '-') {
			const next = tokens[i + 1]
			const prev = tokens[i - 1]

			if (typeof next === 'number' && typeof prev !== "number") {
				tokens[i + 1] = -next

				continue
			}
		}

		newTokens.push(token)
	}

	return newTokens
}

export function groupTokens(tokens: Token[]) {
	const groups = [] as Token[][]

	for (let i = 0; i < tokens.length; i++) {
		const token = tokens[i]
		const next = tokens[i + 1]

		if (next === '*' || next === '/') {
			groups.push([
				token,
				next,
				tokens[i + 2]
			])

			i += 2;

			continue
		}

		groups.push([token])
	}

	return groups
}

export function evaluateGroups(tokenGroups: Token[][]) {
	const tokens = [] as Token[]

	for (const tokenGroup of tokenGroups) {
		if (tokenGroup.length === 3) {
			tokens.push(evaluateTokens(tokenGroup))
		} else {
			tokens.push(...tokenGroup)
		}
	}

	return tokens
}

export function evaluateTokens(tokens: Token[]) {
	let res = tokens[0]

	if (typeof res !== 'number') {
		throw 'token stream must start with a number'
	}

	for (let i = 1; i < tokens.length; i += 2) {
		const operation = tokens[i]
		const number = tokens[i + 1]

		if (typeof number !== 'number') {
			throw 'token stream must alternate between number and operation'
		}

		if (operation === '*') {
			res *= number;
		} else if (operation === '/') {
			res /= number;
		} else if (operation === '+') {
			res += number
		} else if (operation === '-') {
			res -= number
		}
	}

	return res
}

export function evaluateString(str: string) {
	let tokens = parseTokens(str)

	tokens = fixNegativeNumbers(tokens)

	let groups = groupTokens(tokens)

	const evaluatedGroups = evaluateGroups(groups)

	const finalValue = evaluateTokens(evaluatedGroups)

	return finalValue
}