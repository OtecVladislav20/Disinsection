import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Reviews from '../components/reviews/reviews';

export default function About(): JSX.Element {
  return (
    <>
      <Header/>
      <main>
        <section id="open-button" className="open-button">
          <a href="">
            <img src="../public/images/open-button.svg" alt="" />
          </a>
        </section>
        <section className="hero-about conteiner">
          <h1 className="hero-h1-a">ЭкоПрофКлин</h1>
          <p className="hero-a">
            Мы команда профессионалов, специализирующихся на клининге помещений
            после происшествий и уничтожении вредителей. Все сотрудники являются
            опытными специалистами со стажем более 3-х лет.
          </p>
          <p className="hero-a">
            Наши эксперты, при проведении работ, используют современное оборудование
            и экологически чистые средства для обеспечения максимальной безопасности
            и комфорта.
          </p>
          <p className="hero-a">
            Мы уделяем особое внимание каждой детали, стремясь создать идеальные
            условия для вашего дома или рабочего пространства.
          </p>
          <div className="about-bottom" />
        </section>
        <section className="requisites flex conteiner">
          <div>
            <h2 className="services-title title-h2">Реквизиты</h2>
            <ul className="requisites-list">
              <li className="requisites-item">
                Расчетный счет: 40802810620000072838
              </li>
              <li className="requisites-item">
                Расчетный счет: 40802810620000072838
              </li>
              <li className="requisites-item">
                Расчетный счет: 40802810620000072838
              </li>
              <li className="requisites-item">
                Расчетный счет: 40802810620000072838
              </li>
              <li className="requisites-item">
                Расчетный счет: 40802810620000072838
              </li>
              <li className="requisites-item">
                Расчетный счет: 40802810620000072838
              </li>
              <li className="requisites-item">
                Расчетный счет: 40802810620000072838
              </li>
            </ul>
          </div>
          <div>
            <form action="" className="services-form-def form-close-1100">
              <h3 className="services-form-title-def">Оставить заявку</h3>
              <input
                type="text"
                name="name"
                placeholder="Как вас зовут?"
                className="form-input-def"
              />
              <input
                type="email"
                name="email"
                placeholder="Контактный номер"
                className="form-input-def"
              />
              <textarea
                name="message"
                placeholder="Ваше сообщение"
                className="form-textarea-def"
                defaultValue=""
              />
              <div className="flex form-foto-wrapper">
                <img
                  src="../public/images/foto.svg"
                  alt="foto"
                  className="form-foto"
                />
                <a href="" className="form-foto-text">
                  Прикрепить фотографии
                </a>
              </div>
              <button type="submit" className="form-btn">
                Отправить
              </button>
            </form>
          </div>
        </section>
        <section className="advantages conteiner">
          <h2 className="advantages-title title-h2">Почему выбирают нас</h2>
          <div className="flex advantages-blocks">
            <div className="flex advantages-block">
              <img
                src="../public/images/advantages1.svg"
                alt=""
                className="advantages-image"
              />
              <div>
                <h3 className="advantages-block-title">Уверенность</h3>
                <p className="advantages-block-text">
                  Более 10 лет работы <br /> в сфере клининга
                </p>
              </div>
            </div>
            <div className="flex advantages-block">
              <img
                src="../public/images/advantages1.svg"
                alt=""
                className="advantages-image"
              />
              <div>
                <h3 className="advantages-block-title">Уверенность</h3>
                <p className="advantages-block-text">
                  Более 10 лет работы <br /> в сфере клининга
                </p>
              </div>
            </div>
            <div className="flex advantages-block">
              <img
                src="../public/images/advantages1.svg"
                alt=""
                className="advantages-image"
              />
              <div>
                <h3 className="advantages-block-title">Уверенность</h3>
                <p className="advantages-block-text">
                  Более 10 лет работы <br /> в сфере клининга
                </p>
              </div>
            </div>
            <div className="flex advantages-block">
              <img
                src="../public/images/advantages1.svg"
                alt=""
                className="advantages-image"
              />
              <div>
                <h3 className="advantages-block-title">Уверенность</h3>
                <p className="advantages-block-text">
                  Более 10 лет работы <br /> в сфере клининга
                </p>
              </div>
            </div>
            <div className="flex advantages-block">
              <img
                src="../public/images/advantages1.svg"
                alt=""
                className="advantages-image"
              />
              <div>
                <h3 className="advantages-block-title">Уверенность</h3>
                <p className="advantages-block-text">
                  Более 10 лет работы <br /> в сфере клининга
                </p>
              </div>
            </div>
            <div className="flex advantages-block">
              <img
                src="../public/images/advantages1.svg"
                alt=""
                className="advantages-image"
              />
              <div>
                <h3 className="advantages-block-title">Уверенность</h3>
                <p className="advantages-block-text">
                  Более 10 лет работы <br /> в сфере клининга
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="photo-a conteiner">
          <h2 className="services-title title-h2">Наши работы</h2>
          <div className="photo-wrapper-a">
            <div>
              <img
                src="../public/Images/aboutus1.png"
                alt=""
                className="photo-a-img"
              />
            </div>
            <div>
              <img
                src="../public/Images/aboutus1.png"
                alt=""
                className="photo-a-img"
              />
            </div>
            <div>
              <img
                src="../public/Images/aboutus1.png"
                alt=""
                className="photo-a-img"
              />
            </div>
            <div>
              <img
                src="../public/Images/aboutus1.png"
                alt=""
                className="photo-a-img"
              />
            </div>
            <div>
              <img
                src="../public/Images/aboutus1.png"
                alt=""
                className="photo-a-img"
              />
            </div>
            <div>
              <img
                src="../public/Images/aboutus1.png"
                alt=""
                className="photo-a-img"
              />
            </div>
            <div>
              <img
                src="../public/Images/aboutus1.png"
                alt=""
                className="photo-a-img"
              />
            </div>
            <div>
              <img
                src="../public/Images/aboutus1.png"
                alt=""
                className="photo-a-img"
              />
            </div>
            <div>
              <img
                src="../public/Images/aboutus1.png"
                alt=""
                className="photo-a-img"
              />
            </div>
            <div>
              <img
                src="../public/Images/aboutus1.png"
                alt=""
                className="photo-a-img"
              />
            </div>
            <div>
              <img
                src="../public/Images/aboutus1.png"
                alt=""
                className="photo-a-img"
              />
            </div>
            <div>
              <img
                src="../public/Images/aboutus1.png"
                alt=""
                className="photo-a-img"
              />
            </div>
            <div>
              <img
                src="../public/Images/aboutus1.png"
                alt=""
                className="photo-a-img"
              />
            </div>
            <div>
              <img
                src="../public/Images/aboutus1.png"
                alt=""
                className="photo-a-img"
              />
            </div>
            <div>
              <img
                src="../public/Images/aboutus1.png"
                alt=""
                className="photo-a-img"
              />
            </div>
            <div>
              <img
                src="../public/Images/aboutus1.png"
                alt=""
                className="photo-a-img"
              />
            </div>
          </div>
        </section>
        <Reviews/>
      </main>
      <Footer/>
    </>
  );
}
