import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import friends from "./friends.json";
import "./App.css";


class App extends React.Component {
  state = {
    friends,
    score: 0,
    highScore: 0,
    winMessage: 'Click on each character once! If you click on someone twice, you lose!'
  };


  componentDidMount() {
    this.setState({ friends: this.shuffle(this.state.friends) });
  }

  handleClick = idInput => {
    const chosenIndex=this.state.friends.findIndex(dude => dude.id===idInput);

    friends[chosenIndex].clicked ? 
      this.handleWrongGuess() :
      this.handleCorrectGuess(chosenIndex);
  }

  handleWrongGuess = () => {
    let newWinMsg = "Incorrect!"
    this.setState({winMessage: newWinMsg});
    this.resetGame();
  };

  handleCorrectGuess = (chosenIndex)=> {
    let newWinMsg = 'Correct!';
    let score = this.state.score;
    let highScore = this.state.highScore;
    friends[chosenIndex].clicked = "true";
    score++;
    const newHighScore = score > highScore ? score : highScore;

  
    this.setState({friends, score, highScore: newHighScore, winMessage: newWinMsg});
    this.state.score === 11 ? this.displayWinMessage() :  this.shuffle(this.state.friends);

  };


  shuffle = data => {
    let unshuffled = data.length - 1;
    while (unshuffled > 0) {
      const shuffled = Math.floor(Math.random() * (unshuffled + 1));
      const temp = data[unshuffled];
      data[unshuffled] = data[shuffled];
      data[shuffled] = temp;
      unshuffled--;
    }
    return data;
  };

  displayWinMessage = () => {
    let newWinMsg = "You won! Click any character to start again"
    this.setState({winMessage: newWinMsg});
    this.resetGame();
  }

  resetGame = () => {
    let score = this.state.score;
    score = 0;
    friends.forEach(friend => {
      friend.clicked= false;
    });
    this.setState({friends, score})
    this.shuffle(this.state.friends)

  }




  render() {
    return (
   <div>
     <Header 
     score={this.state.score}
     highScore={this.state.highScore}
     winMessage = {this.state.winMessage}
     />
      <Wrapper>
    

      {this.state.friends.map(character =>
       <FriendCard
       handleClick={this.handleClick}
       id={character.id}
       key={character.id}
       image={character.image}
       clicked={character.clicked}
       shake={!this.state.score && this.state.highScore && this.state.highScore!==12}
     />)}
    
    </Wrapper>
    </div>
 
    );
  }
}


export default App;
