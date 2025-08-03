import { useContext } from "react";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";
import NestedComponent from "./components/NestedComponent";
import "./App.css";

function AppContent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`app-container ${theme}`}>
      <h1>Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <NestedComponent />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
