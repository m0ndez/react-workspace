import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";
// import Delete from "../Buttons/Delete";
// import Update from "../Buttons/Update.js"
import { onPost } from "../Actions/index";
import "../App.css";

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
     id: '',
     task: '',
     status: ''
    }

  }

  onChangeTask = (e) => {
    this.setState({
      id: new Date(),
      task: e.target.value,
      status:`Created User ${e.target.value}`
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      id: this.state.id,
      task: this.state.task,
      status: this.state.status
    }
   this.props.onPost(data)

   this.setState({
     id:'',
     task:'',
     status:''
   })
  }

  onCreateRender = () => {
    return (
      <div className="container  form-group">
        <form className="form" onSubmit={this.handleSubmit}>
          <label className="t-green">Task name </label>
          <input
            type="text"
            style={{ color: "white", fontWeight: "bold" }}
            // value={this.state === '' ? this.props.select.title : this.state["task"]}
            className="form-control mb-2 border-success"
            value={this.state.task}
            onChange={this.onChangeTask}
            onBlur={() => this.state.task === ''}

          ></input>
          <span
          style={{visibility:this.state.task ===''&&'hidden'}}
          className="t-yell">
            Typing . .
          </span>
          <center>
            <div>
              <button
                disabled={this.state.task === ''}
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
          {/* <Delete aa={this.props.select} />
          <Update/> */}
        </center>
      </div>
    )
  }

  onEditRender() {
  }

  render() {
    const Create = this.onCreateRender;
    return (
      <>
      <Create />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps, { onPost })(Create);
