import React, {Component} from "react";

class ContactForm extends Component {
    state = { 
        name: '',
        number: ''
     }
    
     handleChange = e => {
        const { name, value } = e.currentTarget;
      
        this.setState({
          [name]: value,
        })
      }

      handleSubmit = e => {
        e.preventDefault();
        console.log();
        const existingNames = this.props.contacts.map(cur => cur.name.toLowerCase());
        if (!existingNames.includes(this.state.name.toLowerCase())) {
          this.props.onSubmit(this.state);
          this.setState(
            {
              name: '',
              number: ''
            }
          )
        }
        else { alert (1)}
      }



    render () {
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
          value={this.state.number}
          onChange={this.handleChange}
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          required
        />
    </label>
    <button type="submit">Add contact</button>
    </form>
    )
    }
}

export default ContactForm;