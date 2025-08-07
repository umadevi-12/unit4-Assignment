# 🔢 Building a Simple Counter with useReducer in React

## 📘 Overview

This project demonstrates how to use the `useReducer` hook in React by building a simple counter application. The app manages state transitions (increment and decrement) using a reducer function, instead of the traditional `useState` approach. This assignment helps establish a foundation for using `useReducer` in more complex scenarios.

---

## 🧠 Problem Statement

Create a counter application using React and the `useReducer` hook.

### The application should:

- Initialize state using `useReducer` with a property `count` set to `0`
- Have a reducer function that supports two actions:
  - `INCREMENT`: increases count by 1
  - `DECREMENT`: decreases count by 1
- Use `dispatch()` to update the state when buttons are clicked
- Display the current value of `count` in the UI

---

## 🛠️ Technologies Used

- React
- JavaScript (ES6+)
- Vite (for fast development and hot reloading)

---

## 🧩 Solution Breakdown

1. **Reducer Function**  
   Handles `INCREMENT` and `DECREMENT` actions.

2. **State Initialization**  
   Uses `useReducer` with `{ count: 0 }` as the initial state.

3. **Dispatch Actions**  
   Buttons trigger `dispatch()` to update the count.

4. **UI Display**  
   Renders current count and updates it in real-time on interaction.
