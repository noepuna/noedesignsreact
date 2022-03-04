import { Card, Button} from 'react-bootstrap';
import './Card.css';
import About from '../Screens/About/About';
import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';

export const ProductCard = (props) => {
     const btnStyle = {
         backgroundColor: '#798dd0',
         border: 'none',
         "&:hover": {
             backgroundColor: '#3a4498'
         }
    }

    const cardStyle = {
        width: '300px',
        boxShadow: '5px 5px 5px #666666',
        margin: '0px 0px 30px 0px',
        // "&:hover": {
        //     border: 'green'
        // },
        // color: "#666666"
    }
    
    return (
    <div className='cardStyle' style={cardStyle}>
      <Card>
        <Card.Img variant="top" src={props.img} style={{ height: '23rem' }}/>
        <Card.Body style={{backgroundColor: "#e6e6e6"}}>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.desc}
          </Card.Text>
          <Link to={'/about'} ><Button style={btnStyle}>View</Button></Link>
        </Card.Body>
      </Card>

      
</div>
    );
}
