# 📅 Day 3 – React Card Component with useState and Tailwind CSS

---

## 🛠️ What I Built Today

Today I created a mini React project that displays reusable **Card components** using:

- `useState` hook
- Component props
- Tailwind CSS for styling
- External image assets
- `window.open()` for navigation

Each card represents a different Java collection (HashSet and TreeSet), linking to detailed posts on LinkedIn.

---

## 🔍 Key Concepts Practiced

### 🟦 1. Functional Components and Props

- I created a reusable `Card` component that accepts the following props:
  - `name`: Title of the card
  - `img`: Image asset (imported)
  - `text`: Description
  - `click`: URL to open on button click

➡️ This helped me understand how props allow dynamic content to be rendered for multiple components from the same template.

---

### 🟦 2. Tailwind CSS Integration

- I configured Tailwind CSS in my Vite + React project
- Used utility classes like:
  - `bg-gray-100`, `p-4`, `rounded-lg`, `shadow-md`, `text-xl`, etc.
- This gave me control over layout and design without writing custom CSS

---

### 🟦 3. useState Hook (continued)

- Though not central to this example, I continued using `useState` to stay familiar with state-driven rendering
- Used `count` as a basic `useState` example for future interactivity planning

---

### 🟦 4. Image and Event Handling

- Imported and passed images like `HashSet.png` and `TreeSet.png` as props
- Used `window.open(click, "_blank")` inside `onClick` handler to open LinkedIn posts in a new tab

---

## ✅ What I Learned

| Topic                | Takeaway |
|----------------------|----------|
| Component Props      | Help build dynamic and reusable components |
| Tailwind CSS         | Speeds up styling without external CSS files |
| Event Handling       | Button click triggers external navigation |
| Project Structure    | Organized components and assets cleanly |

---

📌 Tomorrow I plan to:
- Build more interactive components
- Possibly add `useEffect` or explore component-to-component communication
