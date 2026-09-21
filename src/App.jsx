
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import HeritageDetails from "./pages/HeritageDetails/HeritageDetails";
import CultureMap from "./pages/CultureMap/CultureMap";
import Community from "./pages/Community/Community";
import VirtualTour from "./pages/VirtualTour/VirtualTour";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>

      <a
        href="#main-content"
        className="skip-link"
      >
        Skip to main content
      </a>

      <Navbar />

      <div id="main-content">

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/explore"
            element={<Explore />}
          />

          <Route
            path="/heritage/:id"
            element={<HeritageDetails />}
          />

          <Route
            path="/culture-map"
            element={<CultureMap />}
          />

          <Route
            path="/community"
            element={<Community />}
          />

          <Route
            path="/virtual-tour"
            element={<VirtualTour />}
          />

          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>

      </div>

      <Footer />

    </BrowserRouter>
  );
}

export default App;