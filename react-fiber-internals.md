
# 🔬 Deep Dive: React Fiber Internals – Reconciliation, Diffing & Scheduling

> 🧠 "React Fiber is not just a new algorithm – it's a complete architectural rethink."  
> — Written by a curious Java Full Stack Developer (Ashutosh Shelke)

---

## 🏗 What is React Fiber?

**React Fiber** is the **core engine** behind React’s rendering system, introduced in **React 16**. It was built to solve performance issues caused by blocking rendering and provide:

- 🔁 Interruptible rendering (time-slicing)
- 🧵 Prioritization of tasks
- 🔄 Pause and resume capability
- 🎯 Fine-grained control over rendering lifecycle

Fiber breaks down rendering work into **small units**, processes them **asynchronously**, and commits DOM changes efficiently.

---

## 🔄 What is Reconciliation?

Reconciliation is the process of:
- Comparing the current Virtual DOM tree with the previous one
- Finding the **minimum number of changes**
- Updating only the **necessary** parts of the real DOM

This helps React remain **fast and efficient**, even in large applications.

---

## ⚙️ Diffing Algorithm – Under the Hood

React’s diffing algorithm is based on **two key assumptions**:

1. **Elements of different types** will produce different trees
2. Developers provide **stable keys** for dynamic lists

### Example:
```jsx
<ul>
  <li key="1">Apple</li>
  <li key="2">Banana</li>
</ul>
```
If the new list is:

```jsx
<ul>
  <li key="1">Mango</li>
  <li key="2">Banana</li>
</ul>
```
Only text of item 1 is updated, not the entire list.

---

## 🧵 Why React Fiber Was Needed (The Problem)

Earlier React versions (v15 and below) used stack-based recursive rendering.

❌ Problems:
- Long render trees = long blocking tasks
- No prioritization
- Poor user experience (slow typing, laggy UI)

✅ **Fiber: The Custom Scheduler + Renderer**
Fiber introduced a linked list-based tree instead of recursive stack.

Each node in this tree is a Fiber node, which contains:
- Component info
- Props, state
- References to parent, child, sibling
- Side-effect flags (like Placement, Update, Delete)
- An alternate pointer to the previous version of the node (used for diffing)

---

## 🧩 What is a Fiber Node?

A Fiber Node is a JS object representing one unit of work.

Example:
```js
{
  type: 'div',
  key: null,
  child: {...},
  sibling: null,
  return: parentFiber,
  stateNode: DOMNode,
  pendingProps: {},
  memoizedProps: {},
  effectTag: 'UPDATE'
}
```

This structure allows scheduling, tracking, and resuming rendering without losing context.

---

## ⏱ Work Units and Time Slicing

React Fiber divides rendering into small chunks:

```js
performUnitOfWork(fiberNode)
```

If browser signals that time is up (`shouldYield()` returns true), Fiber pauses rendering and:
- Saves the current node context
- Waits for the browser to become idle
- Resumes from where it left off

---

## 📋 Fiber Flow – Render & Commit Phases

🌀 **1. Render Phase** (can pause)
- Creates the new Fiber tree
- Does not touch the real DOM
- Pure calculation (virtual)

🔥 **2. Commit Phase** (cannot pause)
- Applies changes to the DOM
- Runs side effects (e.g., `useEffect()`)

Pseudo-code:
```js
function workLoopConcurrent() {
  while (!shouldYield() && work !== null) {
    work = performUnitOfWork(work);
  }

  if (work !== null) {
    scheduleCallback(workLoopConcurrent); // Resume later
  } else {
    commitRoot(); // Apply real DOM updates
  }
}
```

---

## 🧠 Does Fiber Check If Node Work is Complete?

✅ Yes. Each `performUnitOfWork(fiber)` checks:
- If the component was fully processed
- If child/sibling need rendering
- If effect should be marked
- If incomplete, it will pause & resume later, just like thread context switching in OS

---

## 📦 Fiber vs Java Thread Context Switching

| Concept           | Java Thread           | React Fiber Node              |
|------------------|-----------------------|-------------------------------|
| Unit of execution| Thread                | Fiber node                    |
| Scheduler        | OS / ExecutorService  | React Scheduler (scheduler)   |
| Priority         | `Thread.setPriority()`| Immediate / Normal / Idle     |
| Preemption       | Time slice-based      | `shouldYield()` via browser   |
| Context switching| Stack, PC, registers  | Fiber node + tree pointers    |
| Resume state     | Thread resume         | `workInProgress` pointer      |

---

## 🔂 Fiber Tree: Alternate & Mutation

Each Fiber has:
- `current` → currently committed fiber
- `workInProgress` → current render's alternate fiber

This helps:
- Track what changed
- Avoid re-rendering unchanged parts
- Reuse DOM nodes efficiently

---

## 🧪 Priority Scheduling in Fiber

React assigns priority to tasks using scheduler:

| Priority     | Use Case                     |
|--------------|------------------------------|
| Immediate    | Clicks, urgent actions       |
| UserBlocking | Inputs, typing               |
| Normal       | Regular rendering            |
| Low          | Background UI updates        |
| Idle         | Analytics, logs              |

This mimics `Thread.setPriority()` in Java.

---

## 💡 Java Analogy Recap

Think of React Fiber as an OS-level task scheduler and execution engine for the browser thread:

- Breaks work → small units (Fiber nodes)
- Runs based on priority
- Pauses/resumes like threads
- Avoids blocking the main thread
- Allows animations, user input to stay smooth

---

## ✅ Final Summary

| Component     | Type               | Description                        |
|---------------|--------------------|------------------------------------|
| Rendering     | Process            | Overall React render system        |
| Reconciliation| Algorithm          | Compares old & new virtual DOM     |
| Diffing       | Sub-Algorithm      | Calculates minimal updates         |
| Fiber         | Engine/Architecture| Manages rendering efficiently      |
| Fiber Node    | Data Structure     | Represents unit of work            |
| Scheduler     | Module             | Prioritizes & schedules Fiber nodes|

---

🙏 Thanks for Reading!  
📌 I post daily learnings here: GitHub  


Let’s learn, build, and grow together 🚀  
— Ashutosh Shelke
