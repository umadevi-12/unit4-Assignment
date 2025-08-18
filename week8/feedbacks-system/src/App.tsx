import { Routes, Route } from "react-router-dom";
import FeedbackForm from "./pages/FeedbackForm";
import FeedbackSummary from "./pages/FeedbackSummary";
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<FeedbackForm />} />
      <Route path="/summary" element={<FeedbackSummary />} />
    </Routes>
  );
}

export default App;
