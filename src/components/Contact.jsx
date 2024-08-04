import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const messaPassed = (e) => {
    e.preventDefault();
    alert(`Name: ${name} \nEmail: ${email}`);
    setEmail("");
    setName("");
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Example123@gg.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={messaPassed}>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
