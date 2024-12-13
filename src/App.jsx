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

const App = () => {
  return (
    <Router>
      <div className='app-wrapper'>
        <DataProvider>
          <Header />
          <main className='app-wrapper__main'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/accommodations/:id" element={<Accommodation />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </DataProvider>
      </div>
    </Router>
  );
};

export default App;