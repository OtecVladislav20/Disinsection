import Footer from '../components/footer/footer';
import FormDef from '../components/form-def/form-def';
import FormOpen from '../components/form-open/form-open';
import Header from '../components/header/header';
import OpenButton from '../components/open-button/open-button';
import { TCloseForm } from '../const';


export default function ServicePageDDDD({ handlerCloseForm, isActiveForm }: TCloseForm): JSX.Element {
  return (
    <>
      <Header handlerCloseForm={handlerCloseForm} isActiveForm={isActiveForm}/>
      <main className="flex">
        <FormOpen handlerCloseForm={handlerCloseForm} isActiveForm={isActiveForm}/>
        <div className="main-left">
          <OpenButton handlerCloseForm={handlerCloseForm}/>
          <section className="hero-info-sp conteiner">
            <h1 className="hero-h1-sp close-mobile">ДДДД</h1>
            <h2 className="hero-h2-sp close-mobile">
              Процесс уничтожение вредителей, неприятного запаха и патогенных микроорганизмов.
            </h2>
            <div className="hero-mobile-sp">
              <img
                src="../public/img/hero-sp-mobile1.png"
                alt=""
                className="hero-img-mobile"
              />
            </div>
          </section>
          <section className="description-sp">
            <div className="description-wrapper-sp">
              <div className="description-block-sp">
                <p className="description-p-sp">
                  Мы предлагаем эффективную обработку участка или помещения с использованием
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
                  src="../public/img/services-sp1dd.png"
                  alt=""
                  className="services-img-sp"
                />
              </div>
              <div className="services-card-sp">
                <img
                  src="../public/img/services-sp2dd.png"
                  alt=""
                  className="services-img-sp"
                />
              </div>
              <div className="services-card-sp">
                <img
                  src="../public/img/services-sp3dd.png"
                  alt=""
                  className="services-img-sp"
                />
              </div>
              <div className="services-card-sp">
                <img
                  src="../public/img/services-sp4dd.png"
                  alt=""
                  className="services-img-sp"
                />
              </div>
              <div className="services-card-sp">
                <img
                  src="../public/img/services-sp5dd.png"
                  alt=""
                  className="services-img-sp"
                />
              </div>
            </div>
          </section>
          <section className="achivments-sp conteiner">
            <div className="flex achivments-block-sp">
              <img
                src="../public/img/checkmark.svg"
                alt=""
                className="checkmark"
              />
              <p className="achivments-text-sp">
                Профессиональный подход к каждой задаче
              </p>
            </div>
            <div className="flex achivments-block-sp">
              <img
                src="../public/img/checkmark.svg"
                alt=""
                className="checkmark"
              />
              <p className="achivments-text-sp">
                Использование только качественных средств
              </p>
            </div>
            <div className="flex achivments-block-sp">
              <img
                src="../public/img/checkmark.svg"
                alt=""
                className="checkmark"
              />
              <p className="achivments-text-sp">
                Быстрая обработка помещений без нарушения работы
              </p>
            </div>
            <div className="flex achivments-block-sp">
              <img
                src="../public/img/checkmark.svg"
                alt=""
                className="checkmark"
              />
              <p className="achivments-text-sp">
                Гарантия безопасности для сотрудников и посетителей
              </p>
            </div>
          </section>
          <section className="work-sp conteiner">
            <h2 className="services-title title-h2">Наша команда за работой</h2>
            <div className="work-photo-wrapper-sp">
              <div className="work-photo-sp">
                <img
                  src="../public/img/work-photo-sp1dd.png"
                  alt=""
                  className="work-photo-img"
                />
              </div>
              <div className="work-photo-sp">
                <img
                  src="../public/img/work-photo-sp2dd.png"
                  alt=""
                  className="work-photo-img"
                />
              </div>
              <div className="work-photo-sp">
                <img
                  src="../public/img/work-photo-sp3dd.png"
                  alt=""
                  className="work-photo-img"
                />
              </div>
              <div className="work-photo-sp">
                <img
                  src="../public/img/work-photo-sp4dd.png"
                  alt=""
                  className="work-photo-img"
                />
              </div>
              <div className="work-photo-sp">
                <img
                  src="../public/img/work-photo-sp5dd.png"
                  alt=""
                  className="work-photo-img"
                />
              </div>
              <div className="work-photo-sp">
                <img
                  src="../public/img/work-photo-sp6dd.png"
                  alt=""
                  className="work-photo-img"
                />
              </div>
            </div>
          </section>
          <section className="info-sp conteiner">
            <p className="info-p-sp">
            Нашими специалистами проводится комплексная диагностика помещения,
            выявление источников заражения и разработка персонализированной программы обработки.
            Мы используем только проверенные методы и средства, гарантирующие полное устранение проблемы. Делая выбор в нашу сторону,
            вы получаете не только избавление от вредителей, но и долгосрочную защиту от их повторного появления.
            Наши специалисты также предоставляют рекомендации по профилактике и предотвращению проблем в будущем.
            </p>
            <h3 className="info-title-sp">
              Звоните прямо сейчас и заказывайте эффективное осушение у надежных
              профессионалов!
            </h3>
          </section>
          <section className="price-p conteiner">
            <h2 className="services-title title-h2">Цены на ДДДД</h2>
            <table cellPadding="15px" rules="rows" bgcolor="#fff">
              <tbody>
                <tr>
                  <td className="table-title">Тип помещения</td>
                  <td className="table-title">Цена</td>
                </tr>
                <tr>
                  <td className="table-p">Дезодорация</td>
                  <td className="table-p">от 1500 руб</td>
                </tr>
                <tr className="blue">
                  <td className="table-p">Дезинфекция</td>
                  <td className="table-p">от 1200 руб</td>
                </tr>
                <tr>
                  <td className="table-p">Дезинсекция</td>
                  <td className="table-p">от 1200 руб</td>
                </tr>
                <tr className="blue">
                  <td className="table-p">Дератизация</td>
                  <td className="table-p">от 3000 руб</td>
                </tr>
                <tr>
                  <td className="table-p">Гербицидная обработка</td>
                  <td className="table-p">от 2000 руб</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section className="need-sp conteiner">
            <h2 className="services-title title-h2">Что от вас требуется?</h2>
            <ul>
              <li className="need-cerd-sp">Убрать все продукты</li>
              <li className="need-cerd-sp">Проветрить помещение</li>
              <li className="need-cerd-sp">Рекомендуется очистить все поверхности от пыли</li>
              <li className="need-cerd-sp">Изолируйте домашних питомцев</li>
              <li className="need-cerd-sp">Отодвинуть мебель от стен</li>
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
