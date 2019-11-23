import React from 'react';
import './App.css';

class CreateAccount extends React.Component {
    state = {};
    submit(){
    
    }
    render() {
        return (
            <div>
                <h1>Teacher's Pet</h1>
                <h2>Create Account</h2>
                <form>
                    <label>
                    Name:
                    <input type="text" name="name"/>
                    Instructor Id:
                    <input type="text" id="id"/>
                    Subject:
                    <input type="text" subject="subject"/>
                    Grade Level:
                    <input type="text" GradeLevel="GradeLevel"/>
                    </label>
                    <button onClick = {this.submit()} >Submit</button>
                </form>
            </div>
        )
    }

}






export default CreateAccount;