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