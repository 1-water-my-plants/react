import React, { useState } from 'react';
import { connect } from 'react-redux';
import {login} from '../actions/';

const Login = () => {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [phoneNumber, setPhoneNumber] = useState();

    const user = {
        username : username,    
        password: password, 
        phoneNumber: phoneNumber
    }

    handleChanges = e => {
        this.setState({
          credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
          }
        });
      };

    return () {
        <>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={handleChanges}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleChanges}
        />
                <input
          type="text"
          name="phoneNumber"
          placeholder="phoneNumber"
          value={phone}
          onChange={handleChanges}
        />
        <button onClick={}>Update title</button>
        </>

    }

}
export default connect(
    mapStateToProps,
    { login }
  )(Plants);