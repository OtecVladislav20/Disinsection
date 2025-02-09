import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

export default function Footer(): JSX.Element {
  return (
    <footer className="flex footer" id='contacts'>
      <div className="footer-wrapper">
        <h3 className="footer-title">Услуги</h3>
        <div className="flex footer-link">
          <Link to={AppRoute.Services} className="footer-text">
            Осушение
          </Link>
          <Link to={AppRoute.Services} className="footer-text">
            Уборка помещений
          </Link>
          <Link to={AppRoute.Services} className="footer-text">
            Демонтажные работы
          </Link>
          <Link to={AppRoute.Services} className="footer-text">
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
        <a href="tel:+79068006808" className="footer-title footer-contacts">
          +7 906 800 68 08
        </a>
        <a href="mailto:maslakov20@mail.ru" className="footer-title footer-contacts">
          maslakov20@mail.ru
        </a>
        <p className="footer-title footer-contacts">
          ул.Мира 19 г.Екатеринбург
        </p>
        <div className="images-contacts">
          <a href="">
            <img
              src="../markup/img/Telegram.svg"
              alt="Telegram"
              className="image-contacts"
            />
          </a>
          <a href="">
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
