## 👋 Introduction

### What is React?

React is a **JavaScript library** for building **user interfaces** (UIs). It helps you:

- Break complex UIs into **reusable components**
- Handle **state** and **user interaction** more cleanly
- Build **dynamic websites** with minimal effort

## Why Use React Instead of Vanilla JS/HTML/CSS?

### 1. 🔄 **Reusable Components**

- **React**: You build UI using *components* — like LEGO bricks.
- **Vanilla**: You repeat HTML and JS for each feature.
- With React, you write a component *once* and reuse it anywhere.

### 2. 🧠 **State Management Made Easy**

- **React**: Has built-in tools like `useState()` to track and update data (e.g. clicks, inputs).
- **Vanilla**: You manually track and update DOM elements — can get messy fast.

### 3. ⚡ **Dynamic UI Without Manual DOM Manipulation**

- **React** updates the UI **automatically** when data changes.
- **Vanilla JS** requires manually selecting and changing DOM elements with things like `document.getElementById()` or `innerHTML`.

### 4. 🧩 **Component Hierarchy (Tree Structure)**

- React apps are structured as a tree of components → easy to **organise**, **debug**, and **scale**.
- Vanilla JS apps can become tangled and hard to maintain as they grow.

### 5. 🛠️ **Tooling + Ecosystem**

- React has a HUGE ecosystem:
    - Libraries like **React Router** for routing
    - Tons of plugins, UI kits, and dev tools
- Vanilla JS doesn’t offer this out of the box

### What is Tailwind CSS?

Tailwind is a **utility-first CSS framework**. Instead of writing custom CSS, you compose classes like `bg-blue-500`, `p-4`, or `text-center` to style your components.

---

## What is HTML?

**HTML** stands for **HyperText Markup Language**.

It is the **standard language used to structure content** on the web.

### 🧠 Think of it like:

HTML is the **skeleton** of a webpage.

It tells the browser:

- What content to show (text, images, videos)
- How to organise it (headings, paragraphs, lists, buttons)

---

## 🔤 Basic HTML Example

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
    <p>This is a paragraph.</p>
    <button>Click me</button>
  </body>
</html>
```

<aside>
💡

HTML is Not a Programming Language

It doesn’t have logic like `if`, `for`, or `while`.

It's a **markup language** — it *describes* content, not behavior.

You’ll need **CSS** to style things, and **JavaScript (or React)** to make it interactive.

</aside>

---

## 🧱 1. The Basics of React

### 📦 A React App Structure

When you create a React app using `create-react-app` or `Next.js`, you'll typically have:

- `index.js` – entry point
- `App.js` – root component
- `components/` – folder to store your reusable components

### 🧩 Components

Components are **reusable building blocks**.

```jsx
function Welcome() {
  return <h1>Hello, world!</h1>;
}
```

You can use this component inside another:

```jsx
function App() {
  return (
    <div>
      <Welcome />
    </div>
  );
}
```

---

## 📦 2. Props (Short for "Properties")

Props are how you **pass data to components**.

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <Welcome name="Alice" />;
}
```

## 🧠 3. State and `useState`

### 🧃 What is State?

State is data that **changes over time** (like a counter, input text, etc.)

### 🪝 `useState` – React Hook for State

```jsx
import { useState } from 'react';

function Counter() {
  // initial value = 0
  const [count, setCount] = useState(0); 

  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>
        Click me!
      </button>
    </div>
  );
}
```

- `useState(0)` returns a pair:
    - `count` – current value
    - `setCount` – function to update it
- Changing state triggers a **re-render** (which is why it’s useful)

## 🎨 4. Styling with Tailwind CSS

### ✅ Why Tailwind?

- No need to write custom CSS
- You use utility classes to **compose styles inline**

### 🎯 Example

```jsx
function Button() {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Click Me
    </button>
  );
}
```

### 📌 Common Tailwind Classes

- Layout: `flex`, `grid`, `justify-center`, `items-center`
    - For flexbox (very important) play this game:
        
        https://flexboxfroggy.com/
        
        - But, since we are using tailwind the classes will be a bit different, but once you understand the fundamentals it will just be mapping it to a different name.
- Spacing: `p-4`, `m-2`, `gap-4`
- Colors: `bg-red-500`, `text-white`, `hover:bg-blue-700`
- Sizing: `w-full`, `h-screen`
- Borders: `rounded`, `border`, `border-gray-300`

---

## 🧱 5. Building a Real Component Example

```jsx
import { useState } from 'react';

function GreetingCard({ name }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="p-4 border rounded shadow-md max-w-sm mx-auto mt-6">
      <h2 className="text-xl font-semibold">Hello, {name}!</h2>
      <p>{liked ? 'You liked this!' : 'Click to like!'}</p>
      <button
        onClick={() => setLiked(!liked)}
        className={`mt-2 px-4 py-2 rounded ${
          liked ? 'bg-green-500' : 'bg-gray-300'
        }`}
      >
        {liked ? 'Unlike' : 'Like'}
      </button>
    </div>
  );
}

function App() {
  return <GreetingCard name="Alice" />;
}

```
