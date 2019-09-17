import { runFixture } from '../utils'

describe('typescript', () => {
  describe('multiple exports', () => {
    it('should have no errors or warnings', () => {
      const result = runFixture('typescript/multiple-exports')

      expect(result.errorCount).toBe(0)
      expect(result.warningCount).toBe(0)
    })
  })

  describe('circular deps', () => {
    it('should have an error', () => {
      const result = runFixture('typescript/cycle')

      expect(result.errorCount).toBe(2)
      expect(result.warningCount).toBe(0)
    })
  })
})
