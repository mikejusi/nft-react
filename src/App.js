import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from "./components/Header";
import Home from "./pages/home";
import NoMatch from './pages/404';
import Community from './pages/community';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/community" element={<Community />} />
            <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
