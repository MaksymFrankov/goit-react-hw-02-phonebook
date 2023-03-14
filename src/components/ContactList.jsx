import React, { Component } from "react";

class ContactList extends Component {
  render() {
    return (
      <ul>
        {this.props.contacts
          .map((person) => (
            <li key={person.id}>
              {person.name} {person.number}
              <button onClick={() => this.props.onDel(person.name)}>del</button>
            </li>
          ))}
      </ul>
    );
  }
}

export default ContactList;