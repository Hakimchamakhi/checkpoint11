import React from "react";
import {Navbar, Nav as Navb, Form, Button, FormControl} from 'react-bootstrap'
import {BrowserRouter as Router} from "react-router-dom";

const Nav = () => {
    return(
        <Router>
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Navb className="mr-auto">
                    <Navb.Link href="/">Home</Navb.Link>
                    <Navb.Link href="/About">About us</Navb.Link>
                    <Navb.Link href="/Contact">Contact</Navb.Link>
                </Navb>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form>
            </Navbar>
        </div>
        </Router>
    );
}
export default Nav;
