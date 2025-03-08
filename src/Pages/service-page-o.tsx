import Footer from '../components/footer/footer';
import FormDef from '../components/form-def/form-def';
import FormOpen from '../components/form-open/form-open';
import Header from '../components/header/header';
import OpenButton from '../components/open-button/open-button';
import { TPages } from '../const';


export default function ServicePageO({ PagesData, activePage, chooseActivePage, handlerCloseForm, isActiveForm }: TPages): JSX.Element {
  return (
    <>
      <Header activePage={activePage} chooseActivePage={chooseActivePage} handlerCloseForm={handlerCloseForm} isActiveForm={isActiveForm} />
      <main className="flex">
        <FormOpen handlerCloseForm={handlerCloseForm} isActiveForm={isActiveForm}/>
        <div className="main-left">
          <OpenButton handlerCloseForm={handlerCloseForm}/>
          <section className="hero-info-sp conteiner">
            <h1 className="hero-h1-sp close-mobile">{PagesData[activePage].hero_h1}</h1>
            <h2 className="hero-h2-sp close-mobile">
              {PagesData[activePage].hero_h2}
            </h2>
            <div className="hero-mobile-sp">
              <img
                src="../img/hero-sp-mobile1.png"
                alt=""
                className="hero-img-mobile"
              />
            </div>
          </section>
          <section className="description-sp">
            <div className="description-wrapper-sp">
              <div className="description-block-sp">
                <p className="description-p-sp">
                  {PagesData[activePage].description}
                </p>
              </div>
            </div>
          </section>
          <section className="services-sp conteiner">
            <h2 className="services-title title-h2">Наши предложения</h2>
            <div className="services-cards-sp">
              <div className="services-card-sp">
                <img
                  src="../img/services-sp1.png"
                  alt=""
                  className="services-img-sp"
                />
              </div>
              <div className="services-card-sp">
                <img
                  src="../img/services-sp2.png"
                  alt=""
                  className="services-img-sp"
                />
              </div>
              <div className="services-card-sp">
                <img
                  src="../img/services-sp3.png"
                  alt=""
                  className="services-img-sp"
                />
              </div>
              <div className="services-card-sp">
                <img
                  src="../img/services-sp4.png"
                  alt=""
                  className="services-img-sp"
                />
              </div>
              <div className="services-card-sp">
                <img
                  src="../img/services-sp5.png"
                  alt=""
                  className="services-img-sp"
                />
              </div>
              <div className="services-card-sp">
                <img
                  src="../img/services-sp6.png"
                  alt=""
                  className="services-img-sp"
                />
              </div>
            </div>
          </section>
          <section className="achivments-sp conteiner">
            <div className="flex achivments-block-sp">
              <img
                src="../img/checkmark.svg"
                alt=""
                className="checkmark"
              />
              <p className="achivments-text-sp">
                {PagesData[activePage].achivments[0]}
              </p>
            </div>
            <div className="flex achivments-block-sp">
              <img
                src="../img/checkmark.svg"
                alt=""
                className="checkmark"
              />
              <p className="achivments-text-sp">
                {PagesData[activePage].achivments[0]}
              </p>
            </div>
            <div className="flex achivments-block-sp">
              <img
                src="../img/checkmark.svg"
                alt=""
                className="checkmark"
              />
              <p className="achivments-text-sp">
                {PagesData[activePage].achivments[0]}
              </p>
            </div>
            <div className="flex achivments-block-sp">
              <img
                src="../img/checkmark.svg"
                alt=""
                className="checkmark"
              />
              <p className="achivments-text-sp">
                {PagesData[activePage].achivments[0]}
              </p>
            </div>
          </section>
          <section className="work-sp conteiner">
            <h2 className="services-title title-h2">Наша команда за работой</h2>
            <div className="work-photo-wrapper-sp">
              <div className="work-photo-sp">
                <img
                  src="../img/work-photo-sp1o.png"
                  alt=""
                  className="work-photo-img"
                />
              </div>
              <div className="work-photo-sp">
                <img
                  src="../img/work-photo-sp2o.png"
                  alt=""
                  className="work-photo-img"
                />
              </div>
              <div className="work-photo-sp">
                <img
                  src="../img/work-photo-sp3o.png"
                  alt=""
                  className="work-photo-img"
                />
              </div>
              <div className="work-photo-sp">
                <img
                  src="../img/work-photo-sp4o.png"
                  alt=""
                  className="work-photo-img"
                />
              </div>
              <div className="work-photo-sp">
                <img
                  src="../img/work-photo-sp5o.png"
                  alt=""
                  className="work-photo-img"
                />
              </div>
              <div className="work-photo-sp">
                <img
                  src="../img/work-photo-sp6o.png"
                  alt=""
                  className="work-photo-img"
                />
              </div>
              <div className="work-photo-sp">
                <img
                  src="../img/work-photo-sp7o.png"
                  alt=""
                  className="work-photo-img"
                />
              </div>
              <div className="work-photo-sp">
                <img
                  src="../img/work-photo-sp8o.png"
                  alt=""
                  className="work-photo-img"
                />
              </div>
              <div className="work-photo-sp">
                <img
                  src="../img/work-photo-sp9o.png"
                  alt=""
                  className="work-photo-img"
                />
              </div>
            </div>
          </section>
          <section className="info-sp conteiner">
            <p className="info-p-sp">
            {PagesData[activePage].info_p}
            </p>
            <h3 className="info-title-sp">
              {PagesData[activePage].info_h3}
            </h3>
          </section>
          <section className="price-p conteiner">
            <h2 className="services-title title-h2">Цены на Осушение</h2>
            <table cellPadding="12px" rules="rows" bgcolor="#fff">
              <tbody>
                <tr>
                  <td className="table-title">Тип помещения</td>
                  <td className="table-title">Цена</td>
                </tr>
                <tr className="blue">
                  <td className="table-p">Откачка воды</td>
                  <td className="table-p">от 800 руб</td>
                </tr>
                <tr>
                  <td className="table-p">Просушка дома после затопа</td>
                  <td className="table-p">от 250 р/м2</td>
                </tr>
                <tr className="blue">
                  <td className="table-p">Просушка пола</td>
                  <td className="table-p">от 250 р/м2</td>
                </tr>
                <tr>
                  <td className="table-p">Просушка потолка</td>
                  <td className="table-p">от 250 р/м2</td>
                </tr>
                <tr className="blue">
                  <td className="table-p">Просушка стен</td>
                  <td className="table-p">от 250 р/м2</td>
                </tr>
                <tr>
                  <td className="table-p">Просушка строительной площадки</td>
                  <td className="table-p">от 400 р/м2</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section className="need-sp conteiner">
            <h2 className="services-title title-h2">Что от вас требуется?</h2>
            <ul>
              <li className="need-cerd-sp">{PagesData[activePage].need[0]}</li>
              <li className="need-cerd-sp">{PagesData[activePage].need[0]}</li>
              <li className="need-cerd-sp">{PagesData[activePage].need[0]}</li>
            </ul>
          </section>
        </div>
        <div className="form-sp">
          <div className="form-wrapper-sp">
            <FormDef/>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}
