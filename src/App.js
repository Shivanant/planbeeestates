import Navbar from "./components/Navbar";
import Footer from "./components/partials/Footer";
import { BrowserRouter } from "react-router-dom";
import FloatingForm from "./components/FloatingForm";
import SecondPopupForm from "./components/SecondPopupForm";
import Tile from "./components/Tile";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import Privacy from "./components/partials/Privacy";
import TermCondition from "./components/TermsCondition";
function App() {
  const [showSecondPopup, setShowSecondPopup] = useState(false); // Control visibility of SecondPopupForm

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

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms-condition" element={<TermCondition />} />
      </Routes>
      <Footer />

      <SecondPopupForm
        isVisible={showSecondPopup}
        closeForm={handleCloseSecondPopup}
      />
      <FloatingForm />
      <Tile />
    </BrowserRouter>
  );
}

export default App;
