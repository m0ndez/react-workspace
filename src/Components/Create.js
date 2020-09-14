import React, { Component } from "react";
import { connect } from "react-redux";
// import logo from './logo.svg';
import "../App.css";

class Create extends Component {
  focustext = false;
  handleSubmit = (e) => {
    e.preventDefault();
    const todo = this.getTodo.value;

    const data = {
      id: new Date(),
      body: "",
      title: todo,
      userId: new Date(),
      activity: `Created ${todo}`,
    };
    console.log(data);
    this.props.dispatch({
      type: "ADD_POST",
      data,
    });

    // Variable
    this.getTodo.value = "";
  };

  render() {
    return (
      <div className=" container  form-group">
        <form className="form" onSubmit={this.handleSubmit}>
          <label className="t-green">Task name </label>
          <input
            type="text"
            style={{ color: "white" }}
            ref={(input) => (this.getTodo = input)}
            className="form-control mb-2 border-success"
          ></input>
          <span className={this.getTodo !== "" ? "t-ping" : "t-yell"}>
            Typing . .{" "}
          </span>
          <center>
            <div>
              <button
                type="submit"
                className="btn btn-outline-success btn-lg t-bold mb-1"
              >
                Save
              </button>
              <br></br>
              <button
                type="reset"
                className="btn btn-outline-danger btn-lg t-bold"
              >
                Delete
              </button>
            </div>
          </center>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.select);
  return {
    posts: state.posts,
    select: state.select,
  };
};

export default connect(mapStateToProps)(Create);
