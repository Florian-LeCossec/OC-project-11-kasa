import '@/styles/pages/Home.scss';
import { useContext } from 'react';
import DataContext from '../contexts/dataContext';
import Card from '../components/Card';
import Headband from '../components/Headband';

const Home = () => {
  const accommodations = useContext(DataContext);
  return (
    <>
      <div className="home">
      <Headband title="Chez vous, partout et ailleurs" background={'/src/assets/landscape-1.svg'} />
        <div className="cards-grid">
          {accommodations.map((accommodation) => (
            <Card 
              key={accommodation.id}
              id={accommodation.id} 
              title={accommodation.title} 
              cover={accommodation.cover} 
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
