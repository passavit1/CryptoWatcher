import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IndexPage, Page2, TestFunction } from "./Page/index";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="CryptoWatcher" element={<IndexPage />} />
        <Route path="Page2" element={<Page2 />} />
        <Route path="test" element={<TestFunction />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
