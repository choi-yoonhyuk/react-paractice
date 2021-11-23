import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  // componentDidMount() {
  //   // 타이머를 설정하기 좋은 장소
  //   this.timerID = setInterval(
  //     () => this.tick(),
  //     1000
  //   );
  //   console.log("DidMount")
  // }

  componentWillUnmount() {
    clearInterval(this.timerID)
    console.log("WillUnmount")
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    console.log('render')
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export const Form = () => {
  function handleClick(e) {
    e.preventDefault();
    console.log('You clicked')
  }

  return (

      <button onClick={handleClick}>Click</button>
  )
}

export default Clock;
