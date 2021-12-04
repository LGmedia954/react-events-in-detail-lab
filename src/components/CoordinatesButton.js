import React from 'react';

class CoordinatesButton extends React.Component {
  handleClick = event => {
    console.log("click")
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  };

  render() {
    return <button onClick={this.handleClick}>Coords</button>;
  }
}

export default CoordinatesButton;
