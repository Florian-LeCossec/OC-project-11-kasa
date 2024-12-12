import '@/styles/components/Card.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = ({id, title, cover}) => {
  return (
    <Link to={`/accommodations/${id}`} className="card">
      <img className="card__image" src={cover} alt={title} />
      <h2 className="card__title">{title}</h2>
    </Link>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default Card;