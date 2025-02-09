import { useEffect, useState } from 'react';

export default function FormService(): JSX.Element {
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

  return (
    <>
      <div className={`sended-window ${isSendedForm ? 'display-block' : ''}`}>Форма успешно отправлена!</div>
      <div className="form1">
        <form action="" className="services-form" onSubmit={handlerSubmit}>
          <h3 className="services-form-title input-title1">
            Оставить заявку
          </h3>
          <input
            type="text"
            name="name"
            placeholder="Как вас зовут?"
            className="form-input input1"
          />
          <input
            type="phone"
            name="phone"
            placeholder="Контактный номер"
            className="form-input input2"
          />
          <textarea
            name="message"
            placeholder="Ваше сообщение"
            className="form-textarea input3"
            defaultValue=""
          />
          <button type="submit" className="form-btn input-btn" onClick={handlerSendedForm}>
            Отправить
          </button>
        </form>
      </div>
    </>
  );
}
