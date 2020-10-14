import path from 'path'
import { runFixture } from '../utils'

describe('react', () => {
  describe('sort comp', () => {
    runFixture('react/sort-comp-no-errors').results.forEach(r => {
      const file = path.basename(r.filePath)

      it(`${file} has no errors or warnings`, () => {
        expect(r.messages).toEqual([])
        expect(r.errorCount).toBe(0)
        expect(r.warningCount).toBe(0)
      })
    })
  })
})
