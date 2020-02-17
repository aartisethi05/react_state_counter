 import React , {Component} from 'react';
// import logo from './logo.svg';
// import './State.css';

class State extends Component {

  constructor(props) {

   super(props);

   this.state = {count: 0 };

 }

 incr = () =>{

   this.setState({count: this.state.count + 1});

 }
 decr = () => {

  this.setState({count: this.state.count - 1});

}

 render() {

   return (

     <div>

       <div>count:{this.state.count}</div>

       <button onClick={this.decr}>-</button>
       <button onClick={this.incr}>+</button>

     </div>

   );

 }

};

//ReactDOM.render(<State />, document.getElementById("root"));
export default State;
