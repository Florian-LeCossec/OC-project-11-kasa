import '@/styles/layouts/_Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <img className='footer__container__logo' src="/src/assets/kasa-logo.svg" alt="logo" />
        <p className='footer__container__copyright'>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
