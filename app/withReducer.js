import React from "react";
import {injectReducer} from './store';
import {ReactReduxContext} from "react-redux";

const withReducer = (key, reducer) => WrappedComponent =>
    class extends React.PureComponent {
        constructor(props)
        {
            super(props);
            injectReducer(key, reducer);
        };

        render()
        {
            return (
                <React.Fragment>
                    <WrappedComponent {...this.props} />
                </React.Fragment>
            );
        };
    };

export default withReducer;
