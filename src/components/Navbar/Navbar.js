import react from "react";
import { useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import Products from "../Screens/Product/Products"
import About from "../Screens/About/About";
import Services from "../Screens/Services";
import "./Navbar.css";
import {Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';
import SearchData from "../Screens/Searched/SearchData/SearchData";




const Navbarr = () => {
    
    const [searchText, setSearchText] = useState('');

    const navbarrr = {
      
      
      color: "grey",
      boxShadow: '3px 3px 3px #808080',
    }
    
    return <div >
        <Router>
        <div>
          <Navbar  bg="light" expand="lg" fixed="top" style={navbarrr}>
            <Container>
              <Navbar.Brand className="logoText" style={{fontFamily: "magneto"}}>noedesigns</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link><Link to={'/'} >Products</Link></Nav.Link>
                  <Nav.Link><Link to={'/about'} >About</Link></Nav.Link>
                  <Nav.Link><Link to={'/services'}>Services</Link></Nav.Link>
                </Nav>
                <Nav>
                
                  <div className="form-inline">
                  <input  class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={e => setSearchText(e.target.value)}></input>
                  <Link to={'/search'}><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button></Link>
                  </div>

                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <Routes>
            <Route exact path="/" element={ <Products /> }/>
            <Route path="about" element={ <About /> } />
            <Route path="services" element={ <Services /> } />
            <Route path="search" element={ <SearchData entry={searchText}/> } />
          </Routes>
        </div>
      </Router>
    </div>
}

export default Navbarr;

//React Browser Router use (no bootstrap)
{/* <Router>
    <div>
        <Link to={'/'}>Products</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/services'}>Services</Link>
            
        <hr />

        <Routes>
            <Route exact path="/" element={ <Products /> }/>
            <Route path="about" element={ <About /> } />
            <Route path="services" element={ <Services /> } />
        </Routes>
    </div>
</Router> */}