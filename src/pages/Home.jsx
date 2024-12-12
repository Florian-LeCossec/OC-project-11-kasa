import '@/styles/pages/Home.scss';
import { useContext } from 'react';
import DataContext from '../contexts/dataContext';
import Card from '../components/Card';

const Home = () => {
  const accommodations = useContext(DataContext);
  return (
    <>
      <h1>Home</h1>
      <ul className="cards">
        {accommodations.map((accommodation) => (
          <li key={accommodation.id}>
            <Card 
              id={accommodation.id} 
              title={accommodation.title} 
              cover={accommodation.cover} 
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
