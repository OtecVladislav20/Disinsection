import { AppRoute } from '../../const';
import { ServicesState } from '../../utils/mocks';


type TFooter = {
  chooseActivePage: (pageId: string) => void;
}

export default function Footer({ chooseActivePage }: TFooter): JSX.Element {
  return (
    <footer className="flex footer" id='contacts'>
      <div className="footer-wrapper">
        <h3 className="footer-title">Услуги</h3>
        <div className="flex footer-link">
          <a onClick={() => chooseActivePage(ServicesState.Dehumidification)} href={`/services/${ServicesState.Dehumidification}`} className="footer-text">
            Осушение
          </a>
          <a onClick={() => chooseActivePage(ServicesState.Cleaning)} href={`/services/${ServicesState.Cleaning}`} className="footer-text">
            Уборка помещений
          </a>
          <a onClick={() => chooseActivePage(ServicesState.Dismantling)} href={`/services/${ServicesState.Dismantling}`} className="footer-text">
            Демонтажные работы
          </a>
          <a onClick={() => chooseActivePage(ServicesState.DDD)} href={`/services/${ServicesState.DDD}`} className="footer-text">
            ДДД
          </a>
        </div>
      </div>
      <div className="footer-wrapper">
        <h3 className="footer-title">О нас</h3>
        <div className="flex footer-link">
          <a href={AppRoute.AboutUs} className="footer-text">
            Контакты
          </a>
          <a href={AppRoute.AboutUs} className="footer-text">
            О компании
          </a>
        </div>
      </div>
      <div className="footer-wrapper">
        <h3 className="footer-title">Режим работы</h3>
        <div className="flex footer-link" itemProp="openingHoursSpecification" itemScope itemType="http://schema.org/OpeningHoursSpecification">
          <p className="footer-text footer-p">Круглосуточно</p>
          <span itemProp="dayOfWeek" itemScope itemType="http://schema.org/DayOfWeek">
            <p itemProp="name" className="footer-text footer-p">7 дней в неделю</p>
          </span>
        </div>
      </div>
      <div className="flex footer-link">
        <a href="tel:+79199093299" className="footer-title footer-contacts">
          <span itemProp="telephone">+7 919 909 32 99</span>
        </a>
        <a href="mailto:eckoprofklin@yandex.ru" className="footer-title footer-contacts">
          <span itemProp="email">eckoprofklin@yandex.ru</span>
        </a>
        <span itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
          <p itemProp="streetAddress" className="footer-title footer-contacts">ул.Лукиных 5, г.Екатеринбург</p>
        </span>
        <div className="images-contacts">
          <a href="https://t.me/artem2530">
            <img
              src="../img/Telegram.svg"
              alt="Telegram"
              className="image-contacts"
            />
          </a>
          <a href="https://wa.me/+79199093299">
            <img
              src="../img/WhatsApp.svg"
              alt="WhatsApp"
              className="image-contacts"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
