import '@/styles/pages/Accommodation.scss';
import { useParams, Navigate } from 'react-router-dom';
import DataContext from '../contexts/dataContext';
import { useContext } from 'react';
import BtnList from '@/components/BtnList';

const Accommodation = () => {
    const { id } = useParams();
    const data = useContext(DataContext);

    const accommodation = data.find((item) => item.id === id);

    if (!accommodation) {
        return <Navigate to="/404"/>;
    }
    return (
        <div>
            <h1>{accommodation.title}</h1>
            <BtnList name="Equipements" list={accommodation.equipments} />
        </div>
    );
};

export default Accommodation;