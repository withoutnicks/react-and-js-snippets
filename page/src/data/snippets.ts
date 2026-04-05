import { readFileSync } from 'node:fs'
import { join } from 'node:path'

export type SnippetFocus = 'ts' | 'react' | 'global'

export type SnippetItem = {
  action: string
  description: string
  focus: SnippetFocus
  id: string
  prefix: string
  prefixes: string[]
  result: string
}

type RawSnippet = {
  body: string[]
  description: string
  prefix: string | string[]
}

type SourceConfig = {
  file: string
  focus: SnippetFocus
}

const SNIPPET_SOURCES: SourceConfig[] = [
  { file: 'global.code-snippets', focus: 'global' },
  { file: 'react.code-snippets', focus: 'react' },
  { file: 'ts.code-snippets', focus: 'ts' }
]

function parseSnippetFile(file: string) {
  const sourcePath = join(process.cwd(), '..', 'snippets', file)
  const raw = readFileSync(sourcePath, 'utf8').replace(/\/\*[\s\S]*?\*\//g, '')
  return JSON.parse(raw) as Record<string, RawSnippet>
}

function normalizePlaceholders(value: string) {
  return value
    .replace(/\$\{\d+:([^}]+)\}/g, '$1')
    .replace(/\$\{\d+\}/g, '')
    .replace(/\$0/g, '')
    .replace(/\t/g, '  ')
}

function buildResult(body: string[]) {
  const normalized = body.map((line) => normalizePlaceholders(line).replace(/\s+$/g, ''))
  const compact = normalized.join('\n').trim()

  return compact || '...'
}

function buildSnippetItems() {
  return SNIPPET_SOURCES.flatMap(({ file, focus }) => {
    const snippets = parseSnippetFile(file)

    return Object.entries(snippets).map(([action, snippet]) => {
      const prefixes = Array.isArray(snippet.prefix) ? snippet.prefix : [snippet.prefix]

      return {
        action,
        description: snippet.description,
        focus,
        id: `${focus}-${prefixes[0]}`,
        prefix: prefixes[0],
        prefixes,
        result: buildResult(snippet.body)
      } satisfies SnippetItem
    })
  })
}

export const snippetItems = buildSnippetItems()
