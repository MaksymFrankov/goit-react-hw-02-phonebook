import React, {Component} from "react";

class ContactList extends Component {
    state = { 
        contacts: this.props.contacts,
     }
    
    render () {
    return (
    <ul>
    {this.props.contacts
    .filter ((contact) => {
        return this.props.filter.toLowerCase() === ''
        ? contact
        : contact.name.toLowerCase().includes(this.props.filter)
        })
    .map((person) => (
        <li key={person.id}>{person.name}  {person.number}</li>
    ))}
    </ul>
    )
    }
}

export default ContactList;



