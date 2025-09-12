import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Section from './Components/Section';
import { ProjectDetail } from './Components/ProjectDetail';
import SocialMediaToggle from './Components/Sociallinks';
import About from './Components/Aboutus';
import Contact from './Components/Contactus';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Section />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />


          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </BrowserRouter>
      <SocialMediaToggle />
  

    </div>
  );
};

export default App;