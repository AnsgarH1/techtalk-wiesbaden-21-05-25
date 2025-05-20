# The Compatibility Problem

- Modern JavaScript features, but older browsers don't support them
- Businesses need to support legacy browsers (IE11 until recently)
- Can't use latest language features directly

<div class="mt-32 text-center text-red-500 text-2xl">
How do we write modern code but still support older browsers?
</div>

---
layout: two-cols-header
---

# Enter: Transpilers

::left::

**Transpilers**: Transform modern JavaScript into backward-compatible versions
- **Babel**: The most popular JavaScript transpiler
  - Write ES2015+ code
  - Babel converts it to ES5 for wider browser support

::right::

```js
// Modern JavaScript (input)
const greet = (name) => `Hello, ${name}!`;
let [first, ...rest] = [1, 2, 3, 4];

// Transpiled to ES5 (output)
"use strict";
var greet = function greet(name) {
  return "Hello, ".concat(name, "!");
};
var _ref = [1, 2, 3, 4],
    first = _ref[0],
    rest = _ref.slice(1);
```

---
layout: default
---

# Module Systems & Bundlers

**Problem**: Browser support for modules was inconsistent

**Module formats evolved**:
  - CommonJS (Node.js): **require()** and **module.exports**
  - AMD (RequireJS): For browsers, async loading
  - UMD: Universal Module Definition (works in both)
  - ES Modules: The official standard (**import**/**export**)

**Bundlers**: Package multiple modules into fewer files
  - **Webpack**: Most popular bundler
  - **Rollup**: Focused on ES modules and tree-shaking
  - **Parcel**: Zero-config bundler 