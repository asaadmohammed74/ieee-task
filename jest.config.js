module.exports = {
	testMatch: ['<rootDir>/**/*.test.{ts,js}', '<rootDir>/*.test.{ts,js}'],
	collectCoverage: true,
	moduleFileExtensions: ['ts', 'js', 'json', 'node'],
	transform: {
		'^.+\\.(t|j)s?$': ['@swc/jest'],
	},
	testEnvironment: 'node',
};
