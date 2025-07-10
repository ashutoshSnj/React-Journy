# 📅 Day 2 – Learning useState Hook in React

---

## 🚀 What I Did

Today, I started learning **React Hooks** — starting with the most basic and essential one: `useState`.

I built a simple counter application where I used `useState` to:
- Hold the counter value
- Increment and decrement the counter
- Add conditions to avoid crossing limits

---

## 🔎 What is `useState`?

- `useState` is a **React Hook** that allows us to **store and update values inside functional components**.
- Unlike regular variables, the values managed by `useState` are **reactive** — meaning when we update them, the UI automatically re-renders with the new value.

---

## 🧠 Key Concepts Learned

### 🟡 1. Why Regular Variables Don’t Work

- In React, if we declare a normal variable like `let num = 10`, and then update it, the UI **won’t re-render**.
- This is because React does **not track normal variables** for changes.

➡️ That’s why we use `useState`, which tells React:  
🗣️ “Track this value — and whenever it changes, update the UI.”

---

### 🟡 2. How `useState` Works

- `useState(initialValue)` returns a pair:
  1. The **current value**
  2. A **function to update** the value

- When we call the setter function (e.g., `setCounter()`), React:
  - Updates the state internally
  - Re-renders the component

---

### 🟡 3. Re-rendering with `setState`

- Updating state using the setter function (`setCounter`) will cause the **whole component to re-run**, and UI will be updated.
- But this doesn't mean the whole DOM re-renders — React compares the **virtual DOM** and only updates what's changed. This is efficient and fast.

---

### 🟡 4. Conditional Logic in Handlers

I also added logic to:
- Prevent the counter from going below 0
- Prevent it from going above 20
- Log messages when limits are reached

➡️ This taught me how to combine React state with JavaScript control flow (`if`, `else`, etc.) to manage dynamic UI behavior.

---

## 💡 Takeaways

- `useState` is the **foundation of interactive UI in React**.
- State is not like regular variables — it must be updated using setter functions.
- Hooks bring power to **functional components**, which earlier was only possible in class components.
- This was my first real React project using **event handling + condition + reactivity**.

---

📌 Next, I will explore:
- Working with **multiple useState hooks**
- Handling **form inputs and controlled components**
- Possibly starting with `useEffect` for side effects
