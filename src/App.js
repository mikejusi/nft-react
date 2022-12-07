import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from "./components/Header";
import Dialog from './components/dialog-window';
import Footer from './components/Footer';

import Home from "./pages/home";
import NoMatch from './pages/404';
import Community from './pages/community';
import Marketplace from './pages/marketplace';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/market" element={<Marketplace />} />
            <Route path="/community" element={<Community />} />
            <Route path="*" element={<NoMatch />} />
        </Routes>
        <Dialog />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
