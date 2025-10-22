import IntroPage from "./Pages/IntroPage";
import FormStart from "./Pages/FormStart";
import MapPage from "./Pages/MapPage";
import { Route, Routes } from "react-router";
function App() {
  return (
    <>
      {/* <div className="px-[5%]">
        <Page2 />
      </div> */}
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/intro-page" element={<IntroPage />} />
        <Route path="/form" element={<FormStart />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </>
  );
}

export default App;
