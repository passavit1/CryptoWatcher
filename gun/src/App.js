import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Page1, Page2 } from '@atomic';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// tester
