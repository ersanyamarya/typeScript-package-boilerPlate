import { divide, multiply, sum } from '../dist'

describe('It tests the sum function', () => {
  it('should add two numbers', () => {
    expect(sum(1, 2)).toBe(3)
  })
  it('should not subtract two number', () => {
    expect(sum(1, 2)).not.toBe(1)
  })
})

describe('Testing multiplication function', () => {
  it('should multiply two numbers', () => {
    expect(multiply(2, 2)).toBe(4)
  })
  it('should not divide two numbers', () => {
    expect(multiply(2, 2)).not.toBe(1)
  })
})

describe('Testing division function', () => {
  it('should divide two numbers', () => {
    expect(divide(2, 2)).toBe(1)
  })
  it('should not multiply two numbers', () => {
    expect(divide(2, 2)).not.toBe(4)
  })
})
