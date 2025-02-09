export default function Footer(): JSX.Element {
  return (
    <footer className="flex footer">
      <div className="footer-wrapper">
        <h3 className="footer-title">Услуги</h3>
        <div className="flex footer-link">
          <a href="" className="footer-text">
            Осушение
          </a>
          <a href="" className="footer-text">
            Уборка помещений
          </a>
          <a href="" className="footer-text">
            Демонтажные работы
          </a>
          <a href="" className="footer-text">
            ДДДД
          </a>
        </div>
      </div>
      <div className="footer-wrapper">
        <h3 className="footer-title">О нас</h3>
        <div className="flex footer-link">
          <a href="" className="footer-text">
            Контакты
          </a>
          <a href="" className="footer-text">
            О компании
          </a>
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
        <a href="" className="footer-title footer-contacts">
          +7 906 800 68 08
        </a>
        <a href="" className="footer-title footer-contacts">
          maslakov20@mail.ru
        </a>
        <a href="" className="footer-title footer-contacts">
          ул.Мира 19 г.Екатеринбург
        </a>
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
