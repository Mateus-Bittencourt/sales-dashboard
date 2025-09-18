import { jwtExpirationDateConverter } from '@utils'

describe('jwtExpirationDateConverter', () => {
  const realDateNow = Date.now.bind(global.Date)

  beforeAll(() => {
    // Mock Date.now() to return a fixed timestamp
    global.Date.now = jest.fn(() => new Date('2024-07-01T00:00:00Z').getTime())
  })

  afterAll(() => {
    // Restore original Date.now() implementation
    global.Date.now = realDateNow
  })

  it('should return 0 when exp is at the same time', () => {
    const exp = Math.floor(Date.now() / 1000)
    const result = jwtExpirationDateConverter(exp)
    expect(result).toBe(0)
  })

  it('should return 1 when exp is 1 day in the future', () => {
    const exp = Math.floor(Date.now() / 1000) + 86400 // 1 day
    const result = jwtExpirationDateConverter(exp)
    expect(result).toBe(1)
  })

  it('should correctly convert expiration date in a fraction of a day, 12 hours in the future', () => {
    const exp = Math.floor(Date.now() / 1000) + 43200 // 0.5 days
    const result = jwtExpirationDateConverter(exp)
    expect(result).toBe(0.5)
  })
})
