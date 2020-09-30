import React, { Component } from "react";
import { connect } from "react-redux";
// import logo from './logo.svg';
import "../App.css";
import Delete from "../Buttons/Delete";
import { onPost } from "../Actions/index";

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      type: false,
    };
    this.onType.bind(this);
    this.handleSubmit.bind(this);
  }

  // Onyping 
  onType = (e) => {
    // Typing...
    e.target.value !== ""
      ? this.setState({
          type: true,
          task: e.target.value,
        })
      : this.setState({
          type: false,
          task: e.target.value,
        });
    // console.log(this.state)
  };

  // Onpost
  handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      id: new Date(),
      title: this.state["task"],
      body: "",
      userId: new Date(),
      selecter: false,
    };

    await this.props.onPost(data);
    // Variable
    this.setState({
      task: "",
      type: false,
    });
  };

  


  componentDidUpdate = () => {
    // this.onType()
  };

  render() {
    return (
      <div className=" container  form-group">
        <form className="form" onSubmit={this.handleSubmit}>
          <label className="t-green">Task name </label>
          <input
            type="text"
            style={{ color: "white", fontWeight: "bold" }}
            value={this.state["task"]}
            onChange={this.onType}
            className="form-control mb-2 border-success"
          ></input>

          <span
            style={
              this.state["type"] === false
                ? { visibility: "hidden" }
                : { color: "yellow" }
            }
          >
            Typing . .
          </span>
          <center>
            <div>
              <button
                disabled={this.state["type"] === true ? false : true}
                type="submit"
                className="btn btn-outline-success btn-lg t-bold mb-1"
              >
                Save
              </button>
              <br></br>
            </div>
          </center>
        </form>
        <center>
          <Delete aa={this.props.select} />
        </center>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state.select);
  return {
    posts: state.posts,
    select: state.select,
  };
};

export default connect(mapStateToProps, { onPost })(Update);
