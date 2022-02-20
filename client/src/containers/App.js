import { Routes, Route, Outlet } from 'react-router-dom';
import NewActivityContainer from './Activities/NewActivityContainer';
import ShowActivityContainer from './Activities/ActivityContainer';
import CountriesContainer from './Countries/CountriesContainer';
import Landing from '../components/Landing/Landing';
import Layout from '../components/Layout/Layout';
import CountryContainer from './Countries/CountryContainer';
import ActivitiesContainer from './Activities/ActivitiesContainer';
import NotFound from '../components/Errors/NotFound';

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
        <Route path="" element={<ActivitiesContainer />} />
        <Route path="new" element={<NewActivityContainer />} />
        <Route path=":id" element={<ShowActivityContainer />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
