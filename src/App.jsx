import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DataProvider } from '@/contexts/MockProvider';
import '@/styles/index.scss';
// import pages
import Home from '@/pages/Home';
import About from '@/pages/About';
import Header from '@/layouts/header/Header';
import Accommodation from '@/pages/Accommodation';
import Footer from '@/layouts/footer/Footer';
import NotFound from '@/pages/NotFound';

// data
import dataAccommodation from '@/data/dataAccommodation.json';
import dataAbout from '@/data/dataAbout.json';

const App = () => {
  return (
    <Router>
      <div className='app-wrapper'>
        <Header />
        
        {/* Fournir les deux jeux de données au DataProvider */}
        <DataProvider dataFiles={{ dataAccommodation: dataAccommodation, dataAbout: dataAbout }}>
          <main className='app-wrapper__main'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/accommodations/:id" element={<Accommodation />} />
              <Route path="/about" element={<About />} />
              {/* Route pour les pages non trouvées */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </DataProvider>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;