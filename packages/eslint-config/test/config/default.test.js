import { runFixture } from '../utils'

describe('default config', () => {
  describe('no-errors', () => {
    it('should have no errors or warnings', () => {
      const result = runFixture('default/no-errors')

      expect(result.errorCount).toBe(0)
      expect(result.warningCount).toBe(0)
    })
  })

  describe('class-assign-error', () => {
    it('should have an error and no warnings', () => {
      const result = runFixture('default/class-assign-error')

      expect(result.errorCount).toBe(1)
      expect(result.warningCount).toBe(0)
    })
  })
})
