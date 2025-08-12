import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "./HomePage";
import ViewPage from "./ViewPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/view" element={<ViewPage />} />
      </Routes>
    </Router>
  );
}
