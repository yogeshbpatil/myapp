import About from "./pages/About";
import Home from "./pages/Home";
import WhatWeDo from "./pages/WhatWeDo";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/whatwedo" element={<WhatWeDo />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
