import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, selectData } from '../Actions'
// import logo from './logo.svg';
// import './App.css';

class Todo extends Component {

    componentDidMount() {
        // this.props.fetchPosts()
       
    }
    componentDidUpdate() {
        // console.log(this.props);
    }


    renderList() {
        return this.props.posts.map(post => {
            return (
                <tr key={post.id}>
                   <td className="border-0"  onClick={

                       () => this.props.selectData(post.title,post.activity)
                       }>
                 <span style={{color:'red'}}>Todo:</span> {post.title}
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
    console.log(state);
    return {
        posts : state.posts,
        select: state.select
        
    }
}
    
    export default connect(mapStateToProps, {fetchPosts,selectData})(Todo);
