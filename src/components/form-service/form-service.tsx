import { useEffect, useState } from 'react';
import { EMAILTOKEN } from '../../const';

export default function FormService(): JSX.Element {
  const handlerSend = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append('access_key', EMAILTOKEN);
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
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


  const [phoneValue, setPhoneValue] = useState('');

  const isDisabled = phoneValue.trim().length > 0;

  const handlerChangePhone = (e) => {
    setPhoneValue(e.target.value);
  };

  return (
    <>
      <div className={`sended-window ${isSendedForm ? 'display-block' : ''}`}>Форма успешно отправлена!</div>
      <div className="form1">
        <form className="services-form" onSubmit={handlerSend}>
          <h3 className="services-form-title input-title1">
            Оставить заявку
          </h3>
          <input
            type="text"
            name="name"
            placeholder="Как вас зовут?"
            className="form-input input1"
            required
          />
          <input
            type="phone"
            name="phone"
            placeholder="Контактный номер"
            className="form-input input2"
            required
            value={phoneValue} onChange={handlerChangePhone}
          />
          <textarea
            name="message"
            placeholder="Ваше сообщение"
            className="form-textarea input3"
            defaultValue=""
          />
          <button type="submit" className="form-btn input-btn" disabled={!isDisabled}>
            Отправить
          </button>
        </form>
      </div>
    </>
  );
}
