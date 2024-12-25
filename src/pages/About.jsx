import BtnList from '@/components/BtnList';
import { useContext } from 'react';
import DataContext from '@/contexts/dataContext';

const About = () => {
  const { dataAbout } = useContext(DataContext);
  const about = Array.isArray(dataAbout) ? dataAbout : [];
  return (
  <>
    {about.map((item) => (
      <BtnList 
        key={item.aboutTitle}
        name={item.aboutTitle} 
        list={item.aboutText} 
        isList={false}
      />
    ))}
  </>
  );
};

export default About;
