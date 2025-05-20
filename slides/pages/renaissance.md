---
layout: two-cols-header
---

# Renaissance: Modern JavaScript

::left::

**ES6/ES2015**: The biggest update to the language
  - Arrow functions, classes, modules, promises, etc.
  - Annual release cycle begins (ES2016, ES2017, etc.)

**New browsers and engines**:
  - Chrome with V8 (2008)
  - Firefox with SpiderMonkey
  - Browser competition drives JS engine performance

::right::

```js
// ES6 features
const add = (a, b) => a + b;

class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    return `Hello, I'm ${this.name}`;
  }
}

// Modules
import { Component } from './component';
```
---
src: ../pages/demos.md#1-2
---
---
layout: center
---

# The Transpiler & Bundler Era 