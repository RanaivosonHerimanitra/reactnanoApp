import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class ContactList extends React.Component {
    render () {
        //hard coded contact list
        /*const people = [
            {name:'michael'},
            {name:'rayan'},
            {name:'joseph'}
        ]*/
        //here is another way to define it:
        const people = this.props.contacts
        return <ol>
            { people.map(person=> (
               <li key={person.name}> {person.name}</li>
            ))}</ol>
    }
}
class App extends Component {
    render() {
        return ( 
        <div className = "App" >
           <ContactList contacts={[
               {name:'michael'},
               {name:'rayan'},
               {name:'joseph'}]} />
           <ContactList contacts={[
               {name:'jean michael'},
               {name:'peter'},
               {name:'parker'}]} />
        </div>
        );
    }
}

export default App;