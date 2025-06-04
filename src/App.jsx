import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resources from "./pages/Resources";
import DriveThrough from "./pages/DriveThrough";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Resources />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/drive" element={<DriveThrough />} />
      </Routes>
    </Router>
  );
}

export default App;
