import React from "react";
import { connect } from "react-redux";
// import logo from './logo.svg';
import "./App.css";
import Activity from "./Components/Activitiy";
import Create from "./Components/Create";
import Todo from "./Components/Todo";


class App extends React.Component {

  componentDidUpdate(){
    // console.log(this.props);
  }

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

const mapStateToProps = (state) => {
  // console.log(state.posts);
  return {
    posts: state.posts,
    select: state.select,
  };
};

export default connect(mapStateToProps)(App);
