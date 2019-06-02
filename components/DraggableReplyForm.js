import React, { Component } from 'react';
import Draggable from 'react-draggable';
import {withRouter} from 'next/router';
import axios from 'axios';

class DraggableReplyForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(event) {
        event.preventDefault();
        if(this.props.isThisPartOfAnExclusiveThread){
            axios.post('http://localhost:4000/api/createreply', {
                name: this.props.name,
                comments: this.props.comments,
                threadsthreadsid:this.props.router.query.threadID,
                threadsboardsboardsid:this.props.router.query.boardID
              });

              if(this.props.handleOptimisticReplys){
                this.props.handleOptimisticReplys(
                    this.props.name,
                    this.props.comments
                );

              }
          }
          }

    render() { 
        return (
    <>
         <div>
            {/* <Draggable
                axis="both"
                bounds="body"
                handle=".draggable-form-container-handle"
                position={null}
                grid={[25, 25]}
                scale={1}
            >  */}
            <div>
                { 
                    this.props.draggableReplyFormVisibility?
                    <div className="centered-form draggable-form-container-handle">
                    <button className='closeForm' onClick={this.props.changeDraggableFormVisibility}>X</button>
                     <div>  
                        <form  onSubmit={this.handleSubmit} className="pure-form pure-form-stacked">
                            <input placeholder="name" onChange={this.props.handleChange("name")} 
                             required value={this.props.name} 
                             type="text" name="name" id="name" maxLength="12"/>
                            <textarea autoFocus type='text' 
                            onChange={this.props.handleChange("comments")} required
                             maxLength="300" value={this.props.comments}
                            name="comments" id="comments" placeholder="comments"
                            rows="3" cols="22"/>
                        <button>Send!</button>
                        </form> 
                    </div>
                </div>:null
                }
            </div> 
            {/* </Draggable> */}
        </div>
      <style jsx>{`
        .centered-form{
            // position:absolute;
            background:#ccf;
            border:5px solid #99f;
            padding:10px;
        }
        textarea{
            resize:none;
        }
        button{
            display:inline;
        }
        .closeForm{
            float:right;
        }
      `}</style>
    </>
        );
    }
}
 
export default withRouter(DraggableReplyForm);