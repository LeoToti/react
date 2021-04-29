

import { Component } from 'react'
import { Alert, ListGroup, Spinner } from 'react-bootstrap'










class CommentArea extends Component {

    // every time you need to fetch data from an endpoint (API)
    // in a react component, set up the state accordingly

    state = {
        comments: [],
        
    }
    

    // the next step is where to put our fetch
    // I need to grab the reservations now

    componentDidMount = async () => {
        let asin = this.props.asin 
         
        
       

        let endpoint = 'https://striveschool-api.herokuapp.com/api/comments/' + asin

        // let's fetch our data!
        try {

            this.setState({
                isLoading: true
            })

            let response = await fetch(endpoint, {
                headers: {
                    'Authorization':  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMjYyZGIxZjBmYjAwMTVkOTE3YWUiLCJpYXQiOjE2MTkwMTExMTgsImV4cCI6MTYyMDIyMDcxOH0.u4ShYs4n706rvXgmMF96INEy00iaODgcOgey38Up6Hc"
                }
            })
            console.log(response)
            if (response.ok) {
                let data = await response.json()
                console.log(data)
                this.setState({ comments: data, isError: false, isLoading: false })
            } else {
                console.log('houston we got an error')
                this.setState({ isError: true, isLoading: false })
            }
        } catch (error) {
            console.log(error)
            this.setState({ isError: true, isLoading: false })
        }
    }

    

    render() {
        // render is not suitable for putting a fetch
        // render is fired multiple times during the lifecycle of a component
        // render will be invoked again every time there's a change in the STATE or in the PROPS

        // I cannot put the fetch here
        // and I cannot set the state here either
        // this.setState({ reservations: ['stefano'] })


        return (
            
            <>
            
                <h3>comments</h3>
                {/* conditional rendering */}
                {
                    this.state.isLoading &&
                    <Spinner animation="border" variant="primary" />
                }
                {
                    !this.state.isLoading && this.state.isError &&
                    // loading must NOT be in process and we need an error in the state
                    <Alert variant="danger">Aww snap! We got an error!</Alert>
                }
                { !this.state.isLoading &&
                    <ListGroup>
                        
                            
                               
                                    <ListGroup.Item >
                                       {
                                           this.state.comments.map(comment => (
                                               <p key={comment.comment}>Comment: {comment.comment}, Rating: {comment.rate}stars</p>
                                           ))
                                       }
        
                                        
                                    </ListGroup.Item>
                                
                                <p>We don't have comments yet!</p>
                        
                    </ListGroup>}
                    
            </>
        )
    }
}

export default CommentArea

