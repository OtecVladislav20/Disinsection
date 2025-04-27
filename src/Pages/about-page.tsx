import Adventages from '../components/adventages/adventages';
import Footer from '../components/footer/footer';
import FormOpen from '../components/form-open/form-open';
import Header from '../components/header/header';
import OpenButton from '../components/open-button/open-button';
import Reviews from '../components/reviews/reviews';
import { TDefaultPages } from '../const';


export default function About({chooseActivePage, handlerCloseForm, isActiveForm}: TDefaultPages): JSX.Element {
  return (
    <>
      <Header chooseActivePage={chooseActivePage} handlerCloseForm={handlerCloseForm} isActiveForm={isActiveForm} />
      <main>
        <FormOpen handlerCloseForm={handlerCloseForm} isActiveForm={isActiveForm}/>
        <OpenButton handlerCloseForm={handlerCloseForm}/>
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
                ИП Томашова Людмила Павловна
              </li>
              <li className="requisites-item">
                Юридический адрес: ул.Лукиных 5, г.Екатеринбург
              </li>
              <li className="requisites-item">
                ИНН 667353183814
              </li>
              <li className="requisites-item">
                ОГРНИП 323665800047950
              </li>
              <li className="requisites-item">
                ул.Лукиных 5
              </li>
              <li className="requisites-item">
                +7 919 909 32 99
              </li>
              <li className="requisites-item">
                eckoprofklin@yandex.ru
              </li>
            </ul>
          </div>
          <img src="../img/Licens.png" alt="" className='licens'/>
        </section>
        <Adventages/>
        <section className="photo-a conteiner">
          <h2 className="services-title title-h2">Наши работы</h2>
          <div className="photo-wrapper-a">
            <div>
              <img
                src="../img/aboutus1.png"
                alt=""
                className="photo-a-img"
              />
            </div>
            <div>
              <img
                src="../img/aboutus2.png"
                alt=""
                className="photo-a-img"
              />
            </div>
            <div>
              <img
                src="../img/aboutus3.png"
                alt=""
                className="photo-a-img"
              />
            </div>
            <div>
              <img
                src="../img/aboutus4.png"
                alt=""
                className="photo-a-img"
              />
            </div>
            <div>
              <img
                src="../img/aboutus5.png"
                alt=""
                className="photo-a-img"
              />
            </div>
            <div>
              <img
                src="../img/aboutus6.png"
                alt=""
                className="photo-a-img"
              />
            </div>
            <div>
              <img
                src="../img/aboutus7.png"
                alt=""
                className="photo-a-img"
              />
            </div>
            <div>
              <img
                src="../img/aboutus8.png"
                alt=""
                className="photo-a-img"
              />
            </div>
            <div>
              <img
                src="../img/aboutus9.png"
                alt=""
                className="photo-a-img"
              />
            </div>
            <div>
              <img
                src="../img/aboutus10.png"
                alt=""
                className="photo-a-img"
              />
            </div>
            <div>
              <img
                src="../img/aboutus11.png"
                alt=""
                className="photo-a-img"
              />
            </div>
            <div>
              <img
                src="../img/aboutus12.png"
                alt=""
                className="photo-a-img"
              />
            </div>
            <div>
              <img
                src="../img/aboutus13.png"
                alt=""
                className="photo-a-img"
              />
            </div>
            <div>
              <img
                src="../img/aboutus14.png"
                alt=""
                className="photo-a-img"
              />
            </div>
            <div>
              <img
                src="../img/aboutus15.png"
                alt=""
                className="photo-a-img"
              />
            </div>
            <div>
              <img
                src="../img/aboutus16.png"
                alt=""
                className="photo-a-img"
              />
            </div>
          </div>
        </section>
        <Reviews/>
      </main>
      <Footer chooseActivePage={chooseActivePage}/>
    </>
  );
}
