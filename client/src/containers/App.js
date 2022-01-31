import { Routes, Route, Outlet } from 'react-router-dom';
import Landing from '../components/Landing/Landing';
import Layout from '../components/Layout/Layout';
import Home from './Home/Home';
import Country from '../components/Country/Country';

function App() {
  document.body.classList.add('darkMode');

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/countries" element={<Layout><Outlet /></Layout>}>
        <Route path="" element={<Home />} />
        <Route path=":id" element={<Country />} />
      </Route>
      <Route path="*" element={<p>Not found</p>} />
    </Routes>
  );
}

export default App;
