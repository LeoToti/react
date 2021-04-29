
import books from '../data/fantasy.json'
import {Card} from 'react-bootstrap'
import CommentArea from './CommentArea'
import AddComments from './AddComments'








const SingleBook = (props) => (

    
<div>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.img} />
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>
      {props.category}
    </Card.Text>
  </Card.Body>
</Card>
<CommentArea asin={props.asin} />
<AddComments elementId={props.asin} />
</div>


)

export default SingleBook
