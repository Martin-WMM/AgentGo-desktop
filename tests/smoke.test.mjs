import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

test('renderer entry and theme assets exist', async () => {
  const app = await readFile('src/renderer/src/App.vue', 'utf8')
  assert.match(app, /logoLight/)
  assert.match(app, /logoDark/)
  assert.match(app, /addCollection\(lucideIcons\)/)
})

test('the login UI uses the local Iconify collection', async () => {
  const app = await readFile('src/renderer/src/App.vue', 'utf8')
  assert.match(app, /@iconify\/vue/)
  assert.doesNotMatch(app, /<svg\b/)
})
