import React from "react";
import {Navbar,Nav,Brand} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Link,Switch} from "react-router-dom";

export default class Navigation extends React.Component{
    render() {
        return(
            <Navbar bg="dark" variant="dark">
                <Link className={"nav-link"} to="/home">Home</Link>
                <Nav className="mr-auto">
                    <Link className={"nav-link"} to="/starter">Starter</Link>
                    <Link className={"nav-link"} to="/soup">Soup</Link>
                    <Link className={"nav-link"} to="/maincourse">Main course</Link>
                    <Link className={"nav-link"} to="/dessert">Dessert</Link>
                    <Link className={"nav-link"} to="/drink">Drinks</Link>
                </Nav>
            </Navbar>
        )
    }
}