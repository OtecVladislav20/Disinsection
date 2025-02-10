import Adventages from '../components/adventages/adventages';
import Footer from '../components/footer/footer';
import FormDef from '../components/form-def/form-def';
import FormOpen from '../components/form-open/form-open';
import Header from '../components/header/header';
import OpenButton from '../components/open-button/open-button';
import Reviews from '../components/reviews/reviews';
import { TCloseForm } from '../const';


export default function About({ handlerCloseForm, isActiveForm}: TCloseForm): JSX.Element {
  return (
    <>
      <Header handlerCloseForm={handlerCloseForm} isActiveForm={isActiveForm} />
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
          <div className='form-close-1100'>
            <FormDef/>
          </div>
        </section>
        <Adventages/>
        <section className="photo-a conteiner">
          <h2 className="services-title title-h2">Наши работы</h2>
          <div className="photo-wrapper-a">
            <div>
              <img
                src="../markup/img/aboutus1.png"
                alt=""
                className="photo-a-img"
              />
            </div>
            <div>
              <img
                src="../markup/img/aboutus2.png"
                alt=""
                className="photo-a-img"
              />
            </div>
            <div>
              <img
                src="../markup/img/aboutus3.png"
                alt=""
                className="photo-a-img"
              />
            </div>
            <div>
              <img
                src="../markup/img/aboutus4.png"
                alt=""
                className="photo-a-img"
              />
            </div>
            <div>
              <img
                src="../markup/img/aboutus5.png"
                alt=""
                className="photo-a-img"
              />
            </div>
            <div>
              <img
                src="../markup/img/aboutus6.png"
                alt=""
                className="photo-a-img"
              />
            </div>
            <div>
              <img
                src="../markup/img/aboutus7.png"
                alt=""
                className="photo-a-img"
              />
            </div>
            <div>
              <img
                src="../markup/img/aboutus8.png"
                alt=""
                className="photo-a-img"
              />
            </div>
            <div>
              <img
                src="../markup/img/aboutus9.png"
                alt=""
                className="photo-a-img"
              />
            </div>
            <div>
              <img
                src="../markup/img/aboutus10.png"
                alt=""
                className="photo-a-img"
              />
            </div>
            <div>
              <img
                src="../markup/img/aboutus11.png"
                alt=""
                className="photo-a-img"
              />
            </div>
            <div>
              <img
                src="../markup/img/aboutus12.png"
                alt=""
                className="photo-a-img"
              />
            </div>
            <div>
              <img
                src="../markup/img/aboutus13.png"
                alt=""
                className="photo-a-img"
              />
            </div>
            <div>
              <img
                src="../markup/img/aboutus14.png"
                alt=""
                className="photo-a-img"
              />
            </div>
            <div>
              <img
                src="../markup/img/aboutus15.png"
                alt=""
                className="photo-a-img"
              />
            </div>
            <div>
              <img
                src="../markup/img/aboutus16.png"
                alt=""
                className="photo-a-img"
              />
            </div>
          </div>
        </section>
        <Reviews handlerCloseForm={handlerCloseForm}/>
      </main>
      <Footer/>
    </>
  );
}
