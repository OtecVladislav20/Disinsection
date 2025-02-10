import { useEffect, useState } from 'react';
import { EMAILTOKEN, TCloseForm } from '../../const';


export default function FormOpen({handlerCloseForm, isActiveForm}: TCloseForm): JSX.Element {
  const handlerSend = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append('access_key', EMAILTOKEN);
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: formData
    });
    const data = await response.json();
    if (data.success) {
      event.target.reset();
      handlerSendedForm();
    } else {
      console.log('Error', data);
    }
  };


  const [isSendedForm, setSendedForm] = useState(false);

  const handlerSendedForm = () => {
    setSendedForm(true);
  };
  useEffect(() => {
    const timer: NodeJS.Timeout = setTimeout(() => {
      setSendedForm(false);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [isSendedForm]);

  return (
    <section className={`open-form ${isActiveForm ? 'flex' : ''}`}>
      <div className={`sended-window ${isSendedForm ? 'display-block' : ''}`}>Форма успешно отправлена!</div>
      <form className="services-form-def open-form-element" onSubmit={handlerSend}>
        <h3 className="services-form-title-def">Оставить заявку</h3>
        <input
          type="text"
          name="name"
          placeholder="Как вас зовут?"
          className="form-input-def"
        />
        <input
          type="phone"
          name="phone"
          placeholder="Контактный номер"
          className="form-input-def"
        />
        <textarea
          name="message"
          placeholder="Ваше сообщение"
          className="form-textarea-def"
          defaultValue=""
        />
        <button type="submit" className="form-btn">
          Отправить
        </button>
        <button className='close-form' onClick={handlerCloseForm}>
          <img src="../markup/img/close-btn.svg" alt="" className='close-btn-form'/>
        </button>
      </form>
    </section>
  );
}
