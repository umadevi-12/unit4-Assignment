# Understanding useReducer in React – Theme Toggle Assignment

## 🧠 Problem Statement

Create a React application that toggles between light and dark themes using the `useReducer` hook. Instead of using `useState`, manage theme state transitions with `useReducer` to demonstrate more complex and centralized state logic.

### 🎯 Requirements:

- Use `useReducer` to manage state (`theme` = "light" or "dark")
- Define actions like `TOGGLE_THEME`
- Use `dispatch()` to update state on button click
- Reflect the current theme in the UI (e.g., background color, text color)
- Position the toggle button at the top of the page
- Style the UI based on the active theme

---

## 🛠️ Solution Approach

1. **Initialized state and reducer:**
   - Created `initialState = { theme: 'light' }`
   - Defined `themeReducer()` function to handle `TOGGLE_THEME`

2. **Used `useReducer` in App.jsx:**
   - Called `useReducer(themeReducer, initialState)`
   - Used `dispatch({ type: 'TOGGLE_THEME' })` to switch themes

3. **UI Implementation:**
   - Toggle button fixed at the top of the page
   - Background and text colors change based on theme
   - Small button with responsive styling

## 📷 Screenshots

> (Add screenshots if available: `light mode`, `dark mode`)

