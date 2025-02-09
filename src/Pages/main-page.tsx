import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Reviews from '../components/reviews/reviews';
import FormService from '../components/form-service/form-service';
import FormOpen from '../components/form-open/form-open';
import FormDef from '../components/form-def/form-def';
import Adventages from '../components/adventages/adventages';
import Photo from '../components/photo/photo';


export default function MainPage({ handlerCloseForm, isActiveForm}): JSX.Element {
  return (
    <>
      <Header handlerCloseForm={handlerCloseForm} isActiveForm={isActiveForm} />
      <main>
        <FormOpen handlerCloseForm={handlerCloseForm} isActiveForm={isActiveForm}/>
        <section className="hero conteiner">
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
          <button className="hero-btn" onClick={handlerCloseForm}>Заказать клининг</button>
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
            <FormService/>
          </div>
        </section>
        <Adventages/>
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
            <button className="work-btn" onClick={handlerCloseForm}>Заказать клининг</button>
          </div>
          <h3 className="work-info-title">
            Проводите время с близкими, а не с вредителями!
          </h3>
        </section>
        <Photo/>
        <section className="locations conteiner">
          <h2 className="photo-title title-h2">Где мы работаем</h2>
          <div className="flex">
            <div className='form-def-main'>
              <FormDef/>
            </div>
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
        <Reviews handlerCloseForm={handlerCloseForm}/>
      </main>
      <Footer/>
    </>
  );
}
