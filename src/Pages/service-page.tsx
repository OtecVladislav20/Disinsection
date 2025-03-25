/* eslint-disable react/no-unknown-property */
import Footer from '../components/footer/footer';
import FormDef from '../components/form-def/form-def';
import FormOpen from '../components/form-open/form-open';
import Header from '../components/header/header';
import OpenButton from '../components/open-button/open-button';
import CleaningPrice from '../components/price/cleaning-price';
import DddPrice from '../components/price/ddd-price';
import DehumidificationPrice from '../components/price/dehumidification-price';
import DismantlingPrice from '../components/price/dismantling-price';
import { TPages } from '../const';
import { ServicesState } from '../utils/mocks';


export default function ServicePage({ PagesData, activePage, chooseActivePage, handlerCloseForm, isActiveForm }: TPages): JSX.Element {
  return (
    <>
      <Header chooseActivePage={chooseActivePage} handlerCloseForm={handlerCloseForm} isActiveForm={isActiveForm} />
      <main className="flex">
        <FormOpen handlerCloseForm={handlerCloseForm} isActiveForm={isActiveForm}/>
        <div className="main-left">
          <OpenButton handlerCloseForm={handlerCloseForm}/>
          <section className={`${activePage} conteiner`}>
            <h1 className="hero-h1-sp close-mobile">{PagesData[activePage].heroH1}</h1>
            <h2 className="hero-h2-sp close-mobile">
              {PagesData[activePage].heroH2}
            </h2>
            <div className="hero-mobile-sp">
              <img
                src={PagesData[activePage].heroPhoto}
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
            <h2 className="services-title title-h2">Наши услуги</h2>
            <div className="services-cards-sp">
              {PagesData[activePage].servicesPhoto.map((i) => (
                <div key={i} className="services-card-sp">
                  <img
                    src={i}
                    alt=""
                    className="services-img-sp"
                  />
                </div>
              ))}
            </div>
          </section>
          <section className="achivments-sp conteiner">
            {PagesData[activePage].achivments.map((i) =>
              (
                <div key={i} className="flex achivments-block-sp">
                  <img
                    src="../img/checkmark.svg"
                    alt=""
                    className="checkmark"
                  />
                  <p className="achivments-text-sp">
                    {i}
                  </p>
                </div>
              )
            )}
          </section>
          <section className="work-sp conteiner">
            <h2 className="services-title title-h2">Наша команда за работой</h2>
            <div className="work-photo-wrapper-sp">
              {PagesData[activePage].workPhoto.map((i) => (
                <div key={i} className="work-photo-sp">
                  <img
                    src={i}
                    alt=""
                    className="work-photo-img"
                  />
                </div>
              ))}
            </div>
          </section>
          <section className="info-sp conteiner">
            <p className="info-p-sp">
              {PagesData[activePage].infoP}
            </p>
            <h3 className="info-title-sp">
              {PagesData[activePage].infoH3}
            </h3>
          </section>
          {activePage === ServicesState.Dehumidification ?
            <DehumidificationPrice/> : ''}
          {activePage === ServicesState.Cleaning ?
            <CleaningPrice/> : ''}
          {activePage === ServicesState.Dismantling ?
            <DismantlingPrice/> : ''}
          {activePage === ServicesState.DDD ?
            <DddPrice/> : ''}
          <section className="need-sp conteiner">
            <h2 className="services-title title-h2">Что от вас требуется?</h2>
            <ul>
              {
                PagesData[activePage].need.map((n) => (
                  <li key={n} className="need-cerd-sp">{n}</li>
                ))
              }
            </ul>
          </section>
        </div>
        <div className="form-sp">
          <div className="form-wrapper-sp">
            <FormDef/>
          </div>
        </div>
      </main>
      <Footer chooseActivePage={chooseActivePage}/>
    </>
  );
}
