import IntroPage from "./Pages/IntroPage";
import FormStart from "./Pages/FormStart";
import MapPage from "./Pages/MapPage";
import { Route, Routes, useLocation } from "react-router";
import IntroPage2 from "./Pages/IntroPage2";
import FormPage2 from "./Pages/FormPage2";
import ThankYouPage from "./Pages/ThankYouPage";
import Services from "./Pages/Services";

function App() {
  const location = useLocation();
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<IntroPage />} />
        <Route path="/intro-page" element={<IntroPage />} />
        <Route path="/form" element={<FormStart />} />
        <Route path="/map" element={<MapPage />} />
        {/* 2nd screen  */}
        <Route path="/intro-page2" element={<IntroPage2 />} />
        <Route path="/form2" element={<FormPage2 />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}

export default App;
