import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by'
//map over contact in each contacts array obj
class ListContacts extends Component {
    /* spec type of obj passed into the component **/
    static PropTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired
    }
    state = {
        query:''
    }
    updateQuery =(query) => {
        this.setState({query:query.trim()})
    }
    clearQuery =() => {
        this.setState({query:''})
    }
    
    render() {
        /* object destructuring **/
        const {contacts,onDeleteContact} = this.props
        const {query}= this.state
        /* --------------- **/
        let showingContacts
        if (this.state.query)
            {
                const match = RegExp(escapeRegExp(query),'i')
                showingContacts = contacts.filter( 
                    (contact)=>match.test(contact.name) 
                 )
            } else {
                showingContacts=this.props.contacts
            }
            /* then sort alphabetically by name **/
            showingContacts.sort(sortBy('name'))
        return <div className="list-contacts">
                
                <div className="list-contacts-top">
                     <input onChange={(event)=>this.updateQuery(event.target.value)} 
                            value={this.state.query} 
                            className="search-contacts"
                             type="text" placeholder="search contact..."/>
                             <Link to="/create" onClick={this.props.onNavigate}
                                   className="add-contact">Add contact</Link>
                     
                </div>
                {showingContacts.length!==contacts.length && 
                (<div className="showing-contacts">
                    <span>Now showing contacts {showingContacts.length} of {contacts.length} </span>
                    <button onClick={this.clearQuery} >Show all</button>
                 </div>
                    )}
            <ol className="contact-list">
            
                  {showingContacts.map((contact)=>
                    <li key={contact.id} className="contact-list-item">
                        
                        <div className="contact-avatar" style={{
                            backgroundImage: `url(${contact.avatarURL})`}}/>
                            <div className="contact-details">
                               <p>{contact.name}</p>
                               <p>{contact.email}</p>
                            </div>
                            <button onClick={() => onDeleteContact(contact)} className="contact-remove">
                                Remove
                            </button>
                    </li>
                   
                  )}
               </ol>
            </div>
    }
}
/* using stateless functionnal component to achieve same output
function ListContacts (props) {
    
        return (<ol className="contact-list">
            
                  {props.contacts.map((contact)=>
                    <li key={contact.id} className="contact-list-item">
                        
                        <div className="contact-avatar" style={{
                            backgroundImage: `url(${contact.avatarURL})`}}/>
                            <div className="contact-details">
                               <p>{contact.name}</p>
                               <p>{contact.email}</p>
                            </div>
                            <button onClick={() => props.onDeleteContact(contact)} className="contact-remove">
                                Remove
                            </button>
                    </li>
                   
                  )}
               </ol>)

     
}**/

export default ListContacts
