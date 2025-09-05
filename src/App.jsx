import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Section from './Components/Section';
import { ProjectDetail } from './Components/ProjectDetail';
import SocialMediaToggle from './Components/Sociallinks';
import ThemeToggle from './Components/Darktheme';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Section />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </BrowserRouter>
      <SocialMediaToggle />
      <ThemeToggle/>

    </div>
  );
};

export default App;