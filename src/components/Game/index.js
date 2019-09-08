import React, { Component } from "react";
import Wrapper from "../Wrapper";
import Navbar from "../NavBar";
import Header from "../Header"
import Card from "../Card"
import cards from "../../cards.json"

class Game extends Component {

  state = {
    cards,
    topScore: 0,
    score: 0,
  }

  componentDidMount() {
    this.setState({ cards: this.shuffleCards(this.state.cards) });
  }

  //handleClick -On item click, evaluate whether clicked true or false - if clicked is true, reset game, if clicked is false, turn click to true, continue game (shuffle cards).  maybe separate functions, called in each case. handle click - calls correct or incorrect guess functions

  //    //Reset - turns 'clicked' to false, shuffles cards, 
  reset = data => {
    const resetData = data.map(card => ({ ...card, clicked: false }));
    return this.shuffleCards(resetData);

  }

  //correctGuess - adds one to score, shuffles cards, top score vs current score (Math.max(num1, num2))
  correctGuess = newStatus => {

    const topScore = this.state.topScore;
    const score = this.state.score;
    const newTopScore = Math.max(score + 1, topScore);

    this.setState({
      cards: this.shuffleCards(newStatus),
      score: score + 1,
      topScore: newTopScore
    });


  }
  //incorrectGuess- turns score to 0, resets data
  incorrectGuess = newStatus => {
    this.setState({
      cards: this.reset(newStatus),
      score: 0
    });

  }

  //shuffle cards function
  shuffleCards = data => {
    let currentIndex = data.length;
    let temporaryValue, randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = data[currentIndex];
      data[currentIndex] = data[randomIndex]
      data[randomIndex] = temporaryValue;
    }
    return data;
  }

  handleClick = id => {
    let correct = false;
    const newStatus = this.state.cards.map(card => {
      const newCard = { ...card };
      if (newCard.id === id) {
        if (!newCard.clicked) {
          newCard.clicked = true;
          correct = true;
          
        }
      }
      return newCard
    })

    correct ? this.correctGuess(newStatus) : this.incorrectGuess(newStatus)


  };




  render() {
    return (
      <div className="App">
        <Navbar score={this.state.score} topScore={this.state.topScore}></Navbar>
        <Header />

        <Wrapper>
          {this.state.cards.map(card => (
            <Card
              className="image"
              image={card.picture}
              title={card.title}
              clicked={card.clicked}
              id={card.id}
              key={card.id}
              score={this.handleClick}

            />
          ))}
        </Wrapper>

      </div>
    );
  }



}

export default Game;