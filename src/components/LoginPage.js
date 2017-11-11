import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = (props) => {
    return (
        <div>
            <h1>Login with gmail</h1>
            <button onClick={props.startLogin}>Login</button>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        startLogin: () => dispatch(startLogin())
    };
};

export default connect(undefined, mapDispatchToProps)(LoginPage);