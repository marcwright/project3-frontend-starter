import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
const serverUrl = 'http://localhost:3000/api';






class CreateAccount extends React.Component {
    state = {};

    render() {
        return (
            <React.Fragment>
            <h1>Create Account</h1>
                <form onSubmit={this.createInstructor} onChange={e => this.handleChange(e)}>
                Name: <input type='text' name='name' />
                Subject: <input type='text' name='subject' />
                Grade Level: <input type='text' name='grade level' />
                
                <input type='submit' value='Create Account' />
                </form>
            </React.Fragment>
                
            
        )
    }

}






export default CreateAccount;