import React, { Component } from "react";
import { connect } from "react-redux";

class Activity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      task: '',
      status: ''
  }
}

renderSelect = () => {
  return (
    <ul>
      <li>
        {this.props.select.status}
      </li>
      <li>
        {this.props.select.status2}
      </li>
    </ul>
  )
}

  render() {
    return (
      <div className="jumbotron pt-3">
        <label style={ {cursor: 'pointer'} } className="badge badge-primary" onClick={() => this.setState({ cbo: !this.state.cbo })}>
          Activity Lists
        </label>
        {this.props.select.id !== undefined && this.renderSelect()}
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    select: state.select,
  };
};
export default connect(mapStateToProps)(Activity);
