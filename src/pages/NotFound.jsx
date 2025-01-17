import { Link } from 'react-router-dom';
import '@/styles/pages/NotFound.scss';

const NotFound = () => {
    return (
        <div className='not-found'>
            <h1 className='not-found__title'>404</h1>
            <h2 className='not-found__subtitle'>Oups! La page que vous cherchez n&apos;existe pas.</h2>
            <Link className='not-found__link' to='/'>Retourner à la page d&apos;accueil</Link>
        </div>
    );
};

export default NotFound;