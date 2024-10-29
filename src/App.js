import { useState } from "react";
import "./App.css";

function App() {
  const [email, setemail] = useState();
  const [age, setage] = useState();
  const [name, setname] = useState();
  const [phone, setPhone] = useState();
  const handleSubmit = () => {
    const submited = {
      email: email,
      age: age,
      name: name,
      phone: phone,
    };
    console.log(submited);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setemail(e.target.value)}
      />
      <input
        type="number"
        placeholder="age"
        value={age}
        onChange={(e) => setage(e.target.value)}
      />
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <input
        type="text"
        placeholder="email"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <div>
        <h2>{email}</h2>
        <h2>{age}</h2>
        <h2>{name}</h2>
        <h2>{phone}</h2>
      </div>
      <button onClick={handleSubmit()}>submit</button>
    </div>
  );
}

export default App;
