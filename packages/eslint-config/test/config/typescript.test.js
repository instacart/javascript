import path from 'path'
import { runFixture } from '../utils'

describe('typescript', () => {
  describe('multiple exports', () => {
    runFixture('typescript/multiple-exports').results.forEach(r => {
      const file = path.basename(r.filePath)

      it(`${file} has no errors or warnings`, () => {
        expect(r.messages).toEqual([])
        expect(r.errorCount).toBe(0)
        expect(r.warningCount).toBe(0)
      })
    })
  })

  describe('circular deps', () => {
    runFixture('typescript/cycle').results.forEach(r => {
      const file = path.basename(r.filePath)

      it(`${file} has an error`, () => {
        expect(r.messages).toContainEqual(expect.objectContaining({ ruleId: 'import/no-cycle' }))

        expect(r.errorCount).toBe(1)
        expect(r.warningCount).toBe(0)
      })
    })
  })
})
