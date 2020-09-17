import React from "react";
import { connect } from "react-redux";

import { onDelete, selectData } from "../Actions";

class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.onDelete.bind(this);
  }

  componentDidUpdate() {
    // console.log(this.props.aa,'aaa');
  }
  onDelete = async () => {
    await this.props.onDelete(this.props.aa.id);
    await this.props.selectData(undefined, true);
  };

  render() {
    return (
      <div>
        <button
          type="reset"
          style={
            this.props.aa.select === undefined
              ? { visibility: "hidden" }
              : { display: "unset" }
          }
          className="btn btn-outline-danger btn-lg t-bold"
          onClick={this.onDelete}
        >
          Delete
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    posts: state.posts,
    select: state.select,
    delete: state.delete,
  };
};

export default connect(mapStateToProps, { onDelete, selectData })(Delete);
