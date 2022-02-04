import { Routes, Route, Outlet } from 'react-router-dom';
import NewActivityContainer from './Activities/NewActivityContainer';
import ShowActivityContainer from './Activities/ActivityContainer';
import CountriesContainer from './Countries/CountriesContainer';
import Landing from '../components/Landing/Landing';
import Layout from '../components/Layout/Layout';
import CountryContainer from './Countries/CountryContainer';

function App() {
  document.body.classList.add('darkMode');

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/countries" element={<Layout><Outlet /></Layout>}>
        <Route path="" element={<CountriesContainer />} />
        <Route path=":id" element={<CountryContainer />} />
      </Route>
      <Route path="/activities" element={<Layout><Outlet /></Layout>}>
        <Route path="new" element={<NewActivityContainer />} />
        <Route path=":id" element={<ShowActivityContainer />} />
      </Route>
      <Route path="*" element={<p>Not found</p>} />
    </Routes>
  );
}

export default App;
