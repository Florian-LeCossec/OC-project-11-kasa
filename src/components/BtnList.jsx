import useToggle from '@/hooks/toggleHook';
import PropTypes from 'prop-types';
import '@/styles/components/BtnList.scss';

const BtnList = ({ name, list}) => {
    const [isOpen, toggleOpen] = useToggle(false);

    return (
        <div className='btn-list'>
            <button onClick={toggleOpen}>
                <span className='btn-list__name'>{name}</span>
                <img 
                    className={isOpen ? 'btn-list__icon--open' : 'btn-list__icon--close'} 
                    src="/src/assets/icons/arrow-icon.svg" 
                    alt={isOpen ? 'arrow-up' : 'arrow-down'} 
                />
            </button>
            {isOpen && (
                <ul className='btn-list__list'>
                    {list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

BtnList.propTypes = {
    name: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BtnList;