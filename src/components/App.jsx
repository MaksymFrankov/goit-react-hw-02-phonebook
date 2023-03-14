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
      const existingNames = this.state.contacts.map((cur) => cur.name.toLowerCase());
  
      if (!existingNames.includes(data.name.toLowerCase())) {
        const unique_id = uuid();
        this.setState({
          contacts: [...this.state.contacts, { id: unique_id, name: data.name, number: data.number }],
        });
        
      } else {
        alert("This name already exists!");
      }
    

  }

  handleFilter = input => {
    this.setState({ filter: input });
  }

  filterContacts = contacts => {
    let filtredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter),
    );
    return filtredContacts;
  };

  handleDel = name => {
    const filteredContacts = this.state.contacts.filter(contact => contact.name !== name);
    this.setState({ contacts: filteredContacts });
  }

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contact List</h2>
        <Filter onFilter={this.handleFilter} />
        <ContactList 
        contacts={this.filterContacts(this.state.contacts)}
        onDel={this.handleDel} />
      </div>
    )
  }
};
