<<<<<<< HEAD
// need to run the following command from the frontend terminal :  npm install react-bootstrap bootstrap
// also need the following line in app.js or index.js:  import 'bootstrap/dist/css/bootstrap.min.css';
// these 3 lines are for the accordian:   the rest of the code is in the render

import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Quizzes from './Quizzes'
import Instructor from "./Instructor";
import React, { Component } from "react";
import "./App.css";
import axios from "axios";
const serverUrl = "http://localhost:3000/api";
// need quiz api to make call for data:


class Home extends React.Component {
  state = {
    instructor: "",
    quizzes: [],
    questions: [],
    id: "",
    newInstructor: {},
    instructors: [],
    updateInstructor: {}
  };

  handleChange = e => {
    let id = parseInt(e.target.value);

    this.setState({ id });
  };


// in progress 33 -  ///////////////////////////////////////////

  updateInstructor = e => {
    e.preventDefault()
    let id = this.state.updateInstructor.id;
    let intId = Number(id)
    axios({
      url: `${serverUrl}/instructors/${intId}`,
      method: 'put',
      data: { updateInstructor: this.state.updateInstructor }
    })
      .then(response => {
        this.setState(prevState => (
          {
            instructors: [...prevState.instructors, response.data.instructor]
          }
        ))
      })
  }

  onHandleChangeInstructor = e => {
    let updateInstructor = {
      [e.target.name]: e.target.value
    }
    console.log(updateInstructor.id)
    this.setState((prevState, currentState) => (
      { updateInstructor: { ...prevState.updateInstructor, ...updateInstructor } }
    ))
  }


  // in progress lines 33 - 59 ////////////////////////////////////////////////////////////////// up ^





// works ///////////////////////////////// 

  createInstructor = e => {
    e.preventDefault()
    axios({
      url: `${serverUrl}/instructors`,
      method: 'post',
      data: { newInstructor: this.state.newInstructor }
    })
      .then(response => {
        this.setState(prevState => (
          {
            instructors: [...prevState.instructors, response.data.instructor]
          }
        ))
      })
  }

  onHandleChange = e => {
    let newInstructor = {
      [e.target.name]: e.target.value
    }

    this.setState((prevState, currentState) => (
      { newInstructor: { ...prevState.newInstructor, ...newInstructor } }
    ))
  }



// works //////////////////////////////////////// up




  getInstructors = e => {
    e.preventDefault();
    let id = this.state.id;
    axios({
      url: `${serverUrl}/instructors/${id}`,
      method: "get"
    }).then(response => {
      this.setState({
        instructor: response.data.instructor,
        quizzes: response.data.instructor.quizzes
      });
      console.log(response.data);
      // console.log(response.data.instructor.quizzes)
      // console.log('quizzes', this.state.quizzes)
    });
  };

  getQuestions = e => {
    e.preventDefault();
    let id = this.state.id;
    axios({
      url: `${serverUrl}/questions/`,
      method: "get"
    }).then(response => {
      this.setState({
        questions: response.data.questions
      });
      console.log(response.data.questions);
      // console.log(response.data.instructor.quizzes)
      // console.log('quizzes', this.state.quizzes)
    });
  };

  getQuizzes = e => {
    e.preventDefault();
    let id = this.state.id;
    axios({
      url: `${serverUrl}/quizzes/${id}`,
      method: "get"
    }).then(response => {
      this.setState({
        quizzes: response.data.question.questions
      });
      console.log(response.data.question.questions);
      // console.log(response.data.instructor.quizzes)
      // console.log('quizzes', this.state.quizzes)
    });
  };

  render() {
    if (this.state.instructor) {
      console.log(this.state.instructor);

      var renderInstructor = `
                            Name: ${this.state.instructor.name} -- Grade: ${this.state.instructor.grade_level} -- Subject: ${this.state.instructor.subject}
                        `;
    }

    if (this.state.quizzes) {
      console.log(this.state.quizzes);

      var renderQuizzes = this.state.quizzes.map((quiz, index) => {
        return (
          <div key={index}>
            <Accordion defaultActiveKey="1">
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Click for Question
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    {" "}
                    <ul>
                      <li>Question: {quiz.question}</li>
                      <li>Correct Answer: {quiz.correct_answer}</li>
                      <li>Incorrect Answer 1: {quiz.incorrect_answer1}</li>
                      <li>Incorrect Answer 2: {quiz.incorrect_answer2}</li>
                      <li>Incorrect Answer 3: {quiz.incorrect_answer3}</li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        );
      });
    }

    return (
      <React.Fragment>
        <div>

        <h1>Create Instructor</h1>
        <form onSubmit={this.createInstructor} onChange={e => this.onHandleChange(e)}>
          Name: <input type='text' name='name' />
          Subject: <input type='text' name='subject' />
          Grade Level: <input type='text' name='grade_level' />
          <input type='submit' value='New Instructor' />
        </form>

        <h1>Update Instructor</h1>
        <form onSubmit={this.updateInstructor} onChange={e => this.onHandleChangeInstructor(e)}>
          Name: <input type='text' name='name' />
          Subject: <input type='text' name='subject' />
          Grade Level: <input type='text' name='grade_level' />
          Instructor Id: <input type='text' name='id' />
          <input type='submit' value='Update Instructor' />
        </form>





          <h1>Sign-In</h1>
          <form
            onSubmit={this.getInstructors}
            onChange={e => this.handleChange(e)}
          >
            Instructor Id: <input type="text" name="id" />
            <input type="submit" value="Sign-In" />
          </form>
            {this.state.instructor.name ? <Instructor instructor = {this.state.instructor}/>: null}            

          <div>
            <form
              onSubmit={this.getQuizzes}
              onChange={e => this.handleChange(e)}
            >
              Quiz Id: <input type="text" name="id" />
              <input type="submit" value="Get Quiz" />
            </form>
          </div>
          <div>
            {/* <Accordion defaultActiveKey="0">
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Click for Quiz
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body> {renderQuizzes}</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion> */}
            {renderQuizzes}
          </div>
          <Quizzes />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
=======
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
>>>>>>> ec89b815def6d96484249d790528a5fbd9ca78bf
