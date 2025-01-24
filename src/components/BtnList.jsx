import useToggle from '@/hooks/toggleHook';
import PropTypes from 'prop-types';
import '@/styles/components/BtnList.scss';
import { useState } from 'react';

const BtnList = ({ name, list, isList}) => {
    const [isOpen, toggleOpen] = useToggle(false);
    const [isVisible, setIsVisible] = useState(null);
    
    return (
        <div className={`btn-list ${isOpen ? 'btn-list--open' : ''}`}>
            <button onClick={() => {
                toggleOpen();
                setIsVisible(!isVisible);
            }}>
                <span className='btn-list__name'>{name}</span>
                <img 
                    className={isOpen ? 'btn-list__icon--open' : 'btn-list__icon--close'} 
                    src="/src/assets/icons/arrow-icon.svg" 
                    alt={isOpen ? 'arrow-up' : 'arrow-down'} 
                />
            </button>
            <div className='btn-list__content'>
                {isList && (
                    <ul className='btn-list__list'>
                        {list.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                )}
                {!isList && (
                    <p className='btn-list__description'>{list}</p>
                )}
            </div>
        </div>
    );
};

BtnList.propTypes = {
    name: PropTypes.string.isRequired,
    list: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]).isRequired,
    isList: PropTypes.bool.isRequired,
};

export default BtnList;