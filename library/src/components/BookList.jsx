import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'

import SingleBook from "./SingleBook";
import {Navbar, Nav, Form, Button, FormControl} from 'react-bootstrap'
import CommentArea from './CommentArea';


class BookList extends React.Component {
  state = {
    query: ''
  }
  

 render() {

  return <>
  <div>
    {/* <input type="search"  value={this.state.query} onChange={ e => this.setState({query: e.target.value})} /> */}
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      
    </Nav>
    <Form inline>
      <FormControl type="search" placeholder="Search" value={this.state.query} onChange={ e => this.setState({query: e.target.value})} className="mr-sm-2" id="search" />
    </Form>
  </Navbar.Collapse>
</Navbar>
  </div>
  <div className='row'>
      {
      this.props.books
        .filter(book => 
            book.title.toLowerCase().includes(this.state.query)
        )
        .map((book) => SingleBook(book)
        
        )
       
      }
      
  </div>
 
  </>
  }
}



export default BookList