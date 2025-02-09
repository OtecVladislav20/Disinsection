import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


export default function Reviews() {
  return (
    <section className="reviews conteiner">
      <h2 className="reviews-title title-h2">Отзывы</h2>
      <div className="flex review-btn-wrapper">
        <p className="review-p">
          За более 10 лет работы в сфере клининга мы смогли заслужить репутацию
          надежного партнера для тысяч клиентов, подтвержденную высоким
          качеством предоставляемых услуг и профессионализмом нашего персонала.
        </p>
        <button className="review-btn">Оставить отзывы</button>
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
                <p className="review-name">Владислав</p>
                <p className="review-service">Клининг помещения</p>
              </div>
              <div>
                <img
                  src="../markup/img/Star.svg"
                  alt=""
                  className="star"
                />
                <img
                  src="../markup/img/Star.svg"
                  alt=""
                  className="star"
                />
                <img
                  src="../markup/img/Star.svg"
                  alt=""
                  className="star"
                />
                <img
                  src="../markup/img/Star.svg"
                  alt=""
                  className="star"
                />
                <img
                  src="../markup/img/Star.svg"
                  alt=""
                  className="star"
                />
              </div>
            </div>
            <p className="review-text">
              Очень довольна клининговой компании ЭкоПрофКлин. Женщина
              справилась с уборкой быстро и качественно. Настоящий мастер
              своего дела.
            </p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="review">
            <div className="flex review-title-wrapper">
              <div>
                <p className="review-name">Владислав</p>
                <p className="review-service">Клининг помещения</p>
              </div>
              <div>
                <img
                  src="../markup/img/Star.svg"
                  alt=""
                  className="star"
                />
                <img
                  src="../markup/img/Star.svg"
                  alt=""
                  className="star"
                />
                <img
                  src="../markup/img/Star.svg"
                  alt=""
                  className="star"
                />
                <img
                  src="../markup/img/Star.svg"
                  alt=""
                  className="star"
                />
                <img
                  src="../markup/img/Star.svg"
                  alt=""
                  className="star"
                />
              </div>
            </div>
            <p className="review-text">
              Очень довольна клининговой компании ЭкоПрофКлин. Женщина
              справилась с уборкой быстро и качественно. Настоящий мастер
              своего дела.
            </p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="review">
            <div className="flex review-title-wrapper">
              <div>
                <p className="review-name">Владислав</p>
                <p className="review-service">Клининг помещения</p>
              </div>
              <div>
                <img
                  src="../markup/img/Star.svg"
                  alt=""
                  className="star"
                />
                <img
                  src="../markup/img/Star.svg"
                  alt=""
                  className="star"
                />
                <img
                  src="../markup/img/Star.svg"
                  alt=""
                  className="star"
                />
                <img
                  src="../markup/img/Star.svg"
                  alt=""
                  className="star"
                />
                <img
                  src="../markup/img/Star.svg"
                  alt=""
                  className="star"
                />
              </div>
            </div>
            <p className="review-text">
              Очень довольна клининговой компании ЭкоПрофКлин. Женщина
              справилась с уборкой быстро и качественно. Настоящий мастер
              своего дела.
            </p>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="review">
            <div className="flex review-title-wrapper">
              <div>
                <p className="review-name">Владислав</p>
                <p className="review-service">Клининг помещения</p>
              </div>
              <div>
                <img
                  src="../markup/img/Star.svg"
                  alt=""
                  className="star"
                />
                <img
                  src="../markup/img/Star.svg"
                  alt=""
                  className="star"
                />
                <img
                  src="../markup/img/Star.svg"
                  alt=""
                  className="star"
                />
                <img
                  src="../markup/img/Star.svg"
                  alt=""
                  className="star"
                />
                <img
                  src="../markup/img/Star.svg"
                  alt=""
                  className="star"
                />
              </div>
            </div>
            <p className="review-text">
              Очень довольна клининговой компании ЭкоПрофКлин. Женщина
              справилась с уборкой быстро и качественно. Настоящий мастер
              своего дела.
            </p>
          </div>
        </SplideSlide>
      </Splide>
    </section>
  );
}
