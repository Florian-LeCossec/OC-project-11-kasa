import PropTypes from 'prop-types';
import '@/styles/components/rating.scss';
const Rating = ({ rating }) => {
    return (
        <div className="rating">
            {Array.from({ length: 5 }, (_, index) => (
                <img 
                    key={index}
                    src={index < rating ? '/src/assets/icons/star-full.svg' : '/src/assets/icons/star-empty.svg'}
                    alt="rating"
                />
            ))}
        </div>
    );
};

Rating.propTypes = {
    rating: PropTypes.number.isRequired,
};

export default Rating;