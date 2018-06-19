import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import friends from "./friends.json";
import "./App.css";


class App extends React.Component {
  state = {
    friends,
    score: 0
  };


  componentDidMount() {
    this.setState({ friends: this.shuffle(this.state.friends) });
  }

  handleClick = idInput => {
    let score = this.state.score;
    const chosenIndex=this.state.friends.findIndex(dude => dude.id===idInput);

    if (friends[chosenIndex].clicked) {
      console.log("you lost!");
      score = 0;
      friends.forEach(friend => {
        friend.clicked= false;
      });
  
    } else  {
      friends[chosenIndex].clicked = "true";
      score++;
      if (score ===12) {
        console.log("you win!")
      }
      this.shuffle(this.state.friends)
  
    }

    this.setState({friends, score})
  }

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



  render() {
    return (
   <div>
     <Header score={this.state.score}/>
      <Wrapper>
    

      {this.state.friends.map(character =>
       <FriendCard
       handleClick={this.handleClick}
       id={character.id}
       key={character.id}
       image={character.image}
       clicked={character.clicked}
     />)}
    
    </Wrapper>
    </div>
 
    );
  }
}


export default App;
