import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Reviews from '../components/reviews/reviews';
import FormService from '../components/form-service/form-service';
import FormOpen from '../components/form-open/form-open';
import FormDef from '../components/form-def/form-def';
import Adventages from '../components/adventages/adventages';
import Photo from '../components/photo/photo';
import { TDefaultPages } from '../const';
import { ServicesState } from '../utils/mocks';


export default function MainPage({ chooseActivePage, handlerCloseForm, isActiveForm}: TDefaultPages): JSX.Element {
  return (
    <div itemType="http://schema.org/LocalBusiness">
      <Header chooseActivePage={chooseActivePage} handlerCloseForm={handlerCloseForm} isActiveForm={isActiveForm} />
      <main>
        <FormOpen handlerCloseForm={handlerCloseForm} isActiveForm={isActiveForm}/>
        <section className="hero conteiner">
          <div className="flex hero-location">
            <img
              src="../img/location.svg"
              alt=""
              className="hero-location-image"
            />
            <p className="hero-pf">Работаем по городам России</p>
          </div>
          <h1 className="hero-h1">Сушка помещений после затопа</h1>
          <h2 className="hero-h2">
            Уничтожение клопов, тараканов, <br></br> любых видов насекомых и грызунов
          </h2>
          <h3 className="hero-p">
            Профессиональные услуги по сушке помещений, дезинфекции, дезинсекции и дератизации!
          </h3>
          <button className="hero-btn" onClick={handlerCloseForm}>Заказать клининг</button>
        </section>
        <section className="description">
          <div className="description-wrapper">
            <div className="description-block">
              <p className="description-p">
                <b itemProp="name">ЭкоПрофКлин</b> -  Помогаем привести помещение в порядок после трупа, пожара или потопа. Сделаем сушку помещения после затопа и избавим дом от тараканов, клопов, блох, любых других насекомых и грызунов.
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
            <a onClick={() => chooseActivePage(ServicesState.Dehumidification)} href={`/services/${ServicesState.Dehumidification}`} className="services-card card1 flex">
              <img
                src="../img/photoServices1.png"
                alt="photo"
                className="services-image"
                itemProp="image"
              />
              <div className="services-card-wrapper flex">
                <div className="services-card-text flex">
                  <h3 className="services-card-title">Осушение</h3>
                  <ul className="services-card-ul">
                    <li className="services-card-li">Откачка воды</li>
                    <li className="services-card-li">Просушка дома после затопа</li>
                    <li className="services-card-li">Просушка пола</li>
                    <li className="services-card-li">Просушка потолка</li>
                    <li className="services-card-li">Просушка стен</li>
                    <li className="services-card-li">Просушка строительной площадки</li>
                  </ul>
                </div>
                <div className="flex services-price">
                  <p className="price">от 1000 р</p>
                  <img src="../img/row.svg" alt="row" className="row" />
                </div>
              </div>
            </a>
            <a onClick={() => chooseActivePage(ServicesState.Cleaning)} href={`/services/${ServicesState.Cleaning}`} className="services-card card2 flex">
              <img
                src="../img/photoServices2.png"
                alt="photo"
                className="services-image"
                itemProp="image"
              />
              <div className="services-card-wrapper flex">
                <div className="services-card-text flex">
                  <h3 className="services-card-title">Уборка помещений</h3>
                  <ul className="services-card-ul">
                    <li className="services-card-li">Уборка запущенного помещения</li>
                    <li className="services-card-li">Уборка после пожара</li>
                    <li className="services-card-li">Уборка после умершего</li>
                    <li className="services-card-li">Уборка после ремонта</li>
                    <li className="services-card-li">Уборка после затопления</li>
                    <li className="services-card-li">Уничтожение плесени</li>
                    <li className="services-card-li">Чистка фасадов</li>
                  </ul>
                </div>
                <div className="flex services-price">
                  <p className="price">от 1000 р</p>
                  <img src="../img/row.svg" alt="row" className="row" />
                </div>
              </div>
            </a>
            <a onClick={() => chooseActivePage(ServicesState.Dismantling)} href={`/services/${ServicesState.Dismantling}`} className="services-card card3 flex">
              <img
                src="../img/photoServices3.png"
                alt="photo"
                className="services-image"
                itemProp="image"
              />
              <div className="services-card-wrapper flex">
                <div className="services-card-text flex">
                  <h3 className="services-card-title">Демонтажные работы</h3>
                  <ul className="services-card-ul">
                    <li className="services-card-li">Вывоз мусора</li>
                    <li className="services-card-li">Комплексная уборка</li>
                    <li className="services-card-li">Демонтаж пола</li>
                    <li className="services-card-li">Демонтаж стен</li>
                    <li className="services-card-li">Демонтаж потолка</li>
                    <li className="services-card-li">Демонтаж мебели</li>
                  </ul>
                </div>
                <div className="flex services-price">
                  <p className="price">от 1000 р</p>
                  <img src="../img/row.svg" alt="row" className="row" />
                </div>
              </div>
            </a>
            <a onClick={() => chooseActivePage(ServicesState.DDD)} href={`/services/${ServicesState.DDD}`} className="services-card card4 flex">
              <img
                src="../img/photoServices4.png"
                alt="photo"
                className="services-image"
                itemProp="image"
              />
              <div className="services-card-wrapper flex">
                <div className="services-card-text flex">
                  <h3 className="services-card-title">ДДД</h3>
                  <ul className="services-card-ul">
                    <li className="services-card-li">Дезодорация</li>
                    <li className="services-card-li">Дезинсекция</li>
                    <li className="services-card-li">Дезинфекция</li>
                    <li className="services-card-li">Дератизация</li>
                    <li className="services-card-li">Гербицидная обработка</li>
                    <li className="services-card-li">Озонирование и сухой туман</li>
                  </ul>
                </div>
                <div className="flex services-price">
                  <p className="price">от 1000 р</p>
                  <img src="../img/row.svg" alt="row" className="row" />
                </div>
              </div>
            </a>
            <FormService/>
          </div>
        </section>
        <Adventages/>
        <section className="work flex conteiner">
          <div className="work-info flex">
            <h2 className="work-title title-h2">Как мы работаем</h2>
            <div className="work-wrapper">
              <div className="flex work-item">
                <img src="../img/1.svg" alt="" className="work-img" />
                <p className="work-text">Оформление заявки</p>
              </div>
              <div className="flex work-item">
                <img src="../img/2.svg" alt="" className="work-img" />
                <p className="work-text">Оценка помещения</p>
              </div>
              <div className="flex work-item">
                <img src="../img/3.svg" alt="" className="work-img" />
                <p className="work-text">Проведение работы</p>
              </div>
              <div className="flex work-item">
                <img src="../img/4.svg" alt="" className="work-img" />
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
        <Reviews/>
      </main>
      <Footer chooseActivePage={chooseActivePage}/>
    </div>
  );
}
