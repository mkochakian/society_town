import React from 'react';
import Pixel from './pixel';
import Grid from './grid';
import Panel from './panel';
import logo from './logo.svg';
import mario from './chars/mario';
import './App.scss';

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      occupied_cords: this.renderChar(mario),
    }
  }
  getColor(n) {
    if (n === "R") {
      return "#F92806"
    } else if (n === "B") {
      return "transparent"
    } else if (n === "S") {
      return "#5F2110"
    } else if (n === "Y") {
      return "#E39E47"
    }
  }

  renderChar(starting_cords) {
    return starting_cords.map(pixel => {
      return {"x_cord": pixel[0] + 20, "y_cord": pixel[1] + 20, "pixel_color": this.getColor(pixel[2])}
    })
  }

  // moves for player
  moveInDirection(d) {
    var cords = this.state.occupied_cords, count = d === "left" ? [-1,0] : d === "right" ? [1,0] : d === "up" ? [0,-1] : d === "down" ? [0,1] : [0,0]
    this.setState({occupied_cords: cords.map(z => {return z = {"x_cord": z.x_cord + count[0], "y_cord": z.y_cord + count[1], "pixel_color": z.pixel_color}})})
  }
  render() {
    var occupied_cords = this.state.occupied_cords
    return (
      <div className="container">
        <div style={{position: "relative", width: 600, height: 600}}>
        <Grid // this is the layer to insert players on the map
          style={{position: "absolute"}}
        >
          {
            occupied_cords.map((pixel, index) =>
            <Pixel
              x={pixel.x_cord}
              y={pixel.y_cord}
              pixel_color={pixel.pixel_color}
            />
          )}
        </Grid>
        <Grid // this is the layer for the background.
          style={{position: "absolute"}}
        />
        </div>
        <Panel>
          <div>
            <div onClick={(d) => this.moveInDirection("up")} id="up-button">↑</div>
          </div>
          <br />
          <div>
            <div onClick={(d) => this.moveInDirection("left")} id="left-button">←</div>
            <div id="center-button">o</div>
            <div onClick={(d) => this.moveInDirection("right")} id="right-button">→</div>
          </div>
          <br />
          <div>
            <div onClick={(d) => this.moveInDirection("down")} id="down-button">↓</div>
          </div>
        </Panel>
      </div>
    )
  }
}
