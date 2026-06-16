import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Press from "./pages/Press";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/press" element={<Press />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;