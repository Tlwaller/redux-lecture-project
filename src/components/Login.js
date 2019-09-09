import React, {Component} from 'react';
import store, {UPDATE_USERNAME} from '../store';
import {Link} from 'react-router-dom'

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
    }

    handleUsernameChange(e) {
        this.setState({
            username: e.target.value
        })
        let action = {
            type: UPDATE_USERNAME,
            payload : e.target.value
        }
        store.dispatch(action);
        console.log(store.getState());
    }

    handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        })
    }

    render() {
        return(
            <div>
                <input placeholder='Username' onChange={this.handleUsernameChange}/>
                <input placeholder='Password' onChange={this.handlePasswordChange}/>
                <Link to='/profile'>Log in</Link>
            </div>
        )
    }
}