import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input name="name" type="text" required/>

      <label>Phone</label>

      <input /*pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}" */ name="phone" type="text" required/>
      <label>Email</label>
      <input name="email" type="text" required/>
      <input  type="submit" value="Submit" />
  

    </form>
  );
};
