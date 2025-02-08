export default function MainPage(): JSX.Element {
  return (
    <>
      <header className="navigation flex">
        <a href="#" className="logo-header">
          <img src="../markup/img/Logo.svg" alt="Logo" className="Logo" />
        </a>
        <nav className="nav-bar">
          <div className="nav-links flex">
            <a href="" className="nav-list">
              О нас
            </a>
            <a href="" className="nav-list">
              Услуги
            </a>
            <a href="" className="nav-list">
              Цены
            </a>
            <a href="" className="nav-list">
              Контакты
            </a>
          </div>
          <div className="flex nav-contact">
            <button className="nav-button">Обрытный звонок</button>
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
            <div>
              <div className="flex nav-phone">
                <img src="../markup/img/phone.svg" alt="" />
                <a href="" className="nav-phone-text">
                  +7 906 800 68 08
                </a>
              </div>
              <div className="flex nav-phone">
                <img src="../markup/img/mail.svg" alt="" />
                <a href="" className="nav-phone-text">
                  maslakov20@mail.ru
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="burger">
          <span />
        </div>
      </header>
      <main>
        <section className="open-form">
          <form action="" className="services-form-def open-form-element">
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
              defaultValue="Тест"
            />
            <div className="flex form-foto-wrapper">
              <img
                src="../markup/img/foto.svg"
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
          <div className="close-form" />
        </section>
        <section className="hero container">
          <div className="flex hero-location">
            <img
              src="../markup/img/location.svg"
              alt=""
              className="hero-location-image"
            />
            <p className="hero-pf">Работаем по городам России</p>
          </div>
          <h1 className="hero-h1">ЭкоПрофКлин</h1>
          <h2 className="hero-h2">
            Ваш партнер по чистоте <br /> и безопасности!
          </h2>
          <p className="hero-p">
            Оставьте заявку, и менеджер ответит на все вопросы, проконсультирует по
            набору услуг и рассчитает стоимость
          </p>
          <button className="hero-btn">Заказать клининг</button>
        </section>
        <section className="description">
          <div className="description-wrapper">
            <div className="description-block">
              <p className="description-p">
                <b>ЭкоПрофКлин</b> - мы команда профессионалов, специализирующихся
                на клининге помещений после происшествий и уничтожении вредителей.
                Все сотрудники являются опытными специалистами со стажем более 3-х
                лет.
              </p>
              <p className="description-p">
                Наши эксперты, при проведении работ, используют современное
                оборудование и экологически чистые средства для обеспечения
                максимальной безопасности и комфорта.
              </p>
              <p className="description-p">
                Мы уделяем особое внимание каждой детали, стремясь создать идеальные
                условия для вашего дома или рабочего пространства.
              </p>
            </div>
          </div>
        </section>
        <section className="services conteiner">
          <h2 className="services-title title-h2">Наши услуги</h2>
          <div className="services-cards">
            <div className="services-card card1 flex">
              <img
                src="../markup/img/photoServices1.png"
                alt="photo"
                className="services-image"
              />
              <div className="services-card-wrapper flex">
                <div className="services-card-text flex">
                  <h3 className="services-card-title">Осушение</h3>
                  <ul className="services-card-ul">
                    <li className="services-card-li">Откачка воды</li>
                    <li className="services-card-li">Откачка воды</li>
                    <li className="services-card-li">Откачка воды</li>
                    <li className="services-card-li">Откачка воды</li>
                    <li className="services-card-li">Откачка воды</li>
                    <li className="services-card-li">Откачка воды</li>
                  </ul>
                </div>
                <div className="flex services-price">
                  <p className="price">от 1000 р</p>
                  <img src="../markup/img/row.svg" alt="row" className="row" />
                </div>
              </div>
            </div>
            <div className="services-card card2 flex">
              <img
                src="../markup/img/photoServices1.png"
                alt="photo"
                className="services-image"
              />
              <div className="services-card-wrapper flex">
                <div className="services-card-text flex">
                  <h3 className="services-card-title">Осушение</h3>
                  <ul className="services-card-ul">
                    <li className="services-card-li">Откачка воды</li>
                    <li className="services-card-li">Откачка воды</li>
                    <li className="services-card-li">Откачка воды</li>
                    <li className="services-card-li">Откачка воды</li>
                    <li className="services-card-li">Откачка воды</li>
                    <li className="services-card-li">Откачка воды</li>
                  </ul>
                </div>
                <div className="flex services-price">
                  <p className="price">от 1000 р</p>
                  <img src="../markup/img/row.svg" alt="row" className="row" />
                </div>
              </div>
            </div>
            <div className="services-card card3 flex">
              <img
                src="../markup/img/photoServices1.png"
                alt="photo"
                className="services-image"
              />
              <div className="services-card-wrapper flex">
                <div className="services-card-text flex">
                  <h3 className="services-card-title">Осушение</h3>
                  <ul className="services-card-ul">
                    <li className="services-card-li">Откачка воды</li>
                    <li className="services-card-li">Откачка воды</li>
                    <li className="services-card-li">Откачка воды</li>
                    <li className="services-card-li">Откачка воды</li>
                    <li className="services-card-li">Откачка воды</li>
                    <li className="services-card-li">Откачка воды</li>
                  </ul>
                </div>
                <div className="flex services-price">
                  <p className="price">от 1000 р</p>
                  <img src="../markup/img/row.svg" alt="row" className="row" />
                </div>
              </div>
            </div>
            <div className="services-card card4 flex">
              <img
                src="../markup/img/photoServices1.png"
                alt="photo"
                className="services-image"
              />
              <div className="services-card-wrapper flex">
                <div className="services-card-text flex">
                  <h3 className="services-card-title">Осушение</h3>
                  <ul className="services-card-ul">
                    <li className="services-card-li">Откачка воды</li>
                    <li className="services-card-li">Откачка воды</li>
                    <li className="services-card-li">Откачка воды</li>
                    <li className="services-card-li">Откачка воды</li>
                    <li className="services-card-li">Откачка воды</li>
                    <li className="services-card-li">Откачка воды</li>
                  </ul>
                </div>
                <div className="flex services-price">
                  <p className="price">от 1000 р</p>
                  <img src="../markup/img/row.svg" alt="row" className="row" />
                </div>
              </div>
            </div>
            <div className="form1">
              <form action="" className="services-form">
                <h3 className="services-form-title input-title1">
                  Оставить заявку
                </h3>
                <input
                  type="text"
                  name="name"
                  placeholder="Как вас зовут?"
                  className="form-input input1"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Контактный номер"
                  className="form-input input2"
                />
                <textarea
                  name="message"
                  placeholder="Ваше сообщение"
                  className="form-textarea input3"
                  defaultValue=""
                />
                <div className="flex form-foto-wrapper input4">
                  <img
                    src="../markup/img/foto.svg"
                    alt="foto"
                    className="form-foto"
                  />
                  <a href="" className="form-foto-text">
                    Прикрепить фотографии
                  </a>
                </div>
                <button type="submit" className="form-btn input-btn">
                  Отправить
                </button>
              </form>
            </div>
          </div>
        </section>
        <section className="advantages conteiner">
          <h2 className="advantages-title title-h2">Почему выбирают нас</h2>
          <div className="flex advantages-blocks">
            <div className="flex advantages-block">
              <img
                src="../markup/img/advantages1.svg"
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
                src="../markup/img/advantages1.svg"
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
                src="../markup/img/advantages1.svg"
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
                src="../markup/img/advantages1.svg"
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
                src="../markup/img/advantages1.svg"
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
                src="../markup/img/advantages1.svg"
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
        <section className="work flex conteiner">
          <div className="work-info flex">
            <h2 className="work-title title-h2">Как мы работаем</h2>
            <div className="work-wrapper">
              <div className="flex work-item">
                <img src="../markup/img/1.svg" alt="" className="work-img" />
                <p className="work-text">Оформление заявки</p>
              </div>
              <div className="flex work-item">
                <img src="../markup/img/2.svg" alt="" className="work-img" />
                <p className="work-text">Оценка помещения</p>
              </div>
              <div className="flex work-item">
                <img src="../markup/img/3.svg" alt="" className="work-img" />
                <p className="work-text">Проведение работы</p>
              </div>
              <div className="flex work-item">
                <img src="../markup/img/4.svg" alt="" className="work-img" />
                <p className="work-text">Оплата результата</p>
              </div>
            </div>
            <button className="work-btn">Заказать клининг</button>
          </div>
          <h3 className="work-info-title">
            Проводите время с близкими, а не с вредителями!
          </h3>
        </section>
        <section className="photo conteiner">
          <h2 className="photo-title title-h2">Часть наших работ</h2>
          <div className="flex photo-info">
            <div>
              <img
                src="../markup/img/photo-image1.png"
                alt="photo"
                className="pfoto"
              />
            </div>
            <div className="flex photo-info-wrapper">
              <div>
                <h3 className="photo-info-title">Дезинсекция</h3>
                <p className="photo-p">
                  Дезинфекция - важнейший процесс, обеспечивающий чистоту и
                  безопасность окружающей среды. Она помогает уничтожать патогенные
                  микроорганизмы, такие как вирусы, бактерии и грибки. Это
                  предотвращает распространение инфекционных заболеваний среди людей
                </p>
              </div>
              <div className="flex pfoto-wrapper">
                <button className="pfoto-btn">
                  <img
                    src="../markup/img/photo-image-button1.png"
                    alt="button"
                    className="pfoto-img"
                  />
                </button>
                <button className="pfoto-btn">
                  <img
                    src="../markup/img/photo-image-button1.png"
                    alt="button"
                    className="pfoto-img"
                  />
                </button>
                <button className="pfoto-btn">
                  <img
                    src="../markup/img/photo-image-button1.png"
                    alt="button"
                    className="pfoto-img"
                  />
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="locations conteiner">
          <h2 className="photo-title title-h2">Где мы работаем</h2>
          <div className="flex">
            <form action="" className="services-form-def form-to-hide">
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
                  src="../markup/img/foto.svg"
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
            <div className="locations-city">
              <ul className="cities">
                <li className="city">Санкт-Петербург</li>
                <li className="city">Нижний Новгород</li>
                <li className="city">Краснодар</li>
                <li className="city">Ростов-на-Дону</li>
                <li className="city">Воронеж</li>
                <li className="city">Волгоград</li>
                <li className="city">Казань</li>
                <li className="city">Самара</li>
                <li className="city">Пермь</li>
                <li className="city">Уфа</li>
                <li className="city">Екатеринбург</li>
                <li className="city">Челябинск</li>
                <li className="city">Курган</li>
                <li className="city">Тюмень</li>
                <li className="city">Омск</li>
                <li className="city">Новосибирск</li>
                <li className="city">Красноярск</li>
                <li className="city">Барнаул</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="reviews conteiner">
          <h2 className="reviews-title title-h2">Отзывы</h2>
          <div className="flex review-btn-wrapper">
            <p className="review-p">
              За более 10 лет работы в сфере клининга мы смогли заслужить репутацию
              надежного партнера для тысяч клиентов, подтвержденную высоким
              качеством предоставляемых услуг и профессионализмом нашего персонала.
            </p>
            <button className="review-btn">Оставить отзывы</button>
          </div>
          <div
            className="splide"
            role="group"
            aria-label="Splide Basic HTML Example"
          >
            <div className="splide__track">
              <ul className="splide__list">
                <li className="splide__slide">
                  <div className="review">
                    <div className="flex review-title-wrapper">
                      <div>
                        <p className="review-name">Владислав</p>
                        <p className="review-service">Клининг помещения</p>
                      </div>
                      <div>
                        <img
                          src="../markup/img/Star.svg"
                          alt=""
                          className="star"
                        />
                        <img
                          src="../markup/img/Star.svg"
                          alt=""
                          className="star"
                        />
                        <img
                          src="../markup/img/Star.svg"
                          alt=""
                          className="star"
                        />
                        <img
                          src="../markup/img/Star.svg"
                          alt=""
                          className="star"
                        />
                        <img
                          src="../markup/img/Star.svg"
                          alt=""
                          className="star"
                        />
                      </div>
                    </div>
                    <p className="review-text">
                      Очень довольна клининговой компании ЭкоПрофКлин. Женщина
                      справилась с уборкой быстро и качественно. Настоящий мастер
                      своего дела.
                    </p>
                  </div>
                </li>
                <li className="splide__slide">
                  <div className="review">
                    <div className="flex review-title-wrapper">
                      <div>
                        <p className="review-name">Владислав</p>
                        <p className="review-service">Клининг помещения</p>
                      </div>
                      <div>
                        <img
                          src="../markup/img/Star.svg"
                          alt=""
                          className="star"
                        />
                        <img
                          src="../markup/img/Star.svg"
                          alt=""
                          className="star"
                        />
                        <img
                          src="../markup/img/Star.svg"
                          alt=""
                          className="star"
                        />
                        <img
                          src="../markup/img/Star.svg"
                          alt=""
                          className="star"
                        />
                        <img
                          src="../markup/img/Star.svg"
                          alt=""
                          className="star"
                        />
                      </div>
                    </div>
                    <p className="review-text">
                      Очень довольна клининговой компании ЭкоПрофКлин. Женщина
                      справилась с уборкой быстро и качественно. Настоящий мастер
                      своего дела.
                    </p>
                  </div>
                </li>
                <li className="splide__slide">
                  <div className="review">
                    <div className="flex review-title-wrapper">
                      <div>
                        <p className="review-name">Владислав</p>
                        <p className="review-service">Клининг помещения</p>
                      </div>
                      <div>
                        <img
                          src="../markup/img/Star.svg"
                          alt=""
                          className="star"
                        />
                        <img
                          src="../markup/img/Star.svg"
                          alt=""
                          className="star"
                        />
                        <img
                          src="../markup/img/Star.svg"
                          alt=""
                          className="star"
                        />
                        <img
                          src="../markup/img/Star.svg"
                          alt=""
                          className="star"
                        />
                        <img
                          src="../markup/img/Star.svg"
                          alt=""
                          className="star"
                        />
                      </div>
                    </div>
                    <p className="review-text">
                      Очень довольна клининговой компании ЭкоПрофКлин. Женщина
                      справилась с уборкой быстро и качественно. Настоящий мастер
                      своего дела.
                    </p>
                  </div>
                </li>
                <li className="splide__slide">
                  <div className="review">
                    <div className="flex review-title-wrapper">
                      <div>
                        <p className="review-name">Владислав</p>
                        <p className="review-service">Клининг помещения</p>
                      </div>
                      <div>
                        <img
                          src="../markup/img/Star.svg"
                          alt=""
                          className="star"
                        />
                        <img
                          src="../markup/img/Star.svg"
                          alt=""
                          className="star"
                        />
                        <img
                          src="../markup/img/Star.svg"
                          alt=""
                          className="star"
                        />
                        <img
                          src="../markup/img/Star.svg"
                          alt=""
                          className="star"
                        />
                        <img
                          src="../markup/img/Star.svg"
                          alt=""
                          className="star"
                        />
                      </div>
                    </div>
                    <p className="review-text">
                      Очень довольна клининговой компании ЭкоПрофКлин. Женщина
                      справилась с уборкой быстро и качественно. Настоящий мастер
                      своего дела.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
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
    </>
  );
}
