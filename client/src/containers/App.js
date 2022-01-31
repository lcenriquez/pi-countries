import { Routes, Route } from 'react-router-dom';
import Landing from '../components/Landing/Landing';
import Home from '../components/Home/Home';
import Country from '../components/Country/Country';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/countries" element={<Home />} />
      <Route path="/countries/:id" element={<Country />} />
      <Route path="*" element={<p>Not found</p>} />
    </Routes>
  );
}

export default App;
