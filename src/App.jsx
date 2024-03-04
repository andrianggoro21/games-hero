import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/:role" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
