import {Badge} from "react-bootstrap"

const MyBadge = (props) => (
    <div>
        <Badge variant={props.color}>{props.text}</Badge>{' '}
   </div>
)

export default MyBadge