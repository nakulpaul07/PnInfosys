import React from "react";
import Home from "./Component/Home";
import Header from "./Component/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./Component/Footer";
import About from "./Component/About";
import Service from "./Component/Service";
import Training from "./Component/Training";
import Xiaomi from "./Component/Workshop/Xiaomi ";
import Bentchair from "./Component/Workshop/Bentchair";
import Rjit from "./Component/Workshop/Rjit";
import Mpct from "./Component/Workshop/Mpct";
import StudentBirthday from "./Component/Eventss/StudentBirthday";
import Aniversary from "./Component/Eventss/Aniversary";
import Tour from "./Component/Eventss/Tour";
import PlacementDesk from "./Component/Placement/PlacementDesk";
import PlacementGallery from "./Component/Placement/PlacementGallery";
import Contact from "./Component/Contact";

function App() {
  return (
    <>
      {/* <Home /> */}

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/training" element={<Training />} />
        <Route path="/xiaomi" element={<Xiaomi />} />
        <Route path="/bentchair" element={<Bentchair />} />
        <Route path="/rjit" element={<Rjit />} />
        <Route path="/mpct" element={<Mpct />} />
        <Route path="/studentBirthday" element={<StudentBirthday />} />
        <Route path="/aniversary" element={<Aniversary />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/placementDesk" element={<PlacementDesk />} />
        <Route path="/placementGallery" element={<PlacementGallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
