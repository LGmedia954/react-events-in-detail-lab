import React from "react";
class DelayedButton extends React.Component {
  handleClick = (event) => {
    console.log("click")
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  };

  render() {
    return <button onClick={this.handleClick}>Delayed</button>;
  }
}

export default DelayedButton;
