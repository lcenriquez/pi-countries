import { Routes, Route } from 'react-router-dom';
import Landing from '../components/Landing/Landing';
import Home from '../components/Home/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
