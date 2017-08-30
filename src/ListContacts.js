import React , {Component} from 'react';
//map over contact in each contacts array obj
/*class ListContacts extends Component {
    render() {
        return <ol className="contact-list">
            
                  {this.props.contacts.map((contact)=>
                    <li key={contact.id} className="contact-list-item">
                        
                        <div className="contact-avatar" style={{
                            backgroundImage: `url(${contact.avatarURL})`}}/>
                            <div className="contact-details">
                               <p>{contact.name}</p>
                               <p>{contact.email}</p>
                            </div>
                            <button className="contact-remove">
                                Remove
                            </button>
                    </li>
                   
                  )}
               </ol>
    }
}**/
/* using stateless functionnal component to achieve same output**/
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
                            <button className="contact-remove">
                                Remove
                            </button>
                    </li>
                   
                  )}
               </ol>)

     
}
export default ListContacts
