import {Component} from "react";


export class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

  render () {
    return <div>
<h1>Phonebook</h1>
<form>
  <label>
  <input
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
  />
  </label>
  <button type="submit">Add contact</button>
</form>
<h2>Contacts</h2>
<ul>
  <li>Rose</li>
  <li>Rose</li>
  <li>Rose</li>
</ul>
    </div>
  }
}








// export const App = () => {
//   return (
//     <div>
// <h1>Phonebook</h1>
// <form>
//   <label>
//     <input></input>
//   </label>
//   <button type="submit">Add contact</button>
// </form>
// <h2>Contacts</h2>
// <ul>
//   <li>Rose</li>
//   <li>Rose</li>
//   <li>Rose</li>
// </ul>
//     </div>
//   );
// };
