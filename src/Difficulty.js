import React from 'react';
import './App.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import Medium from './Medium';
class Difficulty extends React.Component {
    constructor(){
        super()
        this.state = {
            redirecteasy: false,
            redirectmedium: false,
            redirecteasy: false
        }
        this.easy = this.easy.bind(this);
        this.medium = this.medium.bind(this);
        this.hard = this.hard.bind(this)
    }
    componentDidMount() {
    }
    easy() {
        console.log('easy')
        this.setState({redirecteasy: true})
        axios({
            Method: 'get',
            Url: 'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple',
            category: " ",
           difficulty: " ",
           question: " ",
           correct_answer: " ",
           incorrect_answer: " "
        })
        .then(user => {
            console.log('redirect')
        })
    }
    medium() {
        console.log('medium')
        this.setState({redirectmedium: true})
        axios({
            Method: 'get',
            Url: 'https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple',
            category: " ",
           difficulty: " ",
           question: " ",
           correct_answer: " ",
           incorrect_answer: " "
        })
        .then(user => {
            console.log('redirect')
        })
    }
    hard() {
        console.log('hard')
        this.setState({redirecthard: true})
        axios({
            Method: 'get',
            Url: 'https://opentdb.com/api.php?amount=10&category=18&difficulty=hard&type=multiple',
           category: " ",
           difficulty: " ",
           question: " ",
           correct_answer: " ",
           incorrect_answer: " "
        })
        .then(user => {
            console.log('redirect')
        })
    }
    render() {
        console.log(this.state.redirect)
        if(this.state.redirecteasy){
            return  <Redirect to='/Easy' /> 
        }
        if(this.state.redirectmedium){
            return  <Redirect to='/Medium' /> 
        }
        if(this.state.redirecthard){
            return  <Redirect to='/Hard' /> 
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
                <button onClick={this.easy} >easy</button>
                <button onClick={this.medium} >medium</button>
                <button onClick={this.hard} >hard</button>
                {/* {/* <h1>&#169;Bizzell-Cunningham-Miles-Randall 2019</h1> */}
            </div>
        )
    }
}
export default Difficulty;






























