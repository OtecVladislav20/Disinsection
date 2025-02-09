import { useEffect, useState } from 'react';


export default function FormOpen(): JSX.Element {
  const handlerSubmit = async (event) => {
    event.preventDefault();
    event.target.reset();

    const formData = new FormData(event.target);
    formData.append('access_key', '45fffb7e-0401-4be9-8aaa-623800990150');
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: json
    }).then((res) => res.json());
    if (res.success) {
      console.log('Success', res);
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


  const [isActiveForm, setActiveForm] = useState(false);
  const handlerCloseForm = () => {
    setActiveForm(!isActiveForm);
  };


  return (
    <section className={`open-form ${isActiveForm ? '' : 'display-none'}`}>
      <div className={`sended-window ${isSendedForm ? 'display-block' : ''}`}>Форма успешно отправлена!</div>
      <form action="" className="services-form-def open-form-element" onSubmit={handlerSubmit}>
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
        <button type="submit" className="form-btn" onClick={handlerSendedForm}>
          Отправить
        </button>
        <button className='close-form' onClick={handlerCloseForm}>
          <img src="../markup/img/close-btn.svg" alt="" className='close-btn-form'/>
        </button>
      </form>
    </section>
  );
}
