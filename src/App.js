import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Activity from "./Components/Activitiy";
import Create from "./Components/Create";
import Todo from "./Components/Todo";

class App extends React.Component {
  render() {
    return (
      <div className="App-header">
        <div className="row row-md px-4 mx-4 w1 ">
          <div className="col col-md-4">
            <Todo />
          </div>
          <div className="col col-md-4">
            <Create />
          </div>
          <div className="col col-md-4">
            <Activity />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
