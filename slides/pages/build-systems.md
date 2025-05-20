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