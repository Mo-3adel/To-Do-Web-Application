# To-Do React

A small Vite + React to-do app with TailwindCSS styling. This README explains how to run the project, the main files, and — at your request — how to add `if` conditions / conditional rendering inside React components. It also includes a corrected example for `src/components/taskCard.jsx` and best-practice suggestions.

## Quick start

Prerequisites: Node.js (LTS recommended). This project uses Vite.

Install dependencies:

```bash
npm install
```

Run in development mode:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Lint the code:

```bash
npm run lint
```

The `package.json` scripts used above are:

- `dev`: start Vite dev server
- `build`: build for production
- `preview`: preview the production build
- `lint`: run ESLint

## Project structure (important files)

- `index.html` - Vite entry HTML
- `src/main.jsx` - React entry, router mounting
- `src/App.jsx` - main app component
- `src/tasks.js` - example task data
- `src/components/taskCard.jsx` - card component for individual tasks
- `src/components/newTask.jsx` - form to create tasks
- `src/pages/home.jsx` - home page listing tasks
- `src/pages/task.jsx` - task detail page

## Conditional rendering in React (how to add if statements)

There are multiple idiomatic ways to conditionally render content inside React components. Below are concise patterns and examples you can use directly in `taskCard.jsx` or any component.

1) Early return (useful when you want to skip rendering entirely)

```jsx
function MyComponent({ item }) {
  if (!item) return null; // early return
  return <div>{item.title}</div>;
}
```

2) JavaScript `if` before the `return` (compute variables / classes)

```jsx
function TaskCard({ task }) {
  let statusClass = '';
  if (task.status === 'Completed') {
    statusClass = 'bg-green-400';
  } else if (task.status === 'In Progress') {
    statusClass = 'bg-blue-400';
  } else {
    statusClass = 'bg-gray-400';
  }

  return <div className={statusClass}>{task.title}</div>;
}
```

3) Inline ternary operator in JSX (small conditions)

```jsx
<p>{task.completed ? 'Done' : 'Not done'}</p>
```

4) Logical `&&` for rendering when a condition is truthy

```jsx
{task.priority === 'High' && <span className="text-red-500">High priority</span>}
```

5) switch / mapping for many cases (good for classes or labels)

```jsx
# To-Do React

A simple, small To-Do application built with React and Vite, styled with Tailwind CSS. The app demonstrates a component-based UI for creating, listing, and managing tasks.

## Features

- Create and view tasks
- Task detail view
- Change task status and priority
- TailwindCSS utility-first styling
- Client-side routing with React Router

## Tech stack

- React (via Vite)
- Vite (dev server + build)
- Tailwind CSS
- React Router

## Getting started

1. Install dependencies:

```bash
npm install
```

2. Run development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build locally:

```bash
npm run preview
```

## Important files

- `index.html` — app entry HTML
- `src/main.jsx` — React entry point and router mount
- `src/App.jsx` — top-level app layout
- `src/tasks.js` — sample task data
- `src/components/` — UI components (task card, new task form, etc.)
- `src/pages/` — page components (home, task detail)

## Development notes

- Scripts are defined in `package.json` (`dev`, `build`, `preview`, `lint`).
- Tailwind is configured in the project; edit styles in the CSS files under `src/`.
- Use the browser dev server (vite) for fast refresh while developing.

## Contributing

Feel free to open issues or submit pull requests. Small improvements that help clarity, accessibility, or styling are welcome.

## License

This project has no explicit license in the repository. Add a `LICENSE` file if you want to make the license explicit.

---

If you'd like the README expanded with developer notes or examples (for instance, how the components communicate), tell me which area to expand and I'll update it.
  ```
