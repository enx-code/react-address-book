import { useState } from "react"
import { useNavigate } from "react-router-dom";

function ContactsAdd(props) {

  // setContacts and contacts must be passed as props
  // to this component so new contacts can be added to the
  // state
  const { setContacts, contacts } = props
  const [newContact, setNewContact] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: ""
  })
  const navigate = useNavigate();
  //TODO: Implement controlled form
  //send POST to json server on form submit
  const onSubmit = (event) => {
    console.log("add new contact", event, "new", newContact)
    event.preventDefault();
    const userNewData = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        firstName: newContact.firstName,
        lastName: newContact.lastName,
        street: newContact.street,
        city: newContact.city
       })
    };
    console.log("userNewData", userNewData)
    fetch("http://localhost:4000/contacts", userNewData)
        .then((res) => res.json())
        .then((data) => {setContacts([...contacts, data])
        console.log("new data", data)
        navigate("/")
        });
  }

  return (
    <form className="form-stack contact-form" onSubmit={onSubmit}>
      <h2>Create Contact</h2>

      <label htmlFor="firstName">First Name</label>
      <input id="firstName" name="firstName" type="text" required
      onChange={(e) => setNewContact({ ...newContact, firstName: e.target.value })} />

      <label htmlFor="lastName">Last Name:</label>
      <input id="lastName" name="lastName" type="text" required
      onChange={(e)=>setNewContact({...newContact, lastName: e.target.value})} />

      <label htmlFor="street">Street:</label>
      <input id="street" name="street" type="text" required
      onChange={(e)=>setNewContact({...newContact, street: e.target.value})} />

      <label htmlFor="city">City:</label>
      <input id="city" name="city" type="text" required
      onChange={(e)=>setNewContact({...newContact, city: e.target.value})} />

      <div className="actions-section">
        <button className="button blue" type="submit">
          Create
        </button>
      </div>
    </form>
  )
}

export default ContactsAdd
