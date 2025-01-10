import BtnList from '@/components/BtnList';
import { useContext } from 'react';
import DataContext from '@/contexts/dataContext';
import Headband from '@/components/Headband';
import '@/styles/pages/About.scss';

const About = () => {
  const { dataAbout } = useContext(DataContext);
  const about = Array.isArray(dataAbout) ? dataAbout : [];
  console.log(about);
  return (
  <div className='about'>
    <Headband background={'/src/assets/landscape-2.svg'} />
    <div className='about__btns-list'>
    {about.map((item) => (
      <BtnList
        key={item.aboutTitle}
        name={item.aboutTitle} 
        list={item.aboutText} 
        isList={false}
      />
    ))}
    </div>
  </div>
  );
};

export default About;
