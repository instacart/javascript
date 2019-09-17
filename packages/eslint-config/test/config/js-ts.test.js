import { runFixture } from '../utils'

describe('js-ts', () => {
  describe('circular deps', () => {
    it('should have an error', () => {
      const result = runFixture('js-ts/cycle')

      expect(result.errorCount).toBe(3)
      expect(result.warningCount).toBe(0)
    })
  })
})
