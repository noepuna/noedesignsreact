import { data } from '../../../Data/Data';
import { useState } from 'react';
import { ProductCard } from '../../../Card/Card';
import { Container, Row, Col } from "react-bootstrap";
import { render } from '@testing-library/react';

const SearchData = (props) => {
     const [searched, setSearched] = useState([])

      

    return(
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1>Search Results for '{props.entry}'</h1>
            <br></br>

            
                    {/* filter the 'data' array to only render the ones that include the 'prop.entry'*/}
                    {
                        data.filter(item => item.title.toLowerCase().includes(props.entry.toLowerCase()))
                        .map(item => 
                            <ProductCard 
                            title={item.title}
                            desc={item.desc}
                            img={item.img}
                            />
                            )
                    }
        </div>
    );

    // function arrayFilter() {
         
    //     data.forEach(item => {
    //      if(item.title.includes(props.entry)){
    //          setSearched(arr => [...arr, item])
    //          console.log(item.title)
    //      }
    //  });
    
    //  return (searched)
    // }
}



export default SearchData