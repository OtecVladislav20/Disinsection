export default function Adventages() {
  return (
    <section className="advantages conteiner">
      <h2 className="advantages-title title-h2">Почему выбирают нас</h2>
      <div className="flex advantages-blocks">
        <div className="flex advantages-block">
          <img
            src="../img/advantages1.svg"
            alt=""
            className="advantages-image"
          />
          <div>
            <h3 className="advantages-block-title">Уверенность</h3>
            <p className="advantages-block-text">
              Более 10 лет работы <br /> в сфере клининга
            </p>
          </div>
        </div>
        <div className="flex advantages-block">
          <img
            src="../img/advantages2.svg"
            alt=""
            className="advantages-image"
          />
          <div>
            <h3 className="advantages-block-title green">Технологичность</h3>
            <p className="advantages-block-text">
              Работаем с современным профессиональным оборудованием
            </p>
          </div>
        </div>
        <div className="flex advantages-block">
          <img
            src="../img/advantages3.svg"
            alt=""
            className="advantages-image"
          />
          <div>
            <h3 className="advantages-block-title">Безопасность</h3>
            <p className="advantages-block-text">
              Используем только сертифицированные препараты
            </p>
          </div>
        </div>
        <div className="flex advantages-block">
          <img
            src="../img/advantages4.svg"
            alt=""
            className="advantages-image"
          />
          <div>
            <h3 className="advantages-block-title green">Пунктуальность</h3>
            <p className="advantages-block-text">
              Мы ценим ваше время, поэтому заканчиваем работу в срок
            </p>
          </div>
        </div>
        <div className="flex advantages-block">
          <img
            src="../img/advantages5.svg"
            alt=""
            className="advantages-image"
          />
          <div>
            <h3 className="advantages-block-title">Комфорт</h3>
            <p className="advantages-block-text">
              Вам ничего не нужно предоставлять, кроме доступа к розеткам и воде
            </p>
          </div>
        </div>
        <div className="flex advantages-block">
          <img
            src="../img/advantages6.svg"
            alt=""
            className="advantages-image"
          />
          <div>
            <h3 className="advantages-block-title green">Качество</h3>
            <p className="advantages-block-text">
              Все сотрудники имеют стаж более 3 лет
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
