import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
//import Header from "./components/Header";
import friends from "./friends.json";
import "./App.css";


class App extends React.Component {
  state = {
    friends: friends,
    score: 0
  };

 shuffle = (idInput) => {
   let score = this.state.score;
   //console.log(score);

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
  

  }



  var m = friends.length, t, i;
  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = friends[m];
    friends[m] = friends[i];
    friends[i] = t;
  }
  


   this.setState({friends, score});
  
 };


  render() {
    return (
   
 
      <Wrapper>
      <h1 className="title">Memory game</h1>
      <h2>Score: {this.state.score}</h2>

      {this.state.friends.map(character =>
       <FriendCard
       shuffle={this.shuffle}
       id={character.id}
       key={character.id}
       image={character.image}
       clicked={character.clicked}
     />)}
    
    </Wrapper>
 
    );
  }
}


export default App;
