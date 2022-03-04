import react from "react";
import useState from 'react-hook-use-state';
import { ProductCard } from "../../Card/Card";
import { Container, Row, Col } from "react-bootstrap";
import '../Product/Products';



const Searched = (props) => {



    return (
        <div className='center'>
            <h1>Search Results</h1>
            <p>Results for {props.entry}:</p>
            <br></br>
            
        </div>
    );
}

export default Searched