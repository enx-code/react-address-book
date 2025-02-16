import { useEffect, useState } from "react"
import { Link, Route, Routes } from "react-router-dom"
import ContactsList from "./components/ContactsList"
import ContactsAdd from "./components/ContactsAdd"
import ContactsView from "./components/ContactsView"
import "./styles/styles.css"
import ContactEdit from "./components/ContactEdit"

export default function App() {
  const [contacts, setContacts] = useState([])

  if(contacts){
    console.log("working running twice")
  }
  //TODO: Load all contacts on useEffect when component first renders
  useEffect(()=>{
    fetch("http://localhost:4000/contacts")
      .then((res)=>res.json())
      .then((data)=>{setContacts(data)
        
        console.log("contacts", data)
        })

  }, [])


  return (
    <>
      <nav>
        <h2>Menu</h2>
        <ul>
          {/* TODO: Make these links */}
          <li>
            <Link to="/">
              Contacts List
            </Link>
          </li>
          <li>
            <Link to="/addcontact">
              Add New Contact
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <Routes>
          {/* TODO: Add routes here  */}
          <Route path="/"
            element={<ContactsList
              contacts={contacts}
              setContacts={setContacts} />}/>
          <Route 
            path="/addcontact"
            element={<ContactsAdd 
              contacts={contacts} 
              setContacts={setContacts} />}/>
          <Route
            path="/contacts/:id"
              element={<ContactsView 
              contacts={contacts} />}/>
          <Route
            path="/contact/:id/edit"
            element={<ContactEdit 
            contacts={contacts}
            setContacts={setContacts} />} />
        </Routes>
      </main>
    </>
  )
}
