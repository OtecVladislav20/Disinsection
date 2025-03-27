import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { THandleCloseForm } from '../../const';


export default function Reviews({handlerCloseForm}: THandleCloseForm) {
  return (
    <section className="reviews conteiner">
      <div className='flex reviews-title-wrapper'>
        <h2 className="reviews-title title-h2 mr-20">Отзывы</h2>
        <iframe width="150" height="50" frameBorder="0" src="https://yandex.ru/sprav/widget/rating-badge/85586176333?type=rating"></iframe>
      </div>
      <div className="flex review-btn-wrapper">
        <p className="review-p">
          За более 10 лет работы в сфере клининга мы смогли заслужить репутацию
          надежного партнера для тысячи клиентов, подтвержденную высоким
          качеством предоставляемых услуг и профессионализмом нашего персонала.
        </p>
        <button className="review-btn" onClick={handlerCloseForm}>Оставить отзывы</button>
      </div>
      <Splide
        options={ {
          arrows: false,
          perPage: 2,
          type: 'loop',
          gap   : '50px',
          breakpoints: {
            900: {
              perPage: 1,
            }
          }
        } }
      >
        <SplideSlide>
          <div className="review">
            <div className="flex review-title-wrapper">
              <div>
                <p className="review-name">Павел</p>
                <p className="review-service">Осушение после затопа</p>
              </div>
              <div>
                <img
                  src="../img/Star.svg"
                  alt=""
                  className="star"
                />
                <img
                  src="../img/Star.svg"
                  alt=""
                  className="star"
                />
                <img
                  src="../img/Star.svg"
                  alt=""
                  className="star"
                />
                <img
                  src="../img/Star.svg"
                  alt=""
                  className="star"
                />
                <img
                  src="../img/Star.svg"
                  alt=""
                  className="star"
                />
              </div>
            </div>
            <p className="review-text">
              Выражаю огромную благодарность профессионалам своего дела. После серьëзного потопа убрали воду под стяжкой, просушили саму стяжку, убрали грибок по периметру низа стен, а так же устранили запах сырости и запах пожилых людей, ребята меня приятно удивили.
            </p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="review">
            <div className="flex review-title-wrapper">
              <div>
                <p className="review-name">Николай</p>
                <p className="review-service">Осушение после затопа</p>
              </div>
              <div>
                <img
                  src="../img/Star.svg"
                  alt=""
                  className="star"
                />
                <img
                  src="../img/Star.svg"
                  alt=""
                  className="star"
                />
                <img
                  src="../img/Star.svg"
                  alt=""
                  className="star"
                />
                <img
                  src="../img/Star.svg"
                  alt=""
                  className="star"
                />
                <img
                  src="../img/Star.svg"
                  alt=""
                  className="star"
                />
              </div>
            </div>
            <p className="review-text">
              Компания приехала оперативно, несмотря на позднее время суток.
              Специалисты сразу провели замеры влажности стен и пола, определили степень повреждений и предложили план действий.
              Было приятно, что они сразу назвали точную стоимость работ и сроки их выполнения.
            </p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="review">
            <div className="flex review-title-wrapper">
              <div>
                <p className="review-name">Ольга</p>
                <p className="review-service">Уничтожение тараканов</p>
              </div>
              <div>
                <img
                  src="../img/Star.svg"
                  alt=""
                  className="star"
                />
                <img
                  src="../img/Star.svg"
                  alt=""
                  className="star"
                />
                <img
                  src="../img/Star.svg"
                  alt=""
                  className="star"
                />
                <img
                  src="../img/Star.svg"
                  alt=""
                  className="star"
                />
              </div>
            </div>
            <p className="review-text">
              Процесс обработки занял около часа, запах был не сильным и быстро выветрился.
              Результат порадовал. Уже через несколько часов тараканы исчезли.
              Особенно порадовала профессиональность специалиста и то, что он дал четкие рекомендации по предотвращению повторного появления вредителей.
            </p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="review">
            <div className="flex review-title-wrapper">
              <div>
                <p className="review-name">Анастасия</p>
                <p className="review-service">Уничтожение клопов</p>
              </div>
              <div>
                <img
                  src="../img/Star.svg"
                  alt=""
                  className="star"
                />
                <img
                  src="../img/Star.svg"
                  alt=""
                  className="star"
                />
                <img
                  src="../img/Star.svg"
                  alt=""
                  className="star"
                />
                <img
                  src="../img/Star.svg"
                  alt=""
                  className="star"
                />
                <img
                  src="../img/Star.svg"
                  alt=""
                  className="star"
                />
              </div>
            </div>
            <p className="review-text">
              Компания приехала в тот же день, специалист провел тщательную диагностику и обработку всех помещений.
              Работа выполнена качественно, запах после обработки был минимальным. Через две недели никаких признаков клопов не наблюдается.
            </p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="review">
            <div className="flex review-title-wrapper">
              <div>
                <p className="review-name">Владислав</p>
                <p className="review-service">Дезодорация помещения</p>
              </div>
              <div>
                <img
                  src="../img/Star.svg"
                  alt=""
                  className="star"
                />
                <img
                  src="../img/Star.svg"
                  alt=""
                  className="star"
                />
                <img
                  src="../img/Star.svg"
                  alt=""
                  className="star"
                />
                <img
                  src="../img/Star.svg"
                  alt=""
                  className="star"
                />
                <img
                  src="../img/Star.svg"
                  alt=""
                  className="star"
                />
              </div>
            </div>
            <p className="review-text">
              Пререхал в квартиру после курильщика. Абсолютно все пропахло дымом сигарет.
              Вначале пытался избавиться от запаха сам, но должного результата не добился.
              Решил обратиться в ЭкоПрофКлин. Мастер прибыл на следующий день и за 2 часа выполнил всю работу.
              От запаха удалось полностью избавиться!
            </p>
          </div>
        </SplideSlide>
      </Splide>
    </section>
  );
}
