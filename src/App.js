import React from 'react';
import Counter from './components/Counter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
    this.state = {
      count: 0,
    };

  }
  incrementCount() {
    this.setState({
      count: this.state.count + 1
    });
  };
  
  decrementCount() {
    this.setState({
      count: this.state.count - 1
    });
  };
  
  render() {
        return (
        <div className="App">
          <h1>Counter</h1>
          <h2>{this.state.count}</h2>

        <Counter 
          incrementFn={this.incrementCount}
          decrementFn={this.decrementCount}/>

          {/* <button onClick={this.incrementCount}></button>
          <button onClick={this.decrementCount}></button> */}
        </div>
      );
  }
}
  
export default App;
