import { createContext, useContext, useState } from "react";
import Navbar from "./components/Navbar/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/้Home/home";
import About from "./pages/About/about";
import Login from "./pages/auth/Login/login";
import Register from "./pages/auth/Register/register";
import Footer from "./components/Footer/footer";

const NavbarVisibilityContext = createContext({
  isVisible: true,
  setIsVisible: (visible: boolean) => {visible},
});

export const useNavbarVisibility = () => useContext(NavbarVisibilityContext);

function AppContent() {
  const { isVisible } = useNavbarVisibility();

  return (
    <div className="min-h-screen bg-gray-50">
      {(isVisible ) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer/>
    </div>
  );
}

function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <NavbarVisibilityContext.Provider value={{ isVisible, setIsVisible }}>
      <AppContent />
    </NavbarVisibilityContext.Provider>
  );
}

export default App;