import PropTypes from 'prop-types';
import '@/styles/components/Headband.scss';

const Headband = ({title, background}) => {
  return (
    <div className="headband">
      <img src={background} alt="headband" className="headband__background" />
      {title && <h1 className="headband__title">{title}</h1>}
    </div>
  );
};

Headband.propTypes = {
  title: PropTypes.string,
  background: PropTypes.string.isRequired,
};


export default Headband;