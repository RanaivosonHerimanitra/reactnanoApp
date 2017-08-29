import React, { Component } from 'react';
import ListContacts from './ListContacts';
import logo from './logo.svg';
import './App.css';
const contacts = [
    {
      "id": "ryan",
      "name": "Ryan Florence",
      "email": "ryan@reacttraining.com",
      "avatarURL": "http://localhost:5001/ryan.jpg"
    },
    {
      "id": "michael",
      "name": "Michael Jackson",
      "email": "michael@reacttraining.com",
      "avatarURL": "http://localhost:5001/michael.jpg"
    },
    {
      "id": "tyler",
      "name": "Tyler McGinnis",
      "email": "tyler@reacttraining.com",
      "avatarURL": "http://localhost:5001/tyler.jpg"
    }]
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
    render() {
        return ( 
        <div className = "App" >
        
           <ListContacts contacts={contacts}/>
        </div>
        );
    }
}

export default App;