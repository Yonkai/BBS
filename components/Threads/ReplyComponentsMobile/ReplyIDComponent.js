import ReactTooltip from 'react-tooltip';
import React, { Component } from 'react';
import DraggableReplyForm from '../../DraggableReplyForm.js';
//React Tooltip docs, (awesome btw):
//https://www.npmjs.com/package/react-tooltip
//https://react-tooltip.netlify.com/


class ReplyIDComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      draggableReplyFormVisibility:false,
      name:'anon',
      comments:'@'+this.props.threadID+'@'
    }
    this.handleChange = this.handleChange.bind(this);
    this.changeDraggableFormVisibility = this.changeDraggableFormVisibility.bind(this);
  }

  changeDraggableFormVisibility() {
    this.setState((prevState) => ({
      draggableReplyFormVisibility:!prevState.draggableReplyFormVisibility
    }));
  }

  handleChange(name) {
    return (event) => {
        // This syntax is just another way to set the key of an object without 
        // knowing ahead of time what you want it to be called.
       this.setState({ [name]: event.target.value });
    }
}

  render() { 
    return (  
    <>
      <div>
        <a onClick={this.changeDraggableFormVisibility} data-tip data-for='replyID'> No.{this.props.threadID}</a>
        <ReactTooltip id='replyID' type='info'>
          <span>reply</span>
        </ReactTooltip>
        <DraggableReplyForm 
        draggableReplyFormVisibility={this.state.draggableReplyFormVisibility}
        changeDraggableFormVisibility={this.changeDraggableFormVisibility}
        handleChange={this.handleChange}
        comments={this.state.comments}
        name={this.state.name}
        repliedToID={this.props.threadID}

        />
      </div>
        <style jsx>{`
        a {
          margin:0;
          font-size:18px;
          text-decoration:none;
        }
        a:hover{
          cursor:pointer;
          background-color:rgb(255,225,240);
        }
        div{
          border:5px #fff solid;
          background: #eef;
        }
        span{
          font-size:12px;
        }
        
        `}</style>
    </>
        );
  }
}
 
export default ReplyIDComponent;