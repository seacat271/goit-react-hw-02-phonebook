import { Component } from 'react';
import { nanoid } from 'nanoid'
import ContactList from './ContactList/ContactList';
import Form from './Form/Form';
import Section from './Section/Section';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  submitHandler = data => {

    if (this.state.contacts.some(({name, number}) => (
      name === data.name || number === data.number
    ))) {
  
        alert("Hello")
    return }
    
    data.id = nanoid();
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, data]
    }))
  }



  deleteContact = contactId => {
      this.setState(prevState => ({
        contacts: prevState.contacts.filter(contact => contact.id !== contactId)
     
      }))
  } 

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <Section title="Phonebook">
          <Form 
          onSubmit={this.submitHandler}/>
        </Section>
        <Section title="Contacts">
          <ContactList 
          contacts={contacts}
          onHandleDelete = {this.deleteContact} />
        </Section>
        
      </div>
    );
  }
}
