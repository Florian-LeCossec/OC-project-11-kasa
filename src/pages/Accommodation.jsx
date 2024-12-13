import '@/styles/pages/Accommodation.scss';
import { useParams } from 'react-router-dom';
import DataContext from '../contexts/dataContext';
import { useContext, useEffect, useState } from 'react';
import BtnList from '@/components/BtnList';
import Slideshow from '@/components/Slideshow';



const Accommodation = () => {
    const { id } = useParams();
    const data = useContext(DataContext);
    const [accommodation, setAccommodation] = useState(null);

    useEffect(() => {
        if (data.length > 0) {
            const foundAccommodation = data.find((item) => item.id === id);
            setAccommodation(foundAccommodation);
        }
    }, [data, id]);

    return (
        <div className='accommodation'>
            {accommodation && (
                <>
                    <h2>{accommodation.title}</h2>
                    <Slideshow images={accommodation.pictures} />
                    <BtnList name="Equipements" list={accommodation.equipments} />
                </>
            )}
        </div>
    );
};

export default Accommodation;