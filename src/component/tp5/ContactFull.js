import React, { useState } from 'react';
import ContactForm from './ContactForm';
import ContactCard from './ContactCard';
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button, Offcanvas, ListGroup } from 'react-bootstrap';

function App() {
  const [contacts, setContacts] = useState([]);
  const [currentPage, setCurrentPage] = useState('form'); // 'form' or 'list'
  const [searchTerm, setSearchTerm] = useState('');

  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
    setCurrentPage('list'); // Switch to the list after adding a contact
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.nom.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div >
        <h2>TP5 : Contact</h2>
    <div className=' d-flex align-items-center justify-content-center' style={{borderRadius: '50px' , background: 'linear-gradient(145deg, #d1d7df, #f8ffff)',
    boxShadow:  '20px 20px 24px #d1d7df,-20px -20px 24px #ffffff', padding: '30px' , border: '1px solid rgb(239, 236, 231)' , 
        borderRadius: '20px' , width: '100%' , maxWidth: '900px'}}>
    <Container >
      <Navbar bg="light" expand="lg" style={{borderRadius: '10px'}}>
        <Navbar.Brand style={{padding: '8px' , color: 'rgb(184, 184, 184)'}}>Gestion des Contacts</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => setCurrentPage('form')}>Ajouter Contact</Nav.Link>
            <Nav.Link onClick={() => setCurrentPage('list')}>Liste Contacts</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Chercher un contact"
              className="mr-sm-2"
              value={searchTerm}
              onChange={handleSearch}
            />
          </Form>
         
        </Navbar.Collapse>
      </Navbar><br /><br />

      {currentPage === 'form' && <ContactForm addContact={addContact} />}
      {currentPage === 'list' && (
        <Row >
          {filteredContacts.map((contact) => (
            <Col key={contact.id}>
              <ContactCard contact={contact} deleteContact={deleteContact} />
            </Col>
          ))}
        </Row>
      )}
          </Container>
    </div></div>
  );
}

export default App;