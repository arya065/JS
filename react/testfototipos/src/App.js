import React, { Component, useState } from "react";
import { List, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data/data.json';
import './App.css';
import axios from 'axios';

function ShowAnswers(props) {
  const [answers, setAll] = useState([]);
  const [accept, setAccept] = useState(true);
  const view = () => {
    if (accept) {
      console.log(props.open);
      if (props.open) {
        console.log("here");
        apiGet();
        console.log(answers);
        setAccept(false);
      }
    }
  }
  const apiGet = () => {
    axios
      .get("http://proyectos/API/apiTestfototipos/add/100/100")
      .then((response) => {
        setAll(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("ERRORRRRRRR", error);
      });
  };
  return (
    <>
      {view()}
    </>
  );
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listQuestions: this.getListQuestions(),
      answers: [],
      puntuacion: 0,
      lookAll: false,
      allAnswers: [],
    };
  }
  getListQuestions() {
    return data.questions;
  }
  addAnswer(i, value) {
    const tmp = this.state.answers;
    let prev = 0;
    if (tmp[i] != undefined) {
      prev = tmp[i].points;
    }
    tmp[i] = value;
    this.setState({ answers: tmp });
    this.setState({ puntuacion: this.state.puntuacion + value.points - prev });
  }
  showRes() {
    if (this.state.answers.includes() || this.state.answers.length < 7) {
      return (
        <div>
          <p>PUNTUACION TOTAL....</p>
          <p>SU TIPO DE PIEL....</p>
        </div>
      )
    } else {
      return (
        <div>
          <p>PUNTUACION TOTAL - {this.state.puntuacion}</p>
          <p>SU TIPO DE PIEL{this.getTipoPiel()}</p>
          <img src={this.getPhoto()} />
        </div>
      )
    }
  }
  getTipoPiel() {
    let points = this.state.puntuacion;
    if (points <= 7) {
      return "TIPO DE PIEL I. Muy sensible a la luz solar";
    } else if (points <= 21) {
      return "TIPO DE PIEL II. Sensible a la luz solar";
    } else if (points <= 42) {
      return "TIPO DE PIEL III. Sensibilidad normal a la luz solar";
    } else if (points <= 68) {
      return "TIPO DE PIEL IV. La piel tiene tolerancia a la luz solar";
    } else if (points <= 84) {
      return "TIPO DE PIEL V. La piel es oscura. Alta tolerancia";
    } else {
      return "TIPO DE PIEL VI. La piel es negra. Altísima tolerancia NIGNIGNIGNIGNIG";
    }
  }
  getPhoto() {
    let points = this.state.puntuacion;
    if (points <= 7) {
      return "./img/tipo1.png";
    } else if (points <= 21) {
      return "./img/tipo2.png";
    } else if (points <= 42) {
      return "./img/tipo3.png";
    } else if (points <= 68) {
      return "./img/tipo4.png";
    } else if (points <= 84) {
      return "./img/tipo5.png";
    } else {
      return "./img/tipo6.png";
    }
  }

  handleClick() {
    this.setState({ lookAll: !this.state.lookAll });
  }
  getColor(el) {
    if (this.state.answers.includes(el)) {
      return "success";
    } else {
      return "secondary";
    }
  }
  render() {
    return (
      <div>
        <List className="list-questions">
          {
            this.state.listQuestions.map((e, i) => (
              <>
                <li>{e.question.text}</li>
                <List>
                  {
                    e.question.answers.map(el => (
                      <li>
                        <Button color={this.getColor(el)} onClick={() => this.addAnswer(i, el)}>
                          {el.points}-{el.answer}
                        </Button>
                      </li>
                    ))
                  }
                </List>
              </>
            ))
          }
        </List>
        {this.showRes()}

        <Button onClick={() => this.handleClick()}>Mirar todos resultados</Button>
        {/* {this.view()} */}
        <ShowAnswers open={this.state.lookAll}></ShowAnswers>
      </div>
    );
  }
}

export default App;
