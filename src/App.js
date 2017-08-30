import React, { Component } from 'react';
import CreateContact from './CreateContact'
import ListContacts from './ListContacts';
import logo from './logo.svg';
import './App.css';
import * as ContactsAPI from './utils/ContactsAPI'
//class ContactList extends React.Component {
    /*render () {
        //hard coded contact list
        /*const people = [
            {name:'michael'},
            {name:'rayan'},
            {name:'joseph'}
        ]*/
        //here is another way to define it:
        /*
        const people = this.props.contacts
        return <ol>
            { people.map(person=> (
               <li key={person.name}> {person.name}</li>
            ))}</ol>
            */
   // }
//}
//We pass contacts object array to ListContacts component!
class App extends Component {
    /* initially blank because data are fetched using special React function **/

    state = {
         contacts: []
    }
    componentDidMount () {
        ContactsAPI.getAll().then(
            (contacts)=>{this.setState({contacts})})
    }
    
    removeContact = (contact) => {
        this.setState( (state) =>({
            contacts: state.contacts.filter( (c)=>c.id!==contact.id)
        }))
        ContactsAPI.remove(contact)
    }
    render() {
        return ( 
        <div className = "App" >
           <ListContacts 
              onDeleteContact={this.removeContact}
              contacts={this.state.contacts}/>
        </div>
        );
    }
}

export default App;