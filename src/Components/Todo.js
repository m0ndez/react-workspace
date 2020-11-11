import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, selectData } from '../Actions'
// import logo from './logo.svg';
// import './App.css';

class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:'',
            task:'',
            status:'',
            status2:''
        }
    }
    componentDidUpdate(){
        this.state !== this.setState&&this.props.selectData(this.state.id,this.state.task,this.state.status,this.state.status2)
    }
    
    // this.props.selectData(post.task,post.id,post.status,`Selected ${post.task}`)
    renderList() {
        return this.props.posts.map(post => {
            return (
                <ul key={post.id} style={{cursor:'pointer'}}
                    >
                   <li className="border-0"
                    onClick={() => 
                        this.setState({id:post.id,task:post.task,status:post.status,status2:`Selected ${post.task}`})}
                        onBlur={() => this.setState({id:'',task:'',status:'',status2:''})}
                    >
                 <span style={{color:'red'}}>Todo:</span> {post.task}
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
    return {
        posts : state.posts
        
    }
}
    
    export default connect(mapStateToProps, {fetchPosts,selectData})(Todo);
