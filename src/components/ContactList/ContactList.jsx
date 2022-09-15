import styled from "styled-components";
import PropTypes from 'prop-types';
import {ButtonAdd} from "../Form/Form"

const ItemList = styled.ul`
padding-left: 0;
`
const Item = styled.li`
list-style: none;
font-weight: 700;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 10px;

`
const ItemContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;`

const NameStyle = styled.span`
font-weight: 400;
margin-right: 20px;
`
const ButtonDelete = styled(ButtonAdd)`
padding: 5px 15px;
`


const ContactList = ({contacts, onHandleDelete}) => {
    return (
    <ItemList>
        {contacts.map(({name, id, number}) => (
            
        <Item key = {id}><ItemContainer>{name}: <NameStyle>{number}</NameStyle></ItemContainer><ButtonDelete onClick={() => onHandleDelete(id)}>Delete</ButtonDelete></Item>
        
        ))}
    </ItemList>)
}
export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape(
            PropTypes.string.isRequired
            ).isRequired
            ).isRequired,
    onHandleDelete: PropTypes.func.isRequired,
  }