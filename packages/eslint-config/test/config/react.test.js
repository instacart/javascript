import { runFixture } from '../utils'

describe('react', () => {
  describe('sort comp', () => {
    it('should have no errors or warnings', () => {
      const result = runFixture('react/sort-comp-no-errors')

      expect(result.errorCount).toBe(0)
      expect(result.warningCount).toBe(0)
    })
  })
})
