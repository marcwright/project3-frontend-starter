import React from 'react';
import './App.css';
import axios from 'axios';


class Medium extends React.Component {
    state = {
        Medium: []

    }

    componentDidMount() {
            this.getMedium()
          }
        
          getMedium = () => {
            axios({
              url: 'https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple',
              // url: 'https://project3-backend-test.herokuapp.com/api/users',
              method: 'get'
            })
              .then(medium => {
                console.log(medium)
                this.setState({ medium })
              })
          }
        
          render() {
            console.log(this.state.medium)
            console.log("Rendered")
            return (
              <div>
                <button onClick={this.medium}>Medium</button>
                  <h1>Teacher's Pet!</h1>
               
              </div>
            );
          }

}
export default Medium;