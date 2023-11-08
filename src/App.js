import { Route, Routes } from "react-router-dom";
import Home from "./assets/Home";
import About from "./assets/About";
import Header from "./assets/Header";
import Footer from "./assets/Footer";
import "./assets/style.css";
import Contact from "./assets/Contact";
function App() {
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
