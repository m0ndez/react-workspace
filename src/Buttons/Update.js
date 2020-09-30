import React from "react";
import { connect } from "react-redux";

import { onDelete, selectData } from "../Actions";

class Update extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    // console.log(this.props.aa,'aaa');
  }
  onUpdate = async () => {
    // await this.props.onDelete(this.props.aa.id);
    await this.props.selectData(undefined, true);
  };

  render() {
    return (
      <div>
        <button
          type="reset"
         
          className="btn btn-outline-danger btn-lg t-bold"
          onClick={this.onUpdate}
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

export default connect(mapStateToProps, { onDelete, selectData })(Update);
