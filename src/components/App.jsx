// import { render } from "@testing-library/react";
import React from "react";
import { Component } from "react";

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
    [name]: value
  })
}

handleSubmit = e => {
e.preventDefault();
  
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
      
      <ul>
    {this.state.contacts.map((person) => (
        <li key={person.id}>{person.name}  {person.number}</li>
    ))}
    </ul>
      
      </label>
      <button type="submit">Add contact</button>
      {/* {console.log(this.state.contacts)} */}
    </form>
    
  )
}
};
