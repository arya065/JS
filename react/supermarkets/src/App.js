import React, { Component, useState, useEffect } from "react";
import { List, Button, Progress, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
// https://reactstrap.github.io/?path=/docs/components-popover--update

function Cell(props) {
  const [status, setStatus] = useState(false);
  const [color, setColor] = useState("hsl(" + 0 + "," + 0 + "%," + 70 + "%" + ")");
  const [added, setAdded] = useState(false);
  const [distMap, setDistMap] = useState([]);
  const [textColor, setTextColor] = useState("white");
  const handleClick = () => {
    setStatus(!status);
  }

  const printShop = () => {
    let current = props.shops.find((e) => e[0] == props.i);
    if (current) {
      setColor("hsl(" + current[1][0] + "," + current[1][1] + "%," + current[1][2] + "%" + ")");
    }
  }

  const printAll = () => {
    if (distMap.length != 0 && distMap[0].length != 0) {
      let minDist = Math.min(...distMap.map(e => { return e[0] }));
      let closest = distMap.filter(e => e[0] == minDist);//array of closest shop with distance and id
      let colors = [];
      closest.map((e) => {
        props.shops.filter(el => { if (el[0] == e[1]) { colors = el[1] } });
      });
      if (closest[0][0] != 0) {
        setColor("hsl(" + colors[0] + "," + parseInt(colors[1] - 30) + "%," + parseInt(colors[2] + 30) + "%" + ")");
      }
      if ((colors[0] > 50 && colors[0] < 160) || (color[2] > 80)) {
        setTextColor("black");
      } else {
        setTextColor("white");
      }
      console.log("colors:", colors);
      console.log("all shops:", props.shops);
      console.log("closest:", closest);
    }
  }

  const randInt = (multi) => {
    return Math.floor(Math.random() * multi);
  }

  //добавить шаг со смещением
  //таблица цветов
  //алг для hue, остальное в рандом
  //таблица с hue, но перемешанный
  const makeRandomColor = () => {
    return [randInt(360), 100, randInt(20) + 40];
  }

  const getDistance = (coord2, i) => {
    let coord1 = [Math.floor(props.i / 9), (props.i % 9)];
    return [Math.abs(coord1[0] - coord2[0]) + Math.abs(coord1[1] - coord2[1]), i];
  }

  useEffect(() => {
    printShop();
  }, [added, setAdded]);

  useEffect(() => {
    props.shops.map((e) => {
      setDistMap([...distMap, getDistance([Math.floor(e[0] / 9), (e[0] % 9)], e[0])]);
    });
  }, [props.addShop]);

  useEffect(() => {
    printAll();
  }, [distMap, setDistMap]);

  return (
    <span
    // onMouseEnter={() => setStatus(true)} 
    // onMouseLeave={() => setStatus(false)}
    >
      <Button id={"btn" + props.i} type="button" style={{ width: "60px", margin: "3px", background: color }} onClick={() => handleClick()}>
        <span style={{ mixBlendMode: "difference" }}>{/* реверс цвета */}
          {props.e}
        </span>
      </Button>
      <Popover isOpen={status} target={"btn" + props.i} trigger="legacy">
        <PopoverHeader>Quieres poner mercado aqui?</PopoverHeader>
        <PopoverBody>
          <div>Poblacion:{props.e}</div>
          <div>Index de zona:{props.e}</div>
          <Button onClick={() => { props.addShop(props.i, makeRandomColor()); setStatus(false); setAdded(true) }}>Si</Button>
        </PopoverBody>
      </Popover>
    </span>
  )
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poblacion: [0, 5, 4, 2, 9, 8, 0, 8, 8, 1, 7, 21, 23, 44, 5, 3, 4, 0, 2, 6, 32, 22, 33, 8, 4, 2, 8, 1, 2, 43, 4, 56, 65, 34, 11, 8, 2, 22, 32, 3, 42, 62, 43, 21, 0, 2, 2, 23, 34, 64, 24, 42, 15, 7, 0, 2, 36, 43, 61, 26, 64, 12, 0, 1, 2, 15, 43, 34, 2, 12, 2, 3, 1, 0, 12, 3, 0, 0, 21, 2, 2],
      shops: [],
    };
  }

  mixColorsRGB(color1, color2, saturation = 0, brightness = 50) {
    let h = parseInt(Math.floor((color1[0] + color2[0]) / 2));
    let s = parseInt(Math.floor((color1[1] + color2[1]) / 2));
    let l = parseInt(Math.floor((color1[2] + color2[2]) / 2));
    if (s < saturation) {
      s = saturation;
    }
    if (l > brightness) {
      l = brightness;
    }
    return ("hsl(" + h + "," + s + "%," + l + "%" + ")");
  }
  addShop(i, color) {
    //добавить проверку наличия магазина по индексу
    this.setState({ shops: [...this.state.shops, [i, [color[0], color[1], color[2]]]] });
  }
  componentDidUpdate() {
    console.log(this.state);
  }
  render() {
    return (
      <div>
        {this.state.poblacion.map((e, i) => {
          if ((i) % 9 == 0) {
            return (
              <>
                <br />
                <Cell mix={(color1, color2, brightness) => this.mixColorsRGB(color1, color2, brightness)} shops={this.state.shops} addShop={(i, color) => this.addShop(i, color)} e={e} i={i}></Cell>
              </>
            )
          }
          return (
            <>
              <Cell mix={(color1, color2, brightness) => this.mixColorsRGB(color1, color2, brightness)} shops={this.state.shops} addShop={(i, color) => this.addShop(i, color)} e={e} i={i}></Cell>
            </>
          )
        })}
      </div>
    )
  }
}

export default App;