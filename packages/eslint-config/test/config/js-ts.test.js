import path from 'path'
import { runFixture } from '../utils'

describe('js-ts', () => {
  describe('circular deps', () => {
    runFixture('js-ts/cycle').results.forEach(r => {
      const file = path.basename(r.filePath)

      it(`${file} has an error`, () => {
        expect(r.messages).toContainEqual(expect.objectContaining({ ruleId: 'import/no-cycle' }))
        expect(r.errorCount).toBe(1)
        expect(r.warningCount).toBe(0)
      })
    })
  })
})
