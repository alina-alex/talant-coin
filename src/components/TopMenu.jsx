import React from 'react';
import {Nav, NavItem,NavLink} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
export default class TopMenu extends React.Component{
    render(){
        return(
            <div>
                <Nav>
                    <NavItem >
                        <NavLink  href="#">How It Works</NavLink>
                    </NavItem>
                </Nav>
            </div>
        )
    }
}
