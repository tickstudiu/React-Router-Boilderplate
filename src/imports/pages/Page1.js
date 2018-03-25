import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Page1Text } from '../Text';
import Component1 from '../components/component1';
import Component2 from '../components/component2';

class Page1 extends Component {
    render() {
        return (
            <div>
                <h1>{Page1Text.header}</h1>
                <Component1 />
                <Component2 />
                <Link to={Page1Text.redirect}>{Page1Text.redirectName}</Link>
            </div>
        );
    }
}

export default Page1;