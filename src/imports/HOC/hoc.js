import React, { Component } from 'react';

import ComponentHoc from '../components/componentHoc';

export default function(ComposedComponent) {
    class HOC extends Component {
        constructor(props) {
            super(props);
        }

        render() {
            return (
                <div>
                    <ComposedComponent {...this.props} />
                    <ComponentHoc />
                </div>
            );
        }
    };
    
    return HOC;
}