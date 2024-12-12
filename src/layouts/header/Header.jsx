import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '@/styles/layouts/_Header.scss';

const Header = () => {
  const location = useLocation();

  const getNavLinkClass = (path) => {
    const baseClass = 'header__nav__item__link';
    return `${baseClass} ${location.pathname === path ? `${baseClass}--active` : ''}`;
  };

  return (
    <header className='header'>
      <img className='header__logo' src='/src/assets/kasa-logo.svg' alt="logo" />
      <nav className='header__nav'>
        <ul className='header__nav__list'>
          <li className='header__nav__item'>
            <Link className={getNavLinkClass('/')} to="/">Accueil</Link>
          </li>
          <li className='header__nav__item'>
            <Link className={getNavLinkClass('/about')} to="/about">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
