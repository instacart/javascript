import { CLIEngine } from 'eslint'
import path from 'path'

export function runFixture(fixture) {
  const fixturePath = path.resolve(__dirname, 'fixtures', fixture)
  const cliEngine = new CLIEngine({
    cwd: fixturePath,
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  })

  return cliEngine.executeOnFiles(['.'])
}
