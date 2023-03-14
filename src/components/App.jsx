import React, { Component } from "react";
import { v4 as uuid } from 'uuid';
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  }

  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    })
  }

  formSubmitHandler = data => {
    const existingContact = this.state.contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
  
    if (existingContact) {
      alert("This name already exists!");
      return 
    } else {
     
            const unique_id = uuid();
      this.setState(prevState => ({
        contacts: [...prevState.contacts, { id: unique_id, name: data.name, number: data.number }],
      }));
    }
  }

  handleFilter = input => {
    this.setState({ filter: input });
  }

  filterContacts = () => {
   
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter),
    );
  };

handleDel = name => {
  this.setState(prevState => ({
     contacts: prevState.contacts.filter(contact => contact.name !== name)
  }));
}

  render() {
    const filteredContacts = this.filterContacts();
    
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contact List</h2>
        <Filter onFilter={this.handleFilter} />
        <ContactList 
        contacts={filteredContacts}
        onDel={this.handleDel} />
      </div>
    )
  }
};
