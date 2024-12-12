import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DataProvider } from '@/contexts/MockProvider';
// import pages
import Home from '@/pages/Home';
import About from '@/pages/About';
import Header from '@/layouts/header/Header';
import Accommodation from '@/pages/Accommodation';
import Footer from '@/layouts/footer/Footer';

const App = () => {
  return (
    <Router>
      <DataProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accommodations/:id" element={<Accommodation />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </DataProvider>
    </Router>
  );
};

export default App;