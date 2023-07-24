import React, { useState } from 'react'
import { Row, Navbar, Nav, Form, FormControl, Button, NavDropdown, InputGroup, Container } from 'react-bootstrap';

const NavBar = ({filterbySearch}) => {

  const [searchValue, setSearchValue] = useState('')

  const onSearch = () => {
    filterbySearch(searchValue)
    setSearchValue('')
  }

  const handleSubmit = event => {
    event.preventDefault()
  }
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          <div className='brand-logo'> Sugar Rush </div>
        </Navbar.Brand>
        <Form onSubmit={handleSubmit} className='d-flex'>
          <FormControl 
            type="text"
            placeholder="Search" 
            className="mr-sm-2 search"
            onChange={event => setSearchValue(event.target.value)} 
            value={searchValue}
          />
          <button onClick={onSearch} className='btn_style normal_state hover px-3'> Search</button>
        </Form>
      </Container >
    </Navbar>

  )
}

export default NavBar