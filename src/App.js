function App() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "45fffb7e-0401-4be9-8aaa-623800990150");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name"/>
      <input type="email" name="email"/>
      <textarea name="message"></textarea>
      <button type="submit">Submit Form</button>
    </form>
  );
}

export default App;
