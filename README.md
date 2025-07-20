# 🏂🏻 - React and Javascript Snippets

> Uses **single quotes** and **no semicolons** by default

Boost your productivity with a clean and modern set of **snippets** for:

- ![JavaScript Badge](https://img.shields.io/badge/JavaScript-fff?logo=javascript&logoColor=#fef08a&style=flat)
- ![TypeScript Badge](https://img.shields.io/badge/TypeScript-fff?logo=typescript&logoColor=#3b82f6&style=flat)
- ![React Badge](https://img.shields.io/badge/React-fff?logo=react&logoColor=#0ea5e9&style=flat)


## Snippets Index

- [Components](#components)
- [Hooks](#hooks)
- [Functions](#functions)
- [Object](#object)
- [Types](#types)
- [Utilities](#utilities)
- ...

---

### Utilities

#### `l` - Let Statement

```javascript
let name
```

#### `l=` - Let Assignment

```javascript
let name = value
```

#### `dl=` - Destructuring Let Assignment

```javascript
let { name } = value
```

#### `co` - Const Statement

```javascript
const name
```

#### `co=` - Const Assignment

```javascript
const name = value
```

#### `dco=` - Destructuring Const Assignment

```javascript
const { name } = value
```

### Control

#### `if` - If Statement

```javascript
if (condition) {
  // your code
}
```

#### `el` - Else Statement

```javascript
else {
 // your code
}
```

#### `ifel` - If/Else Statement

```javascript
if (condition) {
  // your code
} else {
  // your code
}
```

#### `elif` - Else If Statement

```javascript
else if (condition) {
 //your code
}
```

#### `ter` - Ternary Operator

```javascript
condition ? expression : expression
```

#### `tc` - Try/Catch

```javascript
try {
  //your code
} catch (err) {
  //your code
}
```

#### `tf` - Try/Finally

```javascript
try {
  //your code
} finally {
  //your code
}
```

#### `tcf` - Try/Catch/Finally

```javascript
try {
  //your code
} catch (err) {
  //your code
} finally {
  //your code
}
```

#### `sw` - Switch Case

```javascript
switch (expr) {
  case value:
    //your code
    break
  default:
  //your code
}
```

### Functions

#### `arrow` - Arrow Function

```javascript
const name = (args) => {
  //your code
}
```

#### `f` - Anonymous Function

```javascript
function (arguments) {
  //your code
}
```

#### `fn` - Named Function

```javascript
function name(arguments) {
  //your code
}
```

#### `afb` - Arrow Function with Body

```javascript
;(arguments) => {
  //your code
}
```

### Objects

#### `deso` - Destructure Object

```javascript
const { value } = object
```

#### `desa` - Destructure Array

```javascript
const [value] = array
```

### Iterables

#### `fe` - forEach Loop

```javascript
array.forEach((item) => {
  //your code
})
```

#### `map` - Map

```javascript
array.map((item) => {
  //your code
})
```

#### `reduce` - Reduce

```javascript
array.reduce((previous, current) => {
  //your code
}, initial)
```

#### `filter` - Filter

```javascript
array.filter((item) => {
  //your code
})
```

#### `find` - Find

```javascript
array.find((item) => {
  //your code
})
```

### Returning values

#### `r` - Return

```javascript
return value
```

### Modules

#### `exd` - Export Default

```javascript
export default value
```

#### `imp` - Import Module

```javascript
import { moduleName } from "module"
```

#### `imd` - Import Module As

```javascript
import moduleName from "module"
```

#### `imr` - Import React

```javascript
import React from "react"
```

#### `impcss` - Import CSS

```javascript
import "./styles.css"
```

#### `impcssmd` - Import CSS Module

```javascript
import styles from "./styles.module.css"
```

### Console

#### `cl` - Console.log

```javascript
console.log(value)
```

#### `ce` - Console.error

```javascript
console.error(value)
```

#### `cw` - Console.warn

```javascript
console.warn(value)
```

#### `ct` - Console.table

```javascript
console.table(value)
```

### Timers

#### `st` - setTimeout

```javascript
setTimeout(() => {
  //your code
}, delay)
```

#### `si` - setInterval

```javascript
setInterval(() => {
  //your code
}, delay)
```

#### `sim` - setImmediate

```javascript
setImmediate(() => {
  //your code
})
```

### Types

#### `imt` - Import PropTypes

```javascript
import PropTypes from "prop-types"
```

### `tst`- Type declaration

```typescript
type Name = {
  // your code
}
```

### `tsi`- Interface declaration

```typescript
interface Name {
  // your code
}
```

### `tsen`- Enum declaration

```typescript
enum Name {
  // your code
}
```

### Components

#### `rf` - React Functional Component Export

```javascript
export function Component () {
  return <>{/* your code */}</>
}
```

#### `rfd` - React Functional Component Default Export

```javascript
function Component () {
  return <>{/* your code */}</>
}

export default Component
```

#### `ra` - React Arrow Functional Component Export

```javascript
export const Component = () => {
  return <>{/* your code */}</>
}
```

#### `rad` - React Arrow Functional Component Default Export

```javascript
const Component = () => {
  return <>{/* your code */}</>
}

export default Component
```

#### `tsra` - Typescript React Arrow Functional Component Export

```typescript
interface Props {}

const Component = ({}: Props) => {
  return <>{/* your code */}</>
}

export default Component
```

#### `tsrad` - Typescript React Arrow Functional Component Default Export

```typescript
interface Props {}

const Component = ({}: Props) => {
  return <>{/* your code */}</>
}

export default Component
```

#### `lazy` - Lazy Import Snippet

```javascript
const Component = lazy(() => import("./Component"))
```

### Hooks

#### `us` or `useState` Snippet

```javascript
const [state, setState] = useState(initialState)
```

#### `usl` or `useStateLazy` Snippet

```javascript
const [state, setState] = useState(() => fn)
```

#### `ured` or `useReducer` Snippet

```javascript
const [state, dispatch] = useReducer(reducer, initialState)
```

#### `ue` or `useEffect` Snippet

```javascript
useEffect(() => {
  // your code
}, [])
```

#### `ucx` or `useContext` Snippet

```javascript
const context = useContext(Context)
```

#### `uc` or `useCallback` Snippet

```javascript
const memoizedCallback = useCallback(callbackFn, [])
```

#### `um` or `useMemo` Snippet

```javascript
const memoizedValue = useMemo(() => value, [])
```

#### `uref` or `useRef` Snippet

```javascript
const ref = useRef(initialValue)
```

#### `uid` or `useId` Snippet

```javascript
const id = useId()
```

## 🙌 Credits

Inspired by:

- 💛 [@nathanchapman](https://github.com/nathanchapman/vscode-javascript-snippets)
- 💙 [@ymulenll](https://github.com/ymulenll/react17plus-snippets)

---

## 📌 Install

Search **“React, TypeScript & Next.js Snippets”** in the VS Code marketplace or [click here](https://marketplace.visualstudio.com/).

---
