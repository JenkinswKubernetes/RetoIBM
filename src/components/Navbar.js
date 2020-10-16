import React from 'react';
import {Menu, Container} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Navbar(){
    return(
        <Menu>
            <Container>
                <Link to='/'>
                    <Menu.Item name="Movies" />
                </Link>
                <Link to='/people'>
                    <Menu.Item name="Characters" />
                </Link>
                <Link to='/calendar'>
                    <Menu.Item name="Calendar" />
                </Link>
            </Container>
        </Menu>
    )
}
