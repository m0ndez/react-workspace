import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, selectData } from '../Actions'
// import logo from './logo.svg';
// import './App.css';

class Todo extends Component {
    constructor(props){ 
        super(props)
        this.renderList.bind(this)

    }

    componentDidMount() {
        this.renderList()
        // this.props.fetchPosts()
       
    }
    componentDidUpdate() {
        this.renderList()
    }


    renderList() {
        return this.props.posts.map(post => {
            return (
                <ul key={post.id} style={{cursor:'pointer'}}
                onClick={() => 
                    this.props.selectData(post.title,post.id,true)
                    }>
                   <li className="border-0">
                 <span style={{color:'red'}}>Todo:</span> {post.title}
                 </li>
                </ul>
            )
        }) 
    }
  
    render() {
        return (
            <div className="jumbotron pt-3">
            <label className="badge badge-danger" >Todo Lists</label>
            {this.renderList()}
        </div>
        )
    }
}

const mapStateToProps = state => {
    // console.log(state);
    return {
        posts : state.posts
        
    }
}
    
    export default connect(mapStateToProps, {fetchPosts,selectData})(Todo);
