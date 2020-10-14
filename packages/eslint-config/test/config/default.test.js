import path from 'path'
import { runFixture } from '../utils'

describe('default config', () => {
  describe('no-errors', () => {
    runFixture('default/no-errors').results.forEach(r => {
      const file = path.basename(r.filePath)

      it(`${file} has no errors or warnings`, () => {
        expect(r.messages).toEqual([])
        expect(r.errorCount).toBe(0)
        expect(r.warningCount).toBe(0)
      })
    })
  })

  describe('class-assign-error', () => {
    runFixture('default/class-assign-error').results.forEach(r => {
      const file = path.basename(r.filePath)

      it(`${file} has an error and no warnings`, () => {
        expect(r.messages).toContainEqual(expect.objectContaining({ ruleId: 'no-class-assign' }))
        expect(r.errorCount).toBe(1)
        expect(r.warningCount).toBe(0)
      })
    })
  })

  describe('unused-rest-vars', () => {
    runFixture('default/unused-rest-vars').results.forEach(r => {
      const file = path.basename(r.filePath)

      it(`${file} has no errors or warnings`, () => {
        expect(r.messages).toEqual([])
        expect(r.errorCount).toBe(0)
        expect(r.warningCount).toBe(0)
      })
    })
  })
})
