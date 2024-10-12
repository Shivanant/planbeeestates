import Navbar from "./components/Navbar";
import Footer from "./components/partials/Footer";
import { useLocation } from "react-router-dom"; // Keep using useLocation here
import FloatingForm from "./components/FloatingForm";
import SecondPopupForm from "./components/SecondPopupForm";
import Tile from "./components/Tile";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import Privacy from "./components/partials/Privacy";
import TermCondition from "./components/TermsCondition";
import Comercial from "./components/Comercial";
import Recidential from "./components/Recidential";
import SearchProperty from "./components/SearchProperty";

function App() {
  const [showSecondPopup, setShowSecondPopup] = useState(false); // Control visibility of SecondPopupForm
  const location = useLocation();

  const handleCloseSecondPopup = () => {
    setShowSecondPopup(false); // Close the enquiry popup
  };

  useEffect(() => {
    // Automatically show the SecondPopupForm every 15 seconds
    const interval = setInterval(() => {
      setShowSecondPopup(true);
    }, 15000); // 15 seconds interval

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms-condition" element={<TermCondition />} />
        <Route path="/comercial" element={<Comercial />} />
        <Route path="/residential" element={<Recidential />} />
      </Routes>
      <Footer />

      {/* <SecondPopupForm
        isVisible={showSecondPopup}
        closeForm={handleCloseSecondPopup}
      /> */}
      <FloatingForm />
      <Tile />
    </>
  );
}

export default App;
