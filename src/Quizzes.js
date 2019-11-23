import React from 'react';
import './App.css';
import axios from 'axios';



class Quizzes extends React.Component {
  state = {
    Quizzes: [],
    url: [],
    // easyQuizzes: [],
    // mediumQuizzes: [],
    // hardQuizzes: []



  }

  componentDidMount() {
    this.getQuizzes()
  }
  submit() {

  }
  getQuizzes = () => {
    axios({
      url: `https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple`,
      // url: 'https://project3-backend-test.herokuapp.com/api/users',
      method: 'get'
    })
      .then(quizzes => {
        console.log(quizzes)
        this.setState({ quizzes })
      })
  }



  // getQuizzes = () => {
  //   axios({
  //     url: `https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple`,
  //     // url: 'https://project3-backend-test.herokuapp.com/api/users',
  //     method: 'get'
  //   })
  //     .then(quizzes => {
  //       console.log(quizzes)
  //       this.setState({ quizzes })
  //     })
  // }

  // getQuizzes = () => {
  //   axios({
  //     url: `https://opentdb.com/api.php?amount=10&category=18&difficulty=hard&type=multiple`,
  //     // url: 'https://project3-backend-test.herokuapp.com/api/users',
  //     method: 'get'
  //   })
  //     .then(quizzes => {
  //       console.log(quizzes)
  //       this.setState({ quizzes })
  //     })
  // }


  render() {
    // console.log(this.state.quizzes)
    // console.log("quizme")
    return (
      <div>
        <h1>Teacher's Pet!</h1>
        <h2>Quizzes</h2>
        <button onClick={this.submit}>Create New Quizzes</button>
        <h3>Difficulty</h3>
        <button onClick={this.submit}>Easy</button>
        <button onClick={this.submit}>Medium</button>
        <button onClick={this.submit}>Hard</button>
      </div>
    )

  }
}
export default Quizzes;