import React from 'react'
import PropTypes from 'prop-types'

class App extends React.Component {
  // 제일 먼저 호출되는곳
  constructor(props) {
    super(props);
    console.log("hello");
  }
  state = {
    count : 0,
  };
  add = () => {
    this.setState(
      // 밑에 있는 것보다 더좋은 방법이다.
      current => ({count: current.count + 1})
    );
  };
  minus = () => {
    this.setState({
      count: this.state.count - 1
    });
  };
  // render을 호출후 호출됨
  componentDidMount() {
    console.log('component rendered')
  }
  // 지금있는 컴포넌트에 변화가 생기면 호출된다.
  componentDidUpdate() {
    console.log('I just updated')
  }
  // 지금 있는 컴포넌트를 벗어날때 호출된다.
  componentWillUnmount() {
    console.log('Goodbye, cruel world')
  }
  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    );
  }
}

export default App;
