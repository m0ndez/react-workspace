import React, { Component } from "react";
import { connect } from "react-redux";

class Activity extends Component {
  constructor(props) {
    super(props);
    this.renderList.bind(this);
    this.onSelect.bind(this);
    this.state = {
      cbo: false,
    };
  }

  componentDidUpdate() {
    // console.log(this.props.posts);
    // console.log(this.state);]
    this.renderList();
    // this.onSelect()
  }

  onSelect = () => {
    return this.props.select["create"] !== undefined ? (
      <ul>
        <li>
          <span style={{ color: "blue" }}>Created</span>{" "}
          {this.props.select["create"]}{" "}
        </li>
        <li>
          <span style={{ color: "blue" }}>Selected</span>{" "}
          {this.props.select["select"]}{" "}
        </li>
      </ul>
    ) : (
      this.renderList()
    );
  };

  renderList = () => {
    return this.props.posts.map((post) => {
      return (
        <ul key={post.id}>
          <li className="border-0">
            <span style={{ color: "blue" }}>Created:</span> {post.title}
          </li>
        </ul>
      );
    });
  };

  render = () => {
    return (
      <div className="jumbotron pt-3">
        <label style={ {cursor: 'pointer'} } className="badge badge-primary" onClick={() => this.setState({ cbo: !this.state.cbo })}>
          Activity Lists
        </label>
        {/* {this.onSelect()} */}
        {this.state.cbo === true ? this.renderList() : this.onSelect()}
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  // console.log(state.posts);
  return {
    posts: state.posts,
    select: state.select,
  };
};
export default connect(mapStateToProps)(Activity);
