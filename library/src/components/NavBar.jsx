




import {Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap'





const NavBar = () => (

<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" id="search" onChange="handleChange"/>
    </Form>
  </Navbar.Collapse>
</Navbar>





)

export default NavBar