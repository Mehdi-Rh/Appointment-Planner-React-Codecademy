import React from "react";
import { useState, useEffect } from "react/cjs/react.development";
import {TileList} from '../../components/tileList/TileList'
import {ContactForm} from "../../components/contactForm/ContactForm"




export const ContactsPage = (props) => {
  const {contactList, addContact} = props
  /*
  Define state variables for 
  contact info and duplicate check
  */
  // const [contactInfo, setContactInfo] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    const nameInput = e.target.name.value;
    const phoneInput = e.target.phone.value;
    const emailInput = e.target.email.value;
    
    const names = []
    // setContactInfo(    {
    //   name: nameInput,
    //   phone: phoneInput,
    //   email: emailInput
    // });

    const contactInfo = {
        name: nameInput,
        phone: phoneInput,
        email: emailInput
      }

    contactList.map((item) => names.push(item.name))

    if ( names.includes(nameInput)) {

      alert('this name already exists please choose another name')
    } else if (!!nameInput) {
    addContact(contactInfo);
    e.target.name.value = e.target.phone.value = e.target.email.value = ''
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  // const contactList = props.contactList
  // useEffect(() => {
  //   handleSubmit()
  // },[contactInfo])


  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
        handleSubmit={handleSubmit}

        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList list={contactList}/>
      </section>
    </div>
  );
};
