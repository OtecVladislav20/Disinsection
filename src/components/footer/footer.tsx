import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

export default function Footer(): JSX.Element {
  return (
    <footer className="flex footer" id='contacts'>
      <div className="footer-wrapper">
        <h3 className="footer-title">Услуги</h3>
        <div className="flex footer-link">
          <Link to={AppRoute.ServicesO} className="footer-text">
            Осушение
          </Link>
          <Link to={AppRoute.ServicesC} className="footer-text">
            Уборка помещений
          </Link>
          <Link to={AppRoute.ServicesD} className="footer-text">
            Демонтажные работы
          </Link>
          <Link to={AppRoute.ServicesDDDD} className="footer-text">
            ДДДД
          </Link>
        </div>
      </div>
      <div className="footer-wrapper">
        <h3 className="footer-title">О нас</h3>
        <div className="flex footer-link">
          <Link to={AppRoute.AboutUs} className="footer-text">
            Контакты
          </Link>
          <Link to={AppRoute.AboutUs} className="footer-text">
            О компании
          </Link>
        </div>
      </div>
      <div className="footer-wrapper">
        <h3 className="footer-title">Режим работы</h3>
        <div className="flex footer-link">
          <p className="footer-text footer-p">С 9:00 до 22:00</p>
          <p className="footer-text footer-p">7 дней в неделю</p>
        </div>
      </div>
      <div className="flex footer-link">
        <a href="tel:+79199093299" className="footer-title footer-contacts">
          +7 919 909 32 99
        </a>
        <a href="mailto:eckoprofklin@yandex.ru" className="footer-title footer-contacts">
          eckoprofklin@yandex.ru
        </a>
        <p className="footer-title footer-contacts">
          ул.Лукиных 5, г.Екатеринбург
        </p>
        <div className="images-contacts">
          <a href="https://t.me/artem2530">
            <img
              src="../markup/img/Telegram.svg"
              alt="Telegram"
              className="image-contacts"
            />
          </a>
          <a href="https://wa.me/+79199093299">
            <img
              src="../markup/img/WhatsApp.svg"
              alt="WhatsApp"
              className="image-contacts"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
