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
        console.log(quizzes.data.results)
        this.setState(
            { 
                question1: quizzes.data.results[0].question,
                question1_correct_answer: quizzes.data.results[0].correct_answer,
                question1_incorrect_answer1: quizzes.data.results[0].incorrect_answers[0],
                question1_incorrect_answer2: quizzes.data.results[0].incorrect_answers[1],
                question1_incorrect_answer3: quizzes.data.results[0].incorrect_answers[2],
                question1_difficulty: quizzes.data.results[0].difficulty,
                question2: quizzes.data.results[1].question,
                question2_correct_answer: quizzes.data.results[1].correct_answer,
                question2_incorrect_answer1: quizzes.data.results[1].incorrect_answers[0],
                question2_incorrect_answer2: quizzes.data.results[1].incorrect_answers[1],
                question2_incorrect_answer3: quizzes.data.results[1].incorrect_answers[2],
                question2_difficulty: quizzes.data.results[1].difficulty,
                question3: quizzes.data.results[2].question,
                question3_correct_answer: quizzes.data.results[2].correct_answer,
                question3_incorrect_answer1: quizzes.data.results[2].incorrect_answers[0],
                question3_incorrect_answer2: quizzes.data.results[2].incorrect_answers[1],
                question3_incorrect_answer3: quizzes.data.results[2].incorrect_answers[2],
                question3_difficulty: quizzes.data.results[2].difficulty,
                question4: quizzes.data.results[3].question,
                question4_correct_answer: quizzes.data.results[3].correct_answer,
                question4_incorrect_answer1: quizzes.data.results[3].incorrect_answers[0],
                question4_incorrect_answer2: quizzes.data.results[3].incorrect_answers[1],
                question4_incorrect_answer3: quizzes.data.results[3].incorrect_answers[2],
                question4_difficulty: quizzes.data.results[3].difficulty,
                question5: quizzes.data.results[1].question,
                question5_correct_answer: quizzes.data.results[4].correct_answer,
                question5_incorrect_answer1: quizzes.data.results[4].incorrect_answers[0],
                question5_incorrect_answer2: quizzes.data.results[4].incorrect_answers[1],
                question5_incorrect_answer3: quizzes.data.results[4].incorrect_answers[2],
                question5_difficulty: quizzes.data.results[4].difficulty, 
            }
        )
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

    console.log(this.state.question1)
    console.log(this.state.question1_correct_answer)
    console.log(this.state.question1_incorrect_answer1)
    console.log(this.state.question1_incorrect_answer2)
    console.log(this.state.question1_incorrect_answer3)
    console.log(this.state.question1_difficulty)
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