import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useLocation } from "react-router"

function ContactsView() {
  const [contact, setContact] = useState(false);
  const location = useLocation();
  const { id } = useParams();
  console.log("here is view component", id)
  console.log("contact", contact)

  //TODO: Get the contact to load from the params and fetch.
  //With useEffect, load the contact when params changes
  //and update contact state

  

  useEffect(() => {
    if (location.state) {
      const { contact } = location.state;
 
      setContact(contact);
    }
  }, [location]);
 

  if (!contact) {
    return <p>Loading</p>
  }

  return (
    <div>
      <h2>{id}-Contact details</h2>
      <h2>{contact.firstName}, {contact.lastName}</h2>
      <p>{contact.street}, {contact.city}</p>
      <p>Email: {contact.email}</p>
      <p>LinkedIn: {contact.linkedIn}</p>
      <p>Twitter: {contact.twitter}</p>
    </div>
  )
}

export default ContactsView