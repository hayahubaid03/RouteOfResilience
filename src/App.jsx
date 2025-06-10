import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Resources from "./pages/Resources";
import DriveThrough from "./pages/DriveThrough";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/drive" replace />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/drive" element={<DriveThrough />} />
      </Routes>
    </Router>
  );
}

export default App;
