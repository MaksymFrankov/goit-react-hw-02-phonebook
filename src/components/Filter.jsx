import React, {Component} from "react";

class Filter extends Component {
    state = { 
       filter: ''
     }
    
     handleChange = e => {
        const { name, value } = e.currentTarget;
      
        this.setState({
          [name]: value,
        })
        this.props.onFilter(value);
      }

    render () {
    return (
     <label htmlFor="filter">
        Filter
        <input
            type="text"
            name="filter"
            value={this.state.filter}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" 
            title="filter may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
     </label>
    )
    }
}

export default Filter;
