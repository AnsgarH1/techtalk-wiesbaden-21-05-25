
---
src: ./pages/introduction.md
---

---
src: ./pages/early-days.md
---

---
src: ./pages/ecmascript.md
---



---
src: ./pages/renaissance.md
---

---
src: ./pages/transpilers.md
---

---
src: ./pages/typescript.md
---

---
src: ./pages/build-systems.md
---

---
src: ./pages/demos.md#4-6
---

---
src: ./pages/rendering.md
---

---
src: ./pages/react.md
---

---
src: ./pages/demos.md#7-9
---

# From Script Tags to Edge Functions

How we unnecessarily complicated the web


---
layout: cover
---

# The Early Days of JavaScript

---
layout: two-cols-header
---

# JavaScript's Dual Origins

::left::

- **1995**: Netscape creates JavaScript (Brendan Eich)
  - Created in just 10 days
  - Originally named "Mocha", then "LiveScript"

::right::

- **1996**: Microsoft releases JScript for Internet Explorer
  - A reverse-engineered version of JavaScript
  - Similar but with intentional differences


---
layout: two-cols-header
---

# The Browser Wars

::left::

## Netscape Navigator
- First commercial browser
- JavaScript as a competitive feature
- Dominant in early web

::right::

## Internet Explorer
- Microsoft's answer
- Bundled with Windows
- JScript implementation
- Eventually won with IE6

---
layout: center
---


*Different APIs, different behaviors, different bugs...*

*Same code would work differently (or not at all) across browsers!*


---
layout: default
---

# Birth of ECMAScript

- **1997**: JavaScript standardized as ECMAScript (ECMA-262)
  - European Computer Manufacturers Association
  - Netscape submitted JavaScript for standardization
  - Goal: Create a vendor-neutral, cross-platform language standard

- **Early versions**:
  - ES1 (1997) - Initial standardization
  - ES2 (1998) - Editorial changes
  - ES3 (1999) - Regular expressions, try/catch, etc.
  - ES4 - Abandoned after disagreements
  - ES5 (2009) - JSON, strict mode, many improvements

---
layout: two-cols-header
---

# The Dark Ages (2000-2009)

::left::
- Internet Explorer dominance (IE6)
- Stagnation in browser innovation
- **JavaScript libraries emerge to handle cross-browser issues**:
  - jQuery (2006)
  - Prototype.js
  - MooTools
  - Dojo Toolkit

::right::

```js
// jQuery example - hiding cross-browser complexity
$("#myButton").click(function() {
  $(".elements").fadeIn(500).addClass("active");
});

```

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
layout: center
---

# The Transpiler & Bundler Era

---
layout: default
---

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

---
layout: two-cols-header
---

# TypeScript: Type Safety for JavaScript

::left::

- **Released by Microsoft in 2012**
- **Key benefits**:
  - Static type checking
  - Better IDE support
  - Self-documenting code
  - Catches errors at compile time

::right::

```ts
// TypeScript example
interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

function sendEmail(user: User, message: string): Promise<boolean> {
  // Type-safe implementation
  return fetch(`/api/email/${user.id}`, {
    method: 'POST',
    body: JSON.stringify({ message })
  }).then(res => res.json());
}
```
---
layout: two-cols-header
---

# JavaScript Runtimes


Each runtime provides different APIs and capabilities!

::left::

## Browser

- The original JS environment
  - V8 (Chrome/Edge)
  - SpiderMonkey (Firefox)
  - JavaScriptCore (Safari)

::right::

## Server-side

- JavaScript beyond the browser
  - Node.js (2009) - Server-side JavaScript
  - Deno (2018) - Secure by default
  - Bun (2023) - Performance focused




---
layout: default
---

# Package Managers: Dependency Hell

- **npm** (2010): Node Package Manager
  - Revolutionized code sharing
  - *node_modules* became infamous

- **Yarn** (2016): Faster, more reliable
  - Introduced lockfiles
  - Parallel installations

- **pnpm** (2017): Disk space efficient
  - Symlinks to a central store
  - Strict dependency resolution

<div class="mt-8 text-center text-red-500">
The average project now has hundreds of dependencies!
</div>

---
layout: center
---

# Build Systems: Taming the Complexity

---
layout: default
---

# The Configuration Nightmare


- Complex configuration files 
- Countless plugins 
-  Tedious setup 
-  Slow builds


<div class="text-center text-red-500 text-lg mt-32">
Development became about configuring tools rather than writing code!
</div>

---
layout: two-cols-header
---

# Modern Build Systems

::left::

- **Create React App** (🪦)
  - Zero-config React setup
- **Vue CLI** (🪦)
  - Similar approach for Vue applications
- **Parcel** (2017)
  - Zero-config bundler for any project
- **Vite** (2020)
  - Lightning-fast dev server using ES modules
- **Turbopack** (2022)
  - Announced as "successor to Webpack"

::right::

```bash
# How simple it became to start a project
npx create-react-app my-app
# or
npm create vite@latest
```

---
layout: two-cols-header
---

# Vite: Revolution in DX

::left::

- Developed by Evan You (Vue creator)
- **Key innovations**:
  - Uses native ES modules in development
  - Only bundles for production
  - Incredibly fast hot module replacement
  - Framework-agnostic

::right::

```js
// vite.config.js - Simple configuration
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```



---
layout: default
---

# Linting & Formatting

<div class="grid grid-cols-3 gap-4">
<div>

### ESLint
- Catch bugs and enforce conventions
- Pluggable architecture
- Hundreds of rules available

</div>
<div>

### Prettier
- Opinionated code formatting
- End debates about code style
- Consistent formatting across teams

</div>
<div>

### Husky & lint-staged
- Enforce at commit time
- Pre-commit hooks
- Only check changed files

</div>
</div>

<div class="mt-8 text-center">
More tools to learn, configure, and maintain...
</div>

---
layout: section
---

# Rendering Strategies Evolution

---
layout: two-cols
---

# Traditional Rendering Approaches

::left::

## Server-Side Rendering (SSR)
- PHP, Ruby on Rails, Django era
- HTML generated on server
- Full page reloads
- Good initial load, poor interactivity

::right::

## Client-Side Rendering (CSR)
- SPA revolution (React, Angular, Vue)
- JS downloads, then renders UI
- Fast after initial load
- Poor initial load, SEO challenges

---
layout: two-cols-header
---

# The SPA Era (2010s)

::left::

## Benefits
- Client-side rendering with frameworks
- Smooth UI transitions
- App-like experience
- Rich interactivity

::right::

## Problems
- Slow initial load (JavaScript bundle size)
- Poor SEO without special handling
- High memory usage
- "White screen of death" during loading


---
layout: two-cols-header
---

::left::

# React: Component Revolution

- **Released by Facebook in 2013**
- **Key innovations**:
  - Component-based architecture
  - Virtual DOM for performance
  - Declarative UI programming
  - Unidirectional data flow

::right::

```jsx
// React component example
function UserProfile({ user }) {
  return (
    <div className="profile">
      <img src={user.avatar} alt={user.name} />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <button onClick={() => followUser(user.id)}>
        Follow
      </button>
    </div>
  );
}
```

---
layout: two-cols
---

# The Return of SSR

## Frameworks
- Next.js (React)
- Nuxt.js (Vue)
- SvelteKit (Svelte)

## Benefits
- Better initial load performance
- Improved SEO
- Better experience for users

::right::

## Challenges
- More complex infrastructure
- Node.js required on the server
- "Hydration" complexity

## Hydration Process
1. Server renders HTML
2. Browser loads JS
3. JS "hydrates" static HTML
4. App becomes interactive
