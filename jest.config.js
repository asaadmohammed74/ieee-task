module.exports = {
	silent: true,
	testMatch: ['<rootDir>/src/**/*.test.{ts,js}'],
	collectCoverage: true,
	moduleFileExtensions: ['ts', 'js', 'json', 'node'],
	transform: {
		'^.+\\.(t|j)s?$': ['@swc/jest'],
	},
	testEnvironment: 'node',
};
