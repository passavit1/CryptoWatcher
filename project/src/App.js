import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IndexPage, Page2 } from "./Page/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
