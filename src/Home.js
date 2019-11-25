import React from 'react';
import './App.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
const getquizzes = 'http://localhost:3000/api/instructors'

class Home extends React.Component {
    constructor(){
        super()
        this.state = {
            redirectQuizzes: false,
            redirectAccount: false
        }
        this.signin = this.signin.bind(this);
        this.account = this.account.bind(this);
    }
    componentDidMount() {
           
    }
    signin() {
        console.log('signin')
        this.setState({redirectQuizzes: true})
        axios({
            Method: 'post',
            Url: 'http://localhost:3000/api/instructors',
            Name: " ",
            instructorId: " "
        })
        .then(user => {
            console.log('redirect')
        })
    }
    account() {
        console.log('account')
        this.setState({redirectAccount: true})
        axios({
            Method: 'post',
            Url: 'http://localhost:3000/api/instructors',
            Name: " ",
            instructorId: " "
        })
        .then(user => {
            console.log('redirect')
        })
    }
    render() {
        console.log(this.state.redirect)
        if(this.state.redirectQuizzes){
            return  <Redirect to='/Quizzes' /> 
        }
        if(this.state.redirectAccount){
            return  <Redirect to='/createaccount' /> 
        }
        return (
            <div>
                <h1>Teacher's Pet!</h1>
                <form>
                    <label>
                        name:
                    <input type="text" name="name" />
                        Instructor Id:
                    <input type="text" id="id" />
                    </label>
                </form>
                <button onClick={this.signin} >Sign In</button>
                <button onClick={this.account} >Create Account</button>
                
                {/* {/* <h1>&#169;Bizzell-Cunningham-Miles-Randall 2019</h1> */}
            </div>

        )
    }
}

export default Home;