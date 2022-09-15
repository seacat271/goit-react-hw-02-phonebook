import {Component} from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Label = styled.label`
display: block;
margin-bottom: 15px;
font-weight: 700;
color: #c08e51;
`
const Input = styled.input`
display: block;
padding: 5px;
`
const ButtonAdd = styled.button`
margin: 0;
padding: 5px;
border-radius: 4px;
background-color: #c08e51;
color: white;
border: 1px solid transparent;
transition: color 300ms linear, background-color 300ms linear, border 300ms linear;
&:hover {
    background-color: bisque;
    color: #c08e51;
    border: 1px solid #c08e51;
}  
`;

const FormInput = styled.form`
margin-bottom: 20px;
`
class Form extends Component {
state ={
    name: "",
    number: "",
}

handleChange = event => {
    const {name, value} = event.currentTarget;
    this.setState({[name]: value})
}
handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset()
}

reset = () => {
    this.setState({name: "", number: "",})
}
    render () {
return (
            <FormInput onSubmit={this.handleSubmit}>
            <Label>Name
            <Input
                value={this.state.name}
                onChange ={this.handleChange}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            </Label>
            <Label>Number
            <Input
                value={this.state.number}
                onChange ={this.handleChange}
               type="tel"
               name="number"
               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
               required
            />
            </Label>
            <ButtonAdd type="submit">Add contact</ButtonAdd>
            </FormInput>
        )
    }
}

export {Form, ButtonAdd, Label, Input}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}