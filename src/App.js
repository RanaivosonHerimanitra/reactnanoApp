import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class ContactList extends React.Component {
    render () {
        const people = [
            {name:'michael'},
            {name:'rayan'},
            {name:'joseph'}
        ]
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
           <ContactList />
        </div>
        );
    }
}

export default App;