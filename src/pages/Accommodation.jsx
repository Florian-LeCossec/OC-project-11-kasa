import '@/styles/pages/Accommodation.scss';
import { useParams, useNavigate } from 'react-router-dom';
import DataContext from '../contexts/dataContext';
import { useContext, useEffect, useState } from 'react';
import BtnList from '@/components/BtnList';
import Slideshow from '@/components/Slideshow';
import Rating from '@/components/Rating';


const Accommodation = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { dataAccommodation } = useContext(DataContext);
    const [accommodation, setAccommodation] = useState(null);

    useEffect(() => {
        const accommodations = Array.isArray(dataAccommodation) ? dataAccommodation : [];
        
        if (accommodations.length > 0) {
            const foundAccommodation = accommodations.find((item) => item.id === id);
            if (foundAccommodation) {
                setAccommodation(foundAccommodation);
            } else {
                navigate('/404');
            }
        }
    }, [dataAccommodation, id, navigate]);

    return (
        <div className='accommodation'>
            {accommodation && (
                <>
                    <Slideshow images={accommodation.pictures} />
                    <div className='accommodation__first-section'>
                        <div className='accommodation__first-section__title'>
                            <h2>{accommodation.title}</h2>
                            <span>{accommodation.location}</span>
                        </div>
                        <div className='accommodation__first-section__host'>
                            <div className='accommodation__first-section__host__name'>
                                <span className='accommodation__first-section__host__name__firstname'>{accommodation.host.name.split(' ')[0]}</span>
                                <span className='accommodation__first-section__host__name__lastname'>{accommodation.host.name.split(' ')[1]}</span>
                            </div>
                            <img className='accommodation__first-section__host__picture' src={accommodation.host.picture} alt="host" />
                        </div>
                    </div>
                    <div className='accommodation__second-section'>
                        <div className='accommodation__second-section__tags'>
                            {accommodation.tags.map((tag, index) => (
                                <span key={index} className='accommodation__second-section__tags__tag'>{tag}</span>
                            ))}
                        </div>
                        <div className='accommodation__second-section__rating'>
                            <Rating rating={Number(accommodation.rating)} />
                        </div>
                    </div>
                    <div className='accommodation__third-section'>
                        <BtnList name="Description" list={accommodation.description} isList={false} />
                        <BtnList name="Equipements" list={accommodation.equipments} isList={true} />
                    </div>
                </>
            )}
        </div>
    );
};

export default Accommodation;