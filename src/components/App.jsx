import React from "react";
import { nanoid } from 'nanoid';
import { ContactList } from "./contactList/ContactList";
import { Filter } from "./filter/Filter";
import { ContactForm } from "./contactForm/ContactForm";

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleInputChange = e => {
    // console.log(e)
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.addNewContact(this.state);
    // this.reset();
  };

  reset = () => {
    this.setState({
      contacts: [],
      name: '',
    });
  };

  onChangeFilter = ({ currentTarget: { value } }) => {
    this.setState({ filter: value });
  };

  addNewContact = data => {
    const newContact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };
  if (
      this.state.contacts.some(
        contact =>
          contact.name.toLowerCase().trim() ===
          newContact.name.toLowerCase().trim()
      )
    ) {
      alert(`Contact ${newContact.name} is already exists!`);
      return;
    }
    else{this.setState(prev => ({
      contacts: [...prev.contacts, newContact],
    }))}
    ;
  };

  getFiltered = () => {
    const Normalize = this.state.filter;
    const Contacts = this.state.contacts;
    const Normalized = Normalize.toLowerCase();
    return Contacts.filter(contact =>
      contact.name.toLowerCase().includes(Normalized)
    );
  };

  deleteContact = contactId => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(({id})=>id !==contactId)
    })) 
  }

  render() {
    const filter = this.state.filter
    const filteredContacts = this.getFiltered();
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addNewContact={this.addNewContact} />

        <h2>Contacts</h2>
        <Filter filter={filter} onChange={this.onChangeFilter} />
        <ContactList contacts={filteredContacts} deleteContact={this.deleteContact} />
      </>
    );
  }
}

export default App