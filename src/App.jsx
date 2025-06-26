import { BrowserRouter, Routes, Route } from "react-router-dom";
import Certificates from './components/Certificates'; // Import Certificates component
import Degree from './components/Degree'; // Import Degree component
import { About, Contact, Experience, Feedbacks, Hero, Videos, Navbar, Tech, Works } from "./components";

const App = () => {
  return (
    <BrowserRouter basename="/3D_Portfolio">
      <Routes>
        <Route path="/" element={
          <div className='relative z-0 bg-primary'>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
              <Navbar />
              <Hero />
            </div>
            <About />
            <Tech />
            <Works />
            <Videos />
            <Feedbacks />
            <div className='relative z-0'>
              <Contact />
            </div>
          </div>
        } />
        <Route path="/certificates" element={<Certificates />} /> {/* Route for Certificates */}
        <Route path="/degree" element={<Degree />} /> {/* Route for Degree */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
