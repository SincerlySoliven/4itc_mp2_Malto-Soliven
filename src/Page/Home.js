import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';
import Round from '../Components/InBetween';
import './Home.css';
import About from './About';
// import Game from './Game';
import Footer from './Footer';

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
        points: 0,
        count: 1,   
        repeat: "none",

        v1: "yes", v2: "no", v3: "no", v4: "no", v5: "no",
        b1: "block", b2: "none", b3: "none", b4: "none", b5: "none",
        
        c1r1: Math.floor(Math.random() * 13 + 1),  
        c1r2: "", 
        c1r3: "",  
        c1r4: "",  
        c1r5: "",  

        c2r1: Math.floor(Math.random() * 13 + 1), 
        c2r2: "",
        c2r3: "",
        c2r4: "",
        c2r5: "",

        c3r1: Math.floor(Math.random() * 13 + 1),
        c3r2: "", 
        c3r3: "",
        c3r4: "", 
        c3r5: "", 

        option1: "", status1: "",
        option2: "", status2: "",
        option3: "", status3: "",
        option4: "", status4: "",
        option5: "", status5: "",
    }
  }
 
  Win = () => {
    switch (this.state.count) {
      case 1: this.setState({
        points: this.state.points + 1, 
        option1: "Deal", status1: "You WIN", 
        c1r2: Math.floor(Math.random() * 13 + 1), 
        c2r2: Math.floor(Math.random() * 13 + 1),
        c3r2: Math.floor(Math.random() * 13 + 1), 
        b1: "none", b2: "block", v2: "yes",
      }) 
      break;

      case 2: this.setState({
        points: this.state.points + 1, 
        option2: "Deal", status2: "You WIN", 
        c1r3: Math.floor(Math.random() * 13 + 1),
        c2r3: Math.floor(Math.random() * 13 + 1),
        c3r3: Math.floor(Math.random() * 13 + 1), 
        b2: "none", b3: "block", v3: "yes",
      }) 
      break;

      case 3: this.setState({
        points: this.state.points + 1, 
        option3: "Deal", status3: "You WIN", 
        c1r4: Math.floor(Math.random() * 13 + 1), 
        c2r4: Math.floor(Math.random() * 13 + 1),
        c3r4: Math.floor(Math.random() * 13 + 1), 
        b3: "none", b4: "block", v4: "yes",
      }) 
      break;

      case 4: this.setState({
        points: this.state.points + 1, 
        option4: "Deal", status4: "You WIN",
        c1r5: Math.floor(Math.random() * 13 + 1), 
        c2r5: Math.floor(Math.random() * 13 + 1),
        c3r5: Math.floor(Math.random() * 13 + 1), 
        b4: "none", b5: "block", v5: "yes",
      }) 
      break;

      case 5: this.setState({
        points: this.state.points + 1, 
        option5: "Deal", 
        status5: "You WIN", 
        b5: "none", 
        repeat: "block",
      }) 
      break;

      default: break;
    }
  }
  
  noDeal = () => {
    switch (this.state.count) {
        case 1: this.setState({
            points: this.state.points - this.state.points/2, 
            option1: "No Deal", status1: "NO DEAL", 
            c1r2: Math.floor(Math.random() * 13 + 1), 
            c2r2: Math.floor(Math.random() * 13 + 1), 
            c3r2: Math.floor(Math.random() * 13 + 1), 
            b1: "none", b2: "block", v2: "yes",
        }) 
        break;
        case 2: this.setState({
            points: this.state.points - this.state.points/2, 
            option2: "No Deal", status2: "NO DEAL", 
            c1r3: Math.floor(Math.random() * 13 + 1),
            c2r3: Math.floor(Math.random() * 13 + 1), 
            c3r3: Math.floor(Math.random() * 13 + 1), 
            b2: "none", b3: "block", v3: "yes",
        }) 
        break;
        case 3: this.setState({
            points: this.state.points - this.state.points/2, 
            option3: "No Deal", status3: "NO DEAL", 
            c1r4: Math.floor(Math.random() * 13 + 1),
            c2r4: Math.floor(Math.random() * 13 + 1), 
            c3r4: Math.floor(Math.random() * 13 + 1), 
            b3: "none", b4: "block", v4: "yes",
        }) 
        break;
        case 4: this.setState({
            points: this.state.points - this.state.points/2, 
            option4: "No Deal", status4: "NO DEAL",
            c1r5: Math.floor(Math.random() * 13 + 1),
            c2r5: Math.floor(Math.random() * 13 + 1), 
            c3r5: Math.floor(Math.random() * 13 + 1),
            b4: "none", b5: "block", v5: "yes",
        }) 
        break;
        case 5: this.setState({
            points: this.state.points - this.state.points/2, 
            option5: "No Deal", status5: "NO DEAL", 
            b5: "none", repeat: "block",
        }) 
        break;
        default: break;
    }
  }

  lose = () => {
    if(this.state.points === 0){
      return this.state.points;
    } else {
      return this.state.points - 1;
    }
  }

  
  deal = (c1, c2, c3) => {
    if (c1 < c3 && c3 < c2) {
      this.Win();
    } else if (c1 > c3 && c3 > c2) {
      this.Win();
    } else {
      switch (this.state.count) {
        case 1: this.setState({
            points: this.lose(), 
            option1: "Deal", status1: "You    LOSE", 
            c1r2: Math.floor(Math.random() * 13 + 1), 
            c2r2: Math.floor(Math.random() * 13 + 1),
            c3r2: Math.floor(Math.random() * 13 + 1), 
            b1: "none", b2: "block", v2: "yes",
        }) 
        break;
        case 2: this.setState({
            points: this.lose(), 
            option2: "Deal", status2: "You    LOSE", 
            c1r3: Math.floor(Math.random() * 13 + 1), 
            c2r3: Math.floor(Math.random() * 13 + 1),
            c3r3: Math.floor(Math.random() * 13 + 1), 
            b2: "none", b3: "block", v3: "yes",
        }) 
        break;
        case 3: this.setState({
            points: this.lose(), 
            option3: "Deal", status3: "You    LOSE", 
            c1r4: Math.floor(Math.random() * 13 + 1), 
            c2r4: Math.floor(Math.random() * 13 + 1),
            c3r4: Math.floor(Math.random() * 13 + 1), 
            b3: "none", b4: "block", v4: "yes",
        }) 
        break;
        case 4: this.setState({
            score: this.lose(), 
            option4: "Deal", status4: "You    LOSE", 
            c1r5: Math.floor(Math.random() * 13 + 1), 
            c2r5: Math.floor(Math.random() * 13 + 1),
            c3r5: Math.floor(Math.random() * 13 + 1), 
            b4: "none", b5: "block", v5: "yes",
        }) 
        break;
        case 5: this.setState({
            points: this.lose(), 
            option5: "Deal", status5: "You    LOSE",
            b5: "none",repeat: "block",
        }) 
        break;
        default: break;
      }
    }
  }

  
  option = (card1, card2, card3) => {
    if (card1 !== card2) {
      
      let choiceDeno = prompt("Please choose between Deal or No Deal");
      if (choiceDeno === "Deal") {
          this.deal(card1, card2, card3);

      } else if (choiceDeno === "No Deal") {
        this.noDeal();
      } else {
        this.setState({
          count: this.state.count,
        })
      }
    } else {

        let choiceHilo = prompt("Please choose between Higher or Lower, or you can type No Deal if you want to proceed to the next round");
        if (choiceHilo === "Higher") {

            if (card3 > card1) {
                switch (this.state.count) {
                case 1: this.setState({
                    points: this.state.points + 1, 
                    option1: "Higher", status1: "WIN", 
                    c1r2: Math.floor(Math.random() * 13 + 1), 
                    c2r2: Math.floor(Math.random() * 13 + 1),
                    c3r2: Math.floor(Math.random() * 13 + 1), 
                    b1: "none", b2: "block", v2: "yes",
                }) 
                break;
                case 2: this.setState({
                    points: this.state.points + 1,
                    option2: "Higher", status2: "WIN", 
                    c1r3: Math.floor(Math.random() * 13 + 1), 
                    c2r3: Math.floor(Math.random() * 13 + 1),
                    c3r3: Math.floor(Math.random() * 13 + 1), 
                    b2: "none", b3: "block", v3: "yes",
                })
                break;
                case 3: this.setState({
                    points: this.state.points + 1, 
                    option3: "Higher", status3: "WIN",
                    c1r4: Math.floor(Math.random() * 13 + 1), 
                    c2r4: Math.floor(Math.random() * 13 + 1),
                    c3r4: Math.floor(Math.random() * 13 + 1), 
                    b3: "none", b4: "block", v4: "yes",
                }) 
                break;
                case 4: this.setState({
                    points: this.state.points + 1, 
                    option4: "Higher", status4: "WIN", 
                    c1r5: Math.floor(Math.random() * 13 + 1),
                    c2r5: Math.floor(Math.random() * 13 + 1),
                    c3r5: Math.floor(Math.random() * 13 + 1), 
                    b4: "none", b5: "block", v5: "yes",
                })
                break;
                case 5: this.setState({
                    points: this.state.points + 1, 
                    option5: "Higher", 
                    status5: "WIN",
                    b5: "none", repeat: "block",
                }) 
                break;
                default: break;
                }
            } else {
                switch (this.state.count) {
                case 1: this.setState({
                    points: this.lose(), 
                    option1: "Higher", status1: "LOSE", 
                    c1r2: Math.floor(Math.random() * 13 + 1),
                    c2r2: Math.floor(Math.random() * 13 + 1),
                    c3r2: Math.floor(Math.random() * 13 + 1), 
                    b1: "none", b2: "block", v2: "yes",
                }) 
                break;
                case 2: this.setState({
                    points: this.lose(), 
                    option2: "Higher", status2: "LOSE", 
                    c1r3: Math.floor(Math.random() * 13 + 1), 
                    c2r3: Math.floor(Math.random() * 13 + 1),
                    c3r3: Math.floor(Math.random() * 13 + 1), 
                    b2: "none", b3: "block", v3: "yes",
                })
                break;
                case 3: this.setState({
                    points: this.lose(), 
                    option3: "Higher", status3: "LOSE",
                    c1r4: Math.floor(Math.random() * 13 + 1), 
                    c2r4: Math.floor(Math.random() * 13 + 1),
                    c3r4: Math.floor(Math.random() * 13 + 1), 
                    b3: "none", b4: "block", v4: "yes",
                }) 
                break;
                case 4: this.setState({
                    points: this.lose(), 
                    option4: "Higher", status4: "LOSE", 
                    c1r5: Math.floor(Math.random() * 13 + 1), 
                    c2r5: Math.floor(Math.random() * 13 + 1),
                    c3r5: Math.floor(Math.random() * 13 + 1), 
                    b4: "none", b5: "block", v5: "yes",
                }) 
                break;
                case 5: this.setState({
                    points: this.lose(), 
                    option5: "Higher", 
                    status5: "LOSE", 
                    b5: "none", 
                    repeat: "block",
                }) 
                break;
                default: break;
                }
            }
        } else if (choiceHilo === "Lower") {
            if (card3 < card1) {
                switch (this.state.count) {
                case 1: this.setState({
                    points: this.state.points + 1, 
                    option1: "Lower", status1: "WIN",
                    c1r2: Math.floor(Math.random() * 13 + 1), 
                    c2r2: Math.floor(Math.random() * 13 + 1),
                    c3r2: Math.floor(Math.random() * 13 + 1), 
                    b1: "none", b2: "block", v2: "yes",
                }) 
                break;
                case 2: this.setState({
                    points: this.state.points + 1, 
                    option2: "Lower", status2: "WIN", 
                    c1r3: Math.floor(Math.random() * 13 + 1), 
                    c2r3: Math.floor(Math.random() * 13 + 1),
                    c3r3: Math.floor(Math.random() * 13 + 1), 
                    b2: "none", b3: "block", v3: "yes",
                }) 
                break;
                case 3: this.setState({
                    points: this.state.points + 1, 
                    option3: "Lower", status3: "WIN", 
                    c1r4: Math.floor(Math.random() * 13 + 1), 
                    c2r4: Math.floor(Math.random() * 13 + 1),
                    c3r4: Math.floor(Math.random() * 13 + 1), 
                    b3: "none", b4: "block", v4: "yes",
                }) 
                break;
                case 4: this.setState({
                    points: this.state.points + 1, 
                    option4: "Lower", status4: "WIN", 
                    c1r5: Math.floor(Math.random() * 13 + 1), 
                    c2r5: Math.floor(Math.random() * 13 + 1),
                    c3r5: Math.floor(Math.random() * 13 + 1), 
                    b4: "none", b5: "block", v5: "yes",
                }) 
                break;
                case 5: this.setState({
                    points: this.state.points + 1, 
                    option5: "Lower", 
                    status5: "WIN", 
                    b5: "none", 
                    repeat: "block",
                }) 
                break;
                default: break;
                }
            } else {
                switch (this.state.count) {
                case 1: this.setState({
                    points: this.lose(), 
                    option1: "Lower", status1: "Lose", 
                    c1r2: Math.floor(Math.random() * 13 + 1), 
                    c2r2: Math.floor(Math.random() * 13 + 1),
                    c3r2: Math.floor(Math.random() * 13 + 1), 
                    b1: "none", b2: "block", v2: "yes",
                }) 
                break;
                case 2: this.setState({
                    points: this.lose(), 
                    option2: "Lower", status2: "Lose", 
                    c1r3: Math.floor(Math.random() * 13 + 1), 
                    c2r3: Math.floor(Math.random() * 13 + 1),
                    c3r3: Math.floor(Math.random() * 13 + 1), 
                    b2: "none", b3: "block", v3: "yes",
                }) 
                break;
                case 3: this.setState({
                    points: this.lose(), 
                    option3: "Lower", status3: "Lose", 
                    c1r4: Math.floor(Math.random() * 13 + 1), 
                    c2r4: Math.floor(Math.random() * 13 + 1),
                    c3r4: Math.floor(Math.random() * 13 + 1), 
                    b3: "none", b4: "block", v4: "yes",
                }) 
                break;
                case 4: this.setState({
                    points: this.lose(), 
                    option4: "Lower", status4: "Lose", 
                    c1r5: Math.floor(Math.random() * 13 + 1), 
                    c2r5: Math.floor(Math.random() * 13 + 1),
                    c3r5: Math.floor(Math.random() * 13 + 1), 
                    b4: "none", b5: "block", v5: "yes",
                }) 
                break;
                case 5: this.setState({
                    points: this.lose(),
                    option5: "Lower", 
                    status5: "Lose", 
                    b5: "none", 
                    repeat: "block",
                }) 
                break;
                default: break;
                }
            }
        } else if (choiceHilo === "No Deal") {
            this.noDeal();
        } else {
            this.setState({
            count: this.state.count,
            })
        }
    }
  }


  round1 = () => {
    this.setState({
      count: 2,
    })

    let card1 = this.state.c1r1;
    let card2 = this.state.c2r1;
    let card3 = this.state.c3r1;
    
    this.option(card1, card2, card3);
  }

  round2 = () => {
    let card1 = this.state.c1r2;
    let card2 = this.state.c2r2;
    let card3 = this.state.c3r2;

    this.setState({
      count: 3,
    })
    
    this.option(card1, card2, card3);
  }

  round3 = () => {
    let card1 = this.state.c1r3;
    let card2 = this.state.c2r3;
    let card3 = this.state.c3r3;

    this.setState({
      count: 4,
    })
    
    this.option(card1, card2, card3);
  }

  round4 = () => {
    let card1 = this.state.c1r4;
    let card2 = this.state.c2r4;
    let card3 = this.state.c3r4;

    this.setState({
      count: 5,
    })
    
    this.option(card1, card2, card3);
  }
  
  round5 = () => {
    let card1 = this.state.c1r5;
    let card2 = this.state.c2r5;
    let card3 = this.state.c3r5;

    this.option(card1, card2, card3);
  }

  restart = () => {
    window.location.reload(false);
  }

  render() {
    return(
      <>
        <About />
        <Container>
          <div className = "in-between-game">
            <div className = "round">
              <Round
                round = "1" 
                card1 = { this.state.c1r1 } 
                card2 = { this.state.c2r1 } 
                card3 = { this.state.c3r1 }
                option = { this.state.option1 } 
                status = { this.state.status1 }
                 visible = { this.state.v1}
              />
              <div className='btn-play'>
              <Button className='play' style = {{ display: this.state.b1 }} onClick = { this.round1 }>PLAY</Button>
              </div>
            </div>

            <div className = "round">
              <Round
                round = "2" 
                card1 = { this.state.c1r2 } 
                card2 = { this.state.c2r2 } 
                card3 = { this.state.c3r2 }
                option = { this.state.option2 } 
                status = { this.state.status2 } 
                visible = { this.state.v2 }
              />
              <div className='btn-play'>
              <Button className='play' style = {{ display: this.state.b2 }} onClick = { this.round2 }>PLAY</Button>
              </div>
            </div>

            <div className = "round">
              <Round
                round = "3" 
                card1 = { this.state.c1r3 } 
                card2 = { this.state.c2r3 } 
                card3 = { this.state.c3r3 }
                option = { this.state.option3 } 
                status = { this.state.status3 } 
                visible = { this.state.v3 }
              />
              <div className='btn-play'>
              <Button className='play' style = {{ display: this.state.b3 }} onClick = { this.round3 }>PLAY</Button>
              </div>
            </div>

            <div className = "round">
              <Round
                round = "4" 
                card1 = { this.state.c1r4 } 
                card2 = { this.state.c2r4 } 
                card3 = { this.state.c3r4 }
                option = { this.state.option4 } 
                status = { this.state.status4 } 
                visible = { this.state.v4 }
              />
              <div className='btn-play'>
              <Button className='play' style = {{ display: this.state.b4 }} onClick = { this.round4 }>PLAY</Button>
            </div>
            </div>

            <div className = "round">
              <Round
                round = "5" 
                card1 = { this.state.c1r5 } 
                card2 = { this.state.c2r5 } 
                card3 = { this.state.c3r5 }
                option = { this.state.option5 } 
                status = { this.state.status5 } 
                visible = { this.state.v5 }
              />
          <div className='btn-play'>
              <Button className='play' style = {{ display: this.state.b5 }} onClick = { this.round5 }>PLAY</Button>
          </div>
            </div>
          </div>  

          <div className = "points">
            <p className='score'> YOUR SCORE: { this.state.points }</p>
          </div>

          <div className='btn-again'>
          <Button className='again' style = {{ display: this.state.repeat, margin: "0 auto" }} onClick = { this.restart }>Try Again</Button>
          </div>
        </Container>
        <Footer/>
      </>
    )
  }
}

export default Home;