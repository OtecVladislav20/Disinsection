import Footer from '../components/footer/footer';
import FormDef from '../components/form-def/form-def';
import FormOpen from '../components/form-open/form-open';
import Header from '../components/header/header';
import OpenButton from '../components/open-button/open-button';
import { TCloseForm } from '../const';


export default function ServicePageC({ handlerCloseForm, isActiveForm }: TCloseForm): JSX.Element {
  return (
    <>
      <Header handlerCloseForm={handlerCloseForm} isActiveForm={isActiveForm}/>
      <main className="flex">
        <FormOpen handlerCloseForm={handlerCloseForm} isActiveForm={isActiveForm}/>
        <div className="main-left">
          <OpenButton handlerCloseForm={handlerCloseForm}/>
          <section className="hero-info-sp-c conteiner">
            <h1 className="hero-h1-sp close-mobile">Уборка помещений</h1>
            <h2 className="hero-h2-sp close-mobile">
              Процесс устранения загрязнений помещения после нестандартных ситуаций
            </h2>
            <div className="hero-mobile-sp">
              <img
                src="../img/hero-sp-mobile1c.png"
                alt=""
                className="hero-img-mobile"
              />
            </div>
          </section>
          <section className="description-sp">
            <div className="description-wrapper-sp">
              <div className="description-block-sp">
                <p className="description-p-sp">
                  Мы команда высококвалифицированных специалистов в сфере клининга.
                  Благодаря большому опыту мы гарантируем 100% качественный результат.
                </p>
              </div>
            </div>
          </section>
          <section className="services-sp conteiner">
            <h2 className="services-title title-h2">Наши предложения</h2>
            <div className="services-cards-sp">
              <div className="services-card-sp">
                <img
                  src="../img/services-sp1c.png"
                  alt=""
                  className="services-img-sp"
                />
              </div>
              <div className="services-card-sp">
                <img
                  src="../img/services-sp2c.png"
                  alt=""
                  className="services-img-sp"
                />
              </div>
              <div className="services-card-sp">
                <img
                  src="../img/services-sp3c.png"
                  alt=""
                  className="services-img-sp"
                />
              </div>
              <div className="services-card-sp">
                <img
                  src="../img/services-sp4c.png"
                  alt=""
                  className="services-img-sp"
                />
              </div>
              <div className="services-card-sp">
                <img
                  src="../img/services-sp5c.png"
                  alt=""
                  className="services-img-sp"
                />
              </div>
              <div className="services-card-sp">
                <img
                  src="../img/services-sp6c.png"
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
                Индивидуальный подход к каждому объекту
              </p>
            </div>
            <div className="flex achivments-block-sp">
              <img
                src="../img/checkmark.svg"
                alt=""
                className="checkmark"
              />
              <p className="achivments-text-sp">
                Использование профессионального оборудования и инструмента
              </p>
            </div>
            <div className="flex achivments-block-sp">
              <img
                src="../img/checkmark.svg"
                alt=""
                className="checkmark"
              />
              <p className="achivments-text-sp">
                Возможность создания индивидуальных планов уборки под ваши нужды
              </p>
            </div>
            <div className="flex achivments-block-sp">
              <img
                src="../img/checkmark.svg"
                alt=""
                className="checkmark"
              />
              <p className="achivments-text-sp">
                Быстрая обработка помещений без нарушения рабочего процесса
              </p>
            </div>
            <div className="flex achivments-block-sp">
              <img
                src="../img/checkmark.svg"
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
                  src="../img/work-photo-sp1c.png"
                  alt=""
                  className="work-photo-img"
                />
              </div>
              <div className="work-photo-sp">
                <img
                  src="../img/work-photo-sp2c.png"
                  alt=""
                  className="work-photo-img"
                />
              </div>
              <div className="work-photo-sp">
                <img
                  src="../img/work-photo-sp3c.png"
                  alt=""
                  className="work-photo-img"
                />
              </div>
              <div className="work-photo-sp">
                <img
                  src="../img/work-photo-sp4c.png"
                  alt=""
                  className="work-photo-img"
                />
              </div>
              <div className="work-photo-sp">
                <img
                  src="../img/work-photo-sp5c.png"
                  alt=""
                  className="work-photo-img"
                />
              </div>
              <div className="work-photo-sp">
                <img
                  src="../img/work-photo-sp6c.png"
                  alt=""
                  className="work-photo-img"
                />
              </div>
            </div>
          </section>
          <section className="info-sp conteiner">
            <p className="info-p-sp">
              Делая выбор в нашу сторону, вы получаете не только чистоту и порядок,
              но и дополнительное время для вашей основной деятельности.
              Наши специалисты также предоставляют рекомендации по правильному уходу за поверхностями и профилактике появления грязи в будущем.
            </p>
            <h3 className="info-title-sp">
              Звоните прямо сейчас и заказывайте эффективное осушение у надежных
              профессионалов!
            </h3>
          </section>
          <section className="price-p conteiner">
            <h2 className="services-title title-h2">Цены на Уборку помешений</h2>
            <table cellPadding="15px" rules="rows" bgcolor="#fff">
              <tbody>
                <tr>
                  <td className="table-title">Тип помещения</td>
                  <td className="table-title">Цена</td>
                </tr>
                <tr className="blue">
                  <td className="table-p">Уборка запущенного помещения</td>
                  <td className="table-p">от 2000 руб</td>
                </tr>
                <tr>
                  <td className="table-p">Уборка после пожара</td>
                  <td className="table-p">от 3000 руб</td>
                </tr>
                <tr className="blue">
                  <td className="table-p">Уборка после умершего</td>
                  <td className="table-p">от 1000 руб</td>
                </tr>
                <tr>
                  <td className="table-p">Уборка после ремонта</td>
                  <td className="table-p">от 2000 руб</td>
                </tr>
                <tr className="blue">
                  <td className="table-p">Уборка после затопления</td>
                  <td className="table-p">от 3000 руб</td>
                </tr>
                <tr>
                  <td className="table-p">Уничтожение плесени</td>
                  <td className="table-p">от 1000 руб</td>
                </tr>
              </tbody>
            </table>
          </section>
          <section className="need-sp conteiner">
            <h2 className="services-title title-h2">Что от вас требуется?</h2>
            <ul>
              <li className="need-cerd-sp">Изолируйте домашних питомцев</li>
              <li className="need-cerd-sp">Предоставьте доступ к электрипитанию</li>
              <li className="need-cerd-sp">Отодвиньте мебель от стен</li>
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
