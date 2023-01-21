import { render } from "@testing-library/react";
import React from "react";
import { Component } from "react";

class app extends Component {
  state = {
   contacts: [],
   name: '',
   number: ''
  }
};

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
      <label>
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
      <button type="submit">Add contact</button>
    </form>
  )
}