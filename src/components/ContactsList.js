import { useState } from "react"

import { Link, useNavigate} from "react-router-dom"

function ContactsList(props) {
 
  const navigate = useNavigate()
  //"contacts" must be passed as prop to this component
  const { contacts, setContacts } = props
  
  const handleDelete = (id) => {
    console.log("contact id", id)

    fetch(`http://localhost:4000/contacts/` + id, 
      { method: "DELETE", })
        .then(res => res.json())
        .then(()=> {
          fetch(`http://localhost:4000/contacts/`)
            .then(res => res.json())
            .then((data) => {
              // take data, which is the DELETED CONTACT
              // update contacts array to equal `data`
              // this means that your contacts array is 
              // replaced by a JS object corresponding 
              // to the DELETED contact
              setContacts(data)})
            navigate("/");
        }) 
  };

  return (
    <>
      <header>
        <h2>Contacts</h2>

      </header>
      <ul className="contacts-list">
         {contacts.map((contact, index) => {
          const { firstName, lastName } = contact
          return (
            <li className="contact" key={index}>
              <p>
                {firstName} {lastName} 
              </p>
              <p>
                { /** TODO: Make a Link here to view contact */}
                <Link to={`/contacts/${contact.id}`} state={{contact}}>
                  View
                </Link>
                <br />
                <Link to={`/contact/${contact.id}/edit`} state={{contact}}>
                  Edit
                </Link>
                <br />
                <span onClick={(e)=>handleDelete(contact.id)}>
                  Delete
                </span>

              </p>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ContactsList
