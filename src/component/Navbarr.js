import React from 'react'
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button, Offcanvas, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { ThemeContext } from './theme/ThemeContext';
import { useContext, useState } from 'react';
import BtnTheme from './theme/BtnTheme';
import ToggleSwitch from './theme/ToggleSwitch';
import BtnLang from './langue/BtnLang';

export default function Navbarr() {
  
  const {toggleTheme,theme} = useContext(ThemeContext);
  const [switchActivated, setSwitchActivated] = useState(false);
  const handleToggle = () => {
    toggleTheme();
    setSwitchActivated(!switchActivated);
  };

  return (
    <div >
      {['xxl'].map((expand) => (
      <Container fluid className='nn'>
        <Navbar key={expand} expand={expand} 
        className={`mb-3 ${theme ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} ${
              switchActivated ? 'light' : ''
            }`}>
          
            <Navbar.Brand href="#" className='st 'style={{margin: '5px'}}>Accueil</Navbar.Brand>
            <Nav className='ml-auto'>
            
            <BtnTheme />
            
            </Nav>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='ml-auto' style={{ color: 'white' ,backgroundColor: theme ? 'white' : 'dark', marginRight: '10px'}}/>
            
            <Navbar.Offcanvas
            className='offcanvas-white'
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link ><Link to='/' style={{textDecoration : 'none' , color: 'black' , marginLeft: '5px'}} className='L'>Accueil</Link></Nav.Link>
                  <Nav.Link ><Link to='/TP1' style={{textDecoration : 'none' , color: 'black' , marginLeft: '5px'}} className='L'>TP1 : Calculatrice</Link></Nav.Link>
                  <Nav.Link ><Link to='/TP2' style={{textDecoration : 'none' , color: 'black' , marginLeft: '5px'}} className='L'>TP2 : Slider</Link></Nav.Link>
                  <Nav.Link ><Link to='/TP3' style={{textDecoration : 'none' , color: 'black' , marginLeft: '5px'}} className='L'>TP3 : To do list</Link></Nav.Link>
                  <Nav.Link ><Link to='/TP4' style={{textDecoration : 'none' , color: 'black' , marginLeft: '5px'}} className='L'>TP4 : Api</Link></Nav.Link>
                  <Nav.Link ><Link to='/TP5'style={{textDecoration : 'none' , color: 'black' , marginLeft: '5px'}} className='L'>TP5 : Contact </Link></Nav.Link>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            </Navbar>
          </Container>
          
        
      ))}
    
    </div>
  )
}
