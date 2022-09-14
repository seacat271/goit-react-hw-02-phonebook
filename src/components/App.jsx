import { Component } from 'react';
import { nanoid } from 'nanoid'
import ContactList from './ContactList/ContactList';
import Form from './Form/Form';
import Section from './Section/Section';
import Filter from "./Filter/Filter"

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
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

  changeFilter = (event) => {
    this.setState({filter: event.currentTarget.value})

  }



  deleteContact = contactId => {
      this.setState(prevState => ({
        contacts: prevState.contacts.filter(contact => contact.id !== contactId)
     
      }))
  } 

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const filterNormalize = filter.toLowerCase();
    return contacts.filter((contact) => 
      contact.name.toLowerCase().includes(filterNormalize)
    )
  }



  render() {
    const {filter} = this.state;
   
    return (
      <div>
        <Section title="Phonebook">
          <Form 
          onSubmit={this.submitHandler}/>
        </Section>
        <Section title="Contacts">
         <Filter
         value = {filter}
         onChange={this.changeFilter}/>
          <ContactList 
          contacts={this.getVisibleContacts()}
          onHandleDelete = {this.deleteContact} />
        </Section>
        
      </div>
    );
  }
}
