export const YandexMapWidget: React.FC = () => (
  <div style={{
    width: '560px',
    height: '500px',
    overflow: 'hidden',
    position: 'relative'
  }}
  >
    <iframe
      style={{
        width: '100%',
        height: '100%',
        border: '1px solid #e6e6e6',
        borderRadius: '20px',
        boxSizing: 'border-box'
      }}
      src="https://yandex.ru/maps-reviews-widget/85586176333?comments"
      title="Yandex Maps Reviews"
    />
    <a
      href="https://yandex.ru/maps/org/ekoprofklin/85586176333/"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        boxSizing: 'border-box',
        textDecoration: 'none',
        color: '#b3b3b3',
        fontSize: '10px',
        fontFamily: 'YS Text, sans-serif',
        padding: '0 20px',
        position: 'absolute',
        bottom: '8px',
        width: '100%',
        textAlign: 'center',
        left: '0',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: 'block',
        maxHeight: '14px',
        whiteSpace: 'nowrap',
      }}
    >
        ЭкоПрофКлин на карте — Яндекс Карты
    </a>
  </div>
);

export default function Reviews() {
  return (
    <section className="reviews conteiner">
      <div className='flex reviews-title-wrapper'>
        <h2 className="reviews-title title-h2 mr-20">Отзывы</h2>
      </div>
      <div className="flex review-btn-wrapper">
        <p className="review-p">
          За более 10 лет работы в сфере клининга мы смогли заслужить репутацию
          надежного партнера для тысячи клиентов, подтвержденную высоким
          качеством предоставляемых услуг и профессионализмом нашего персонала.
        </p>
      </div>
      <div className='flex review-yandex-wrapper'>
        <img src="../img/review-photo.png" alt="Дезинсектор" className='review-photo'/>
        <img src="../img/review-photo2.png" alt="Клиннер" className='review-photo review-photo-close-first'/>
        <YandexMapWidget/>
      </div>
    </section>
  );
}
