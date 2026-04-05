# React, TypeScript & JavaScript Snippets

> Uses **single quotes** and **no semicolons** by default.

Curated VS Code snippets for JavaScript, TypeScript, React, and modern hook-heavy workflows.

- JavaScript utilities and control flow
- TypeScript declarations and utility types
- React components, hooks, lazy loading, and typed patterns

## What Changed

This version standardizes the snippet collection around a few rules:

- consistent descriptions and placeholder order
- aliases where existing prefixes were worth preserving
- React snippets available in `.js` and `.ts` files when they make sense
- cleaner separation between global, TypeScript, and React-focused snippets

## Inventory

Status key:

- `stable`: existing snippet kept as-is or with minor polish
- `updated`: existing prefix kept, expansion or docs improved
- `alias`: existing prefix retained and paired with a clearer alias
- `new`: new snippet added in the current pass

| Area | Prefixes | Status | Notes |
| --- | --- | --- | --- |
| Global utils | `l`, `l=`, `dl=`, `dco=` | stable | Same intent, cleaner placeholders and descriptions |
| Global const | `co`, `co=` | updated | `co` now expands to a valid assignment instead of an invalid const declaration |
| Control flow | `if`, `el`, `ifel`, `elif`, `ter`, `tc`, `tf`, `tcf`, `sw` | updated | Better tab order and default placeholder names |
| Functions | `arrow`, `f`, `fn`, `afb` | stable | Naming and placeholder cleanup |
| Functions | `afn` | new | Async function snippet |
| Objects & arrays | `deso`, `desa` | stable | Documentation aligned with output |
| Iterables | `fe`, `map`, `reduce`, `filter`, `find` | updated | `reduce` now includes a return and explicit initial value |
| Modules | `imp`, `imd`, `imr`, `exd` | stable | Named/default import wording standardized |
| CSS imports | `imcss`, `impcss`, `imcssmd`, `impcssmd` | alias | Short prefixes preserved and README-friendly aliases added |
| Console & timers | `cl`, `ce`, `cw`, `ct`, `st`, `si`, `sim` | stable | Descriptions standardized |
| TypeScript | `tst`, `tsi`, `tsen` | stable | Existing declarations preserved |
| TypeScript | `tsu`, `tsrec` | new | Union and `Record` helpers |
| React imports | `imt`, `impt` | alias | PropTypes import now has a clearer alias |
| React components | `rf`, `rfd`, `ra`, `rad`, `tsrf`, `tsrfd`, `tsra`, `tsrad` | updated | Consistent component shapes and file-name-based component names |
| React components | `rfc`, `rfcd`, `rafc`, `rafcd`, `tsfc`, `tsfcd`, `tsafc`, `tsafcd` | new | Clearer aliases for component-generation snippets |
| React hooks | `us`, `useState`, `usl`, `useStateLazy`, `ured`, `useReducer`, `ue`, `useEffect`, `ucx`, `useContext`, `uc`, `useCallback`, `um`, `useMemo`, `uref`, `useRef`, `uid`, `useId` | updated | Existing hooks standardized and documented |
| React hooks | `ule`, `useLayoutEffect`, `utr`, `useTransition`, `udv`, `useDeferredValue`, `uee`, `useEffectEvent` | new | Modern React coverage added |
| React utilities | `lazy` | updated | Lazy import documented and available in `.js`, `.ts`, `.jsx`, `.tsx` |

## Snippets

### Global

#### `l`

```js
let name
```

#### `l=`

```js
let name = value
```

#### `co` or `co=`

```js
const name = value
```

#### `dl=`

```js
let { name } = value
```

#### `dco=`

```js
const { name } = value
```

### Control

#### `if`

```js
if (condition) {
  // code
}
```

#### `ifel`

```js
if (condition) {
  // code
} else {
  // code
}
```

#### `tc`

```js
try {
  // code
} catch (error) {
  // code
}
```

#### `sw`

```js
switch (value) {
  case caseValue:
    break
  default:
}
```

### Functions

#### `arrow`

```js
const name = (args) => {
  // code
}
```

#### `fn`

```js
function name(args) {
  // code
}
```

#### `afn`

```js
async function name(args) {
  // code
}
```

### Modules

#### `imp`

```js
import { moduleName } from 'module'
```

#### `imd`

```js
import moduleName from 'module'
```

#### `imcss` or `impcss`

```js
import './styles.css'
```

#### `imcssmd` or `impcssmd`

```js
import styles from './styles.module.css'
```

### TypeScript

#### `tst`

```ts
type Name = {
  // fields
}
```

#### `tsi`

```ts
interface Name {
  // fields
}
```

#### `tsen`

```ts
enum Name {
  // values
}
```

#### `tsu`

```ts
type Name = TypeA | TypeB
```

#### `tsrec`

```ts
type Name = Record<string, unknown>
```

### React Components

#### `rf` or `rfc`

```tsx
export function Component() {
  return <div>Component</div>
}
```

#### `rfd` or `rfcd`

```tsx
function Component() {
  return <div>Component</div>
}

export default Component
```

#### `ra` or `rafc`

```tsx
export const Component = () => {
  return <div>Component</div>
}
```

#### `tsra` or `tsafc`

```tsx
interface Props {
  title: string
}

export const Component = ({ title }: Props) => {
  return <div>{title}</div>
}
```

### React Hooks

#### `us` or `useState`

```ts
const [state, setState] = useState(initialState)
```

#### `ue` or `useEffect`

```ts
useEffect(() => {
  // code
}, [])
```

#### `ule` or `useLayoutEffect`

```ts
useLayoutEffect(() => {
  // code
}, [])
```

#### `utr` or `useTransition`

```ts
const [isPending, startTransition] = useTransition()
```

#### `udv` or `useDeferredValue`

```ts
const deferredValue = useDeferredValue(value)
```

#### `uee` or `useEffectEvent`

```ts
const handleEvent = useEffectEvent((event) => {
  // code
})
```

### React Utility

#### `lazy`

```ts
const Component = lazy(() => import('./Component'))
```

## Landing Page Workspace

The repo now includes a `page/` workspace for a polished extension landing page.

Stack:

- Astro
- Tailwind CSS
- Preact islands for small interactive pieces

Suggested commands:

```bash
cd page
npm install
npm run dev
```

## Install

Search **React, Typescript & Javascript Snippets** in the VS Code Marketplace or open:

`https://marketplace.visualstudio.com/items?itemName=wts-dev.wts-react-js-snippets`

## Credits

Inspired by:

- [@nathanchapman](https://github.com/nathanchapman/vscode-javascript-snippets)
- [@ymulenll](https://github.com/ymulenll/react17plus-snippets)
