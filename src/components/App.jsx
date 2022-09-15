import { Component } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid'

import ContactList from './ContactList/ContactList';
import {Form} from './Form/Form';
import Section from './Section/Section';
import Filter from "./Filter/Filter"

const ContainerGlobal = styled.div`
width: 400px;
margin: 20px auto;
background-color: white;
padding: 20px;
border-radius: 5px;
box-shadow: 0 0 4px 4px #c08e51;
`

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  
  submitHandler = data => {
    const {name, number} = data;
    const {contacts} = this.state
    if (contacts.some(({name}) => (
      name.toLowerCase() === data.name.toLowerCase()

    ))) { alert(`${name} is already in contacts`);
    return };
    if (this.state.contacts.some(({number}) => (
      number === data.number
    ))) { alert(`${number} is already in contacts`)
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
      <ContainerGlobal>
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
        
      </ContainerGlobal>
    );
  }
}

