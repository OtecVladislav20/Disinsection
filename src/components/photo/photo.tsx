import { useState } from 'react';

export default function Photo() {
  const [activeTab, setActiveTab] = useState('1');

  const handlerTabs = (path: string) => {
    setActiveTab(path);
  };

  return (
    <section className="photo conteiner">
      <h2 className="photo-title title-h2">Часть наших работ</h2>
      <div className="flex photo-info">
        <div className={`tabs-item ${activeTab === '1' ? 'tabs-item--active' : ''}`} data-target="one">
          <img
            src="../markup/img/photo-image1.png"
            alt="photo"
            className="pfoto"
          />
        </div>
        <div className={`tabs-item ${activeTab === '2' ? 'tabs-item--active' : ''}`} data-target="two">
          <img
            src="../markup/img/photo-image1.png"
            alt="photo"
            className="pfoto"
          />
        </div>
        <div className={`tabs-item ${activeTab === '3' ? 'tabs-item--active' : ''}`} data-target="three">
          <img
            src="../markup/img/photo-image1.png"
            alt="photo"
            className="pfoto"
          />
        </div>

        <div className="flex photo-info-wrapper">
          <div className={`tabs-item ${activeTab === '1' ? 'tabs-item--active' : ''}`} data-target="one">
            <h3 className="photo-info-title">Осушение</h3>
            <p className="photo-p">
              Дезинфекция - важнейший процесс, обеспечивающий чистоту и
              безопасность окружающей среды. Она помогает уничтожать патогенные
              микроорганизмы, такие как вирусы, бактерии и грибки. Это
              предотвращает распространение инфекционных заболеваний среди людей
            </p>
          </div>
          <div className={`tabs-item ${activeTab === '2' ? 'tabs-item--active' : ''}`} data-target="two">
            <h3 className="photo-info-title">Уборка помещений</h3>
            <p className="photo-p">
              Уборка помещений - важнейший процесс, обеспечивающий чистоту и
              безопасность окружающей среды. Она помогает уничтожать патогенные
              микроорганизмы, такие как вирусы, бактерии и грибки. Это
              предотвращает распространение инфекционных заболеваний среди людей
            </p>
          </div>
          <div className={`tabs-item ${activeTab === '3' ? 'tabs-item--active' : ''}`} data-target="three">
            <h3 className="photo-info-title">Демонтажные работы</h3>
            <p className="photo-p">
              Демонтажные работы - важнейший процесс, обеспечивающий чистоту и
              безопасность окружающей среды. Она помогает уничтожать патогенные
              микроорганизмы, такие как вирусы, бактерии и грибки. Это
              предотвращает распространение инфекционных заболеваний среди людей
            </p>
          </div>

          <div className="flex pfoto-wrapper">
            <button className={`pfoto-btn btn__work ${activeTab === '1' ? 'btn__work--active' : ''}`} data-path="one" onClick={() => handlerTabs('1')}>
              <img
                src="../markup/img/photo-image-button1.png"
                alt="button"
                className="pfoto-img"
              />
            </button>
            <button className={`pfoto-btn btn__work ${activeTab === '2' ? 'btn__work--active' : ''}`} data-path="two" onClick={() => handlerTabs('2')}>
              <img
                src="../markup/img/photo-image-button1.png"
                alt="button"
                className="pfoto-img"
              />
            </button>
            <button className={`pfoto-btn btn__work ${activeTab === '3' ? 'btn__work--active' : ''}`} data-path="three" onClick={() => handlerTabs('3')}>
              <img
                src="../markup/img/photo-image-button1.png"
                alt="button"
                className="pfoto-img"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
