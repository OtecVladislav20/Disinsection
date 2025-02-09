import Footer from '../components/footer/footer';
import FormDef from '../components/form-def/form-def';
import FormOpen from '../components/form-open/form-open';
import Header from '../components/header/header';
import OpenButton from '../components/open-button/open-button';


export default function ServicePage({ handlerCloseForm, isActiveForm }): JSX.Element {
  return (
    <>
      <Header handlerCloseForm={handlerCloseForm} isActiveForm={isActiveForm}/>
      <main className="flex">
        <FormOpen handlerCloseForm={handlerCloseForm} isActiveForm={isActiveForm}/>
        <div className="main-left">
          <OpenButton handlerCloseForm={handlerCloseForm}/>
          <section className="hero-info-sp conteiner">
            <h1 className="hero-h1-sp close-mobile">Осушение</h1>
            <h2 className="hero-h2-sp close-mobile">
              Процесс уменьшения уровня влажности в помещении с помощью специальных
              устройств
            </h2>
            <div className="hero-mobile-sp">
              <img
                src="../markup/img/hero-sp-mobile1.png"
                alt=""
                className="hero-img-mobile"
              />
            </div>
          </section>
          <section className="description-sp">
            <div className="description-wrapper-sp">
              <div className="description-block-sp">
                <p className="description-p-sp">
                  Мы предлагаем профессиональное осушение помещения с использованием
                  современных методов и экологически чистых средств.
                </p>
              </div>
            </div>
          </section>
          <section className="services-sp conteiner">
            <h2 className="services-title title-h2">Наши предложения</h2>
            <div className="services-cards-sp">
              <div className="services-card-sp">
                <img
                  src="../markup/img/services-sp1.png"
                  alt=""
                  className="services-img-sp"
                />
              </div>
              <div className="services-card-sp">
                <img
                  src="../markup/img/services-sp1.png"
                  alt=""
                  className="services-img-sp"
                />
              </div>
              <div className="services-card-sp">
                <img
                  src="../markup/img/services-sp1.png"
                  alt=""
                  className="services-img-sp"
                />
              </div>
              <div className="services-card-sp">
                <img
                  src="../markup/img/services-sp1.png"
                  alt=""
                  className="services-img-sp"
                />
              </div>
              <div className="services-card-sp">
                <img
                  src="../markup/img/services-sp1.png"
                  alt=""
                  className="services-img-sp"
                />
              </div>
              <div className="services-card-sp">
                <img
                  src="../markup/img/services-sp1.png"
                  alt=""
                  className="services-img-sp"
                />
              </div>
            </div>
          </section>
          <section className="achivments-sp conteiner">
            <div className="flex achivments-block-sp">
              <img
                src="../markup/img/checkmark.svg"
                alt=""
                className="checkmark"
              />
              <p className="achivments-text-sp">
                Индивидуальный подход к каждому объекту
              </p>
            </div>
            <div className="flex achivments-block-sp">
              <img
                src="../markup/img/checkmark.svg"
                alt=""
                className="checkmark"
              />
              <p className="achivments-text-sp">
                Индивидуальный подход к каждому объекту
              </p>
            </div>
            <div className="flex achivments-block-sp">
              <img
                src="../markup/img/checkmark.svg"
                alt=""
                className="checkmark"
              />
              <p className="achivments-text-sp">
                Индивидуальный подход к каждому объекту
              </p>
            </div>
            <div className="flex achivments-block-sp">
              <img
                src="../markup/img/checkmark.svg"
                alt=""
                className="checkmark"
              />
              <p className="achivments-text-sp">
                Индивидуальный подход к каждому объекту
              </p>
            </div>
          </section>
          <section className="work-sp conteiner">
            <h2 className="services-title title-h2">Наша команда за работой</h2>
            <div className="work-photo-wrapper-sp">
              <div className="work-photo-sp">
                <img
                  src="../markup/img/work-photo-sp1.png"
                  alt=""
                  className="work-photo-img"
                />
              </div>
              <div className="work-photo-sp">
                <img
                  src="../markup/img/work-photo-sp1.png"
                  alt=""
                  className="work-photo-img"
                />
              </div>
              <div className="work-photo-sp">
                <img
                  src="../markup/img/work-photo-sp1.png"
                  alt=""
                  className="work-photo-img"
                />
              </div>
              <div className="work-photo-sp">
                <img
                  src="../markup/img/work-photo-sp1.png"
                  alt=""
                  className="work-photo-img"
                />
              </div>
              <div className="work-photo-sp">
                <img
                  src="../markup/img/work-photo-sp1.png"
                  alt=""
                  className="work-photo-img"
                />
              </div>
              <div className="work-photo-sp">
                <img
                  src="../markup/img/work-photo-sp1.png"
                  alt=""
                  className="work-photo-img"
                />
              </div>
            </div>
          </section>
          <section className="info-sp conteiner">
            <p className="info-p-sp">
              Обращаясь к нам, вы получаете не просто услугу по осушению помещения,
              а комплексное решение проблемы с гарантией качества и минимальными
              сроками выполнения работ. Наши специалисты помогут сохранить ваше
              имущество и вернуть квартиру в отличное состояние как можно быстрее.
            </p>
            <h3 className="info-title-sp">
              Звоните прямо сейчас и заказывайте эффективное осушение у надежных
              профессионалов!
            </h3>
          </section>
          <section className="price-sp conteiner">
            <h2 className="services-title title-h2">Цены на осушение</h2>
            <table cellPadding="15px" rules="rows" bgcolor="#fff">
              <tbody>
                <tr>
                  <td className="table-title">Тип помещения</td>
                  <td className="table-title">Цена</td>
                </tr>
                <tr className="blue">
                  <td className="table-p">1-комнатная квартира</td>
                  <td className="table-p">от 1000 руб</td>
                </tr>
                <tr>
                  <td className="table-p">1-комнатная квартира</td>
                  <td className="table-p">от 1000 руб</td>
                </tr>
                <tr className="blue">
                  <td className="table-p">1-комнатная квартира</td>
                  <td className="table-p">от 1000 руб</td>
                </tr>
                <tr>
                  <td className="table-p">1-комнатная квартира</td>
                  <td className="table-p">от 1000 руб</td>
                </tr>
                <tr className="blue">
                  <td className="table-p">1-комнатная квартира</td>
                  <td className="table-p">от 1000 руб</td>
                </tr>
                <tr>
                  <td className="table-p">1-комнатная квартира</td>
                  <td className="table-p">от 1000 руб</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section className="need-sp conteiner">
            <h2 className="services-title title-h2">Что от вас требуется?</h2>
            <ul>
              <li className="need-cerd-sp">Изолируйте домашних питомцев</li>
              <li className="need-cerd-sp">Изолируйте домашних питомцев</li>
              <li className="need-cerd-sp">Изолируйте домашних питомцев</li>
              <li className="need-cerd-sp">Изолируйте домашних питомцев</li>
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
