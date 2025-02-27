/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
/*   transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  }, */
  transform: {
    "^.+\\.ts?$": "ts-jest",
    "^.+\\.tsx?$": "ts-jest",
/*     "^.+\\.js?$": "babel-jest",
    "^.+\\.jsx?$": "babel-jest", */
 },
 moduleNameMapper: {
    "@/(.*)": "<rootDir>/$1",
  },
  setupFiles: ['./jest.setup.ts']
};