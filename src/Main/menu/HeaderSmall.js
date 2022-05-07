import { Component } from "react";
import { Navbar,Nav,Container } from 'react-bootstrap';
import { Link } from "@reach/router";
import Rev from "../../Main/Rev";
// import Header from "./header";
import "../../App.css";

class HeaderSmall extends Component {
    render() {
        return (
            
            <header>
                <div className="top-nav glowblack">
                    <Navbar bg="light" className="d-flex top-nav " varient="light">
                    <Container>

                        <Link to="/" style={{ "textDecoration": "None" }}>
                            <Navbar.Brand><Rev data="Home" /></Navbar.Brand>
                        </Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        
                            <Nav className="ml-auto">
                                <Nav.Link href="#home"> <Rev data="Media" /></Nav.Link>
                                {/* <Nav.Link href="#link"> <Rev data="Contact" /></Nav.Link> */}
                                <Link to="/login" style={{textDecoration:"none",color:"gray"}}> <Rev data="Login" /> </Link>
                            </Nav>
                        
                    </Container>
                </Navbar>
                </div>
                
            </header>
        );
    }
}

export default HeaderSmall;