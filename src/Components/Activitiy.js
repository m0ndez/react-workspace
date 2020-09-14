import React, { Component } from 'react';
import { connect } from 'react-redux';

class Activity extends Component {

    componentDidUpdate() {
        
    }

    myCss = {
    }

  
    renderList() {
        return this.props.posts
        .map(post => {
            return (
                <tr key={post.id}>
                   <td className="border-0" id={post.id} >
                 <span style={post.create !== this.props.select.create ? {visibility:'hidden'} : {color:'blue'}}>Activity:</span> <span style={post.create !== this.props.select.create? {visibility:'hidden'} : {color:'white'}} >{post.activity == null ? 'N/A' : post.activity}</span>
                 <br></br>
                 <span style={post.activity !== this.props.select.create? {visibility:'hidden'} : {color:'blue'}}>Activity:</span> {post.activity !== this.props.select.create ? null : this.props.select.select}
                 
                 </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="jumbotron pt-3">
            <label >Todo Lists</label>
         <table className="table">
             <thead>
             </thead>
             <tbody>
               {this.renderList()}
             </tbody>
         </table>
        </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state.select);
    return {
        posts : state.posts,
        select: state.select
    }
}
export default connect(mapStateToProps)(Activity);
