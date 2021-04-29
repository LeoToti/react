/** @format */

import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class AddComments extends React.Component {
  state = {
    comment: {
      // INITIAL STATE
      comment: "",
      rate: 1,
      elementId: 1,
    },
  };

  submitComment = async (e) => {
      
    let endpoint =
      "https://striveschool-api.herokuapp.com/api/comments/";

    // let's prevent the default browser behavior


    try {
      let response = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(this.state.comment),
        headers: {
          'Authorization':
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMjYyZGIxZjBmYjAwMTVkOTE3YWUiLCJpYXQiOjE2MTkwMTExMTgsImV4cCI6MTYyMDIyMDcxOH0.u4ShYs4n706rvXgmMF96INEy00iaODgcOgey38Up6Hc",
          "Content-Type": "application/json",
        },
      });
      // now response holds the result of my operation
      // the ok property of it will tell me if everything went well or not
      if (response.ok) {
        alert("your comment has been saved correctly");
        this.setState({
          comments: {
            // INITIAL STATE
            comment: "",
            rate: 1,
            elementId: this.props.elementId,
          },
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        alert("something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (e) => {
    // e.target.value
    // e.target.id
    let id = e.target.id;
    console.log("the field I need to change in the reservation object is", id);
    // id can be "name", "phone", "smoking"
    this.setState({
      comment: {
        ...this.state.comment,
        [id]:  e.target.value,
      },
    });
  };

 

  render() {
    console.log("RESERVATIONFORM GOT RE-RENDERED");
    return (
      // React Fragment, just for wrap multiple elements out of my return statement
      <>
        <h2>Leave your comment</h2>
        <Form onSubmit={this.submitReservation}>
          <Form.Group>
            <Form.Label>Comment Here</Form.Label>
            <Form.Control
              id='name'
              value={this.state.comment.comment}
              // onChange={this.handleChange}
              onChange={(e) =>
                this.setState({
                  comment: {
                    elementId: this.props.elementId,
                    
                    comment: e.target.value
                  },
                })
              }
              type='text'
              placeholder='Enter name'
            />
          </Form.Group>
          
          <Form.Group>
            <Form.Label>How many Stars?</Form.Label>
            <Form.Control
              as='select'
              id='rate'
              value={this.state.comment.rate}
              // onChange={(e) => this.setState({
              //     reservation: {
              //         ...this.state.reservation,
              //         numberOfPersons: e.target.value
              //     }
              // })}
              onChange={this.handleChange}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            
            </Form.Control>
          </Form.Group>
         
          
          
          <Button onClick={this.submitComment}variant='info' type="button">
            Send Comment
          </Button>
        </Form>
      </>
    );
  }
}

export default AddComments;
