const ContactList = ({contacts, onHandleDelete}) => {
    return (
    <ul>
        {contacts.map(({name, id, number}) => (
            
        <li key = {id}>{name}:  {number}<button onClick={() => onHandleDelete(id)}>Delete</button></li>
        
        ))}
    </ul>)
}
export default ContactList;