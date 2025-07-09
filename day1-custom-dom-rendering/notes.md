# 📅 Day 1 – React Journey Begins: Custom Rendering vs JSX

---

## 🚀 Introduction

Today, I officially started my journey into learning React.

To begin, I wanted to understand **how React builds and updates the UI behind the scenes**.  
Before jumping directly into components or hooks, I explored how UI is created:

- First, manually using JavaScript (to simulate React's internal behavior)
- Then, using JSX (React’s preferred way)

---

## 🔎 Custom DOM Rendering (Without React or JSX)

In this part, I manually created an object that represents an HTML element, similar to how React represents a component in its virtual DOM.

This object contains:
- The **type** of the element (like `div`, `a`, `h1`)
- The **attributes/props** of the element (like `id`, `class`, `href`, etc.)
- The **children** of the element (like inner text or nested elements)

After creating this virtual-like element, I built a function that:
- Reads this object
- Dynamically creates real DOM elements using JavaScript
- Applies the given props and content to that element
- Mounts it to a root container on the page

### 🎯 What I Understood:

- This is exactly what React internally does when it uses `React.createElement()`.
- React takes JSX, compiles it to JavaScript objects (virtual DOM), and then renders them to actual DOM.
- Building this manually gave me a clear insight into how React abstracts away DOM manipulation.

---

## 🔎 JSX in React (The React Way)

After understanding the internal logic, I rewrote the same UI using **JSX syntax**.

JSX allows us to **write HTML-like code inside JavaScript**, but it's not real HTML.  
Behind the scenes, JSX is converted by tools like **Babel** into JavaScript code that creates virtual DOM objects.

Then React takes those objects and renders them into the browser using **ReactDOM**.

### 🎯 What I Understood:

- JSX is **syntactic sugar** — it makes the code readable, clean, and declarative.
- JSX saves time and avoids repetitive `document.createElement` calls.
- JSX forces us to write UI in a structured and component-friendly manner.

---

## 📚 Key Learnings

| Topic                     | Explanation |
|---------------------------|-------------|
| Virtual DOM               | React keeps a lightweight copy of the actual DOM in memory for performance and comparison (diffing). |
| Manual DOM creation       | Creating UI by hand using JS helps in understanding what JSX abstracts away. |
| JSX Syntax                | A developer-friendly syntax that looks like HTML but behaves like JS. |
| React Rendering Workflow  | JSX → Babel transpiles it → React.createElement → Virtual DOM → Real DOM via ReactDOM |

---

## 🧠 Takeaways

- **React is not magic** — it's just very well-structured JavaScript under the hood.
- I now understand how JSX connects with JavaScript object creation.
- Manually simulating React's behavior taught me what React does automatically — and why it's useful.
- JSX is cleaner, scalable, and easier to maintain compared to manual DOM manipulation.

---


