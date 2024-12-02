import React from 'react';
import Nav from "./components/Nav/Nav";
import Navbar from "./components/Navbar/Navbar"
import Banner from './components/banner/Banner';
import SectioHome from './components/SectionHome/SectioHome';

function App() {
  return (
    <>
        <Nav />
        <Navbar />
        <Banner />
        <SectioHome />

        {/* <Routes>
            <Route path="/Tops" element={<Tops />} />
            {/* Outras rotas, como abaixo, podem ser descomentadas */}
            {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> */}
        {/* </Routes> */}
    </>
  );
}

export default App;
