// import { render } from "@testing-library/react";
import React from "react";
import { Component } from "react";
import { v4 as uuid } from 'uuid';

export class App extends Component {
state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: ''
}

handleChange = event => {

  const { name, value } = event.currentTarget;

  this.setState({
    [name]: value,
  })
}
hendleFilter = (e) => {
 
  console.log(e.target.value);
  let a = this.state.contacts;
  const filtredArr = a.filter(contact => 
    contact.name.toLowerCase().includes(e.target.value.toLowerCase()));

  this.setState({
    contacts: [...filtredArr]
  });
}
handleSubmit = e => {
  const unique_id = uuid();
  e.preventDefault();
  this.setState ({
    contacts: [...this.state.contacts, {id:unique_id, name: e.target.name.value, number: e.target.number.value}],
    name: '',
    number: ''
});
e.target.name.value = '';
e.target.number.value = '';
}
render() {
return (
  <form onSubmit={this.handleSubmit}>
    <label htmlFor="name">
      Name
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" 
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
      />
    </label>
    <label htmlFor="number">
      Number
    <input
      type="tel"
      name="number"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      required
    />
    </label>
    
    <label htmlFor="filter">
    Filter
      <input
        type="text"
        name="filter"
        onChange={this.hendleFilter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" 
        title="filter may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </label>
    <ul>
    {this.state.contacts.map((person) => (
        <li key={person.id}>{person.name}  {person.number}</li>
    ))}
    </ul>
      
    <button type="submit">Add contact</button>
    {/* {console.log(this.state.contacts)} */}
  </form>
  
)
}
};
