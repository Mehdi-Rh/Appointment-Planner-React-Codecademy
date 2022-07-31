import { getDefaultNormalizer } from "@testing-library/dom";
import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [ contacts, setContacts] = useState([
    {
      name: "Mehdi",
      phone: "01111111",
      email: "aaaaaa@exemple.com",
    },
    {
      name: "Mehdi",
      phone: "0222222222",
      email: "bbbbbb@exemple.com",
    }
  ])

  const addContact = (newContact) => {
    setContacts((prev) => [...prev, newContact])
  }

  const [ appointments, setAppointment] = useState([
    {
      title: "Mehdi",
      contact: contacts[0],
      date: "dsfsdfsd@exemple.com",
      time: "time0"
    },
    {
      title: "Mehdi",
      contact: contacts[1],
      date: "dsfsdfsd@exemple.com",
      time: "time1"
    }
  ])

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */


  const addAppointment = () => {


  }

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage contactList={contacts} addContact={addContact}/>
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage appointmentList={appointments} addAppointment={addAppointment}/>
            
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
