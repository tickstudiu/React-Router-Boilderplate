import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Page2Text } from '../Text';
import Component1 from '../components/component1';
import Component3 from '../components/component3';

class Page2 extends Component {
    render() {
        return (
            <div>
                <h1>{Page2Text.header}</h1>
                <Component1 />
                <Component3 />
                <Link to={Page2Text.redirect}>{Page2Text.redirectName}</Link>
            </div>
        );
    }
}

export default Page2;