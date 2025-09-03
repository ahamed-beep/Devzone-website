import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Section from './Components/Section';
import { ProjectDetail } from './Components/ProjectDetail';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Section />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;