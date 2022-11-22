import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ContactEdit(props) {
  const { contacts, setContacts } = props;

  const navigate = useNavigate();
  const location = useLocation();
  const {id} = useParams()

  useEffect(() => {
    if (location.state) {
      const { contact } = location.state;
      setFirstName(contact.firstName);
    }
  }, [location]);

  const [firstName, setFirstName] = useState("");

  const handleFirstName = (e) => setFirstName(e.target.value);

  const onSubmit = (event)=>{
    event.preventDefault()

    fetch(`http://localhost:4000/contacts/` + id, {
        method: "PATCH",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            firstName: firstName,
        })
    })
    
        // .then((res)=>res.json())
        // .then(setFirstName)
        // console.log("data from EDIT")
    
    navigate("/")
  }

  return (
    <form className="form-stack contact-form" onSubmit={onSubmit}>
      <h2>Edit Contact</h2>

      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        required
        onChange={handleFirstName}
      />

      {/* <label htmlFor="lastName">Last Name:</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        required
        onChange={(e) =>
          setNewContact({ ...newContact, lastName: e.target.value })
        }
      />

      <label htmlFor="street">Street:</label>
      <input
        id="street"
        name="street"
        type="text"
        required
        onChange={(e) =>
          setNewContact({ ...newContact, street: e.target.value })
        }
      />

      <label htmlFor="city">City:</label>
      <input
        id="city"
        name="city"
        type="text"
        required
        onChange={(e) => setNewContact({ ...newContact, city: e.target.value })}
      />

      <label htmlFor="email">Email:</label>
      <input
        id="email"
        name="email"
        type="text"
        onChange={(e) =>
          setNewContact({ ...newContact, email: e.target.value })
        }
      />

      <label htmlFor="linkedIn">LinkedIn:</label>
      <input
        id="linkedIn"
        name="linkedIn"
        type="text"
        onChange={(e) =>
          setNewContact({ ...newContact, linkedIn: e.target.value })
        }
      />

      <label htmlFor="twittwer">Twitter:</label>
      <input
        id="twitter"
        name="twitter"
        type="text"
        onChange={(e) =>
          setNewContact({ ...newContact, twitter: e.target.value })
        }
      /> */}

      <div className="actions-section">
        <button className="button blue" type="submit">
          Apply
        </button>
      </div>
    </form>
  );
}
