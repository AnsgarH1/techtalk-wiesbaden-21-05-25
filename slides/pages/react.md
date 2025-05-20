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