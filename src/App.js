import { Routes, Route } from "react-router-dom";
import Author from "./Pages/Author";
import Home from "./Pages/Home";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/author/:id" element={<Author />} />
    </Routes>
  );
}

export default App;
