import react from "react";
import useState from 'react-hook-use-state';
import { data } from "../../Data/Data";
import { ProductCard } from "../../Card/Card";
import { Container, Row, Col } from "react-bootstrap";
import './Product.css';



const Products = () => {

    // //state holding all of the products
    // const [productList, setProductList] = useState([
    //     {
    //         title: "",
    //         desc: "",
    //         img: ""
    //     }
    // ]);
    // const output = data.map((item) =>
    //     <>
    //     <ProductCard 
    //     title={item.title}
    //     desc={item.desc}
    //     img={item.img}
    //      />
    //     </>
    // );

    

    return (
        <div className='center'>
            <h1>Products</h1>
            <p><strong>All designs were created by Noé Puna</strong></p>
            <br></br>

            {/* for every product in productList, render a product card
            for it */} 

            
            {/* bootstrap grid component */}
            <Container >
                <Row>
                    {/* foreach item in the data component */}
                    {data.map((item) =>
                        //create a column
                        <Col xs="12"  md="6" lg="4">
                            {/* create a ProductCard for the item */}
                            <ProductCard 
                            title={item.title}
                            desc={item.desc}
                            img={item.img}
                            />
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    );
}

export default Products