import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import '@/styles/components/Slideshow.scss';

const Slideshow = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const handlePrevClick = () => {
        setCurrentImage((currentImage - 1 + images.length) % images.length);
    };

    const handleNextClick = () => {
        setCurrentImage((currentImage + 1) % images.length);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentImage((currentImage + 1) % images.length);
        }, 5000);

        return () => clearTimeout(timer);
    }, [currentImage, images.length]);

    return (
        <div className='slideshow'>
            <img src={images[currentImage]} alt="slideshow" className='slideshow__image' />
            {images.length > 1 && (
                <>
                    <button className='slideshow__prev-btn' onClick={handlePrevClick}>
                        <img src="/src/assets/icons/arrow-icon.svg" alt="arrow" />
                    </button>
                    <p className='slideshow__count'>{currentImage + 1} / {images.length}</p>
                    <button className='slideshow__next-btn' onClick={handleNextClick}>
                        <img src="/src/assets/icons/arrow-icon.svg" alt="arrow" />
                    </button>
                </>
            )}
        </div>
    );
};

Slideshow.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Slideshow;