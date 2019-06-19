import React, { Component } from 'react';
import Draggable, {DraggableCore} from 'react-draggable'; // Both at the same time
import {withRouter} from 'next/router';
import axios from 'axios';
import Recaptcha from 'react-recaptcha';

class DraggableReplyForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
        this.state = {
            isVerified:false
        }
    };

    verifyCallback(response){
        if(response){
            this.setState({
                isVerified:true
            })
        }
    }

    recaptchaLoaded(){
        console.log('captcha loaded');
    }
    
    handleSubmit(event) {
        event.preventDefault();
        if(this.state.isVerified){
            if(this.props.isThisPartOfAnExclusiveThread){
                console.info('Console say: You are a human.');
                axios.post('http://localhost:4000/api/createreply', {
                    name: this.props.name,
                    comments: this.props.comments,
                    threadsthreadsid:this.props.router.query.threadID,
                    threadsboardsboardsid:this.props.router.query.boardID
                });

                if(this.props.handleOptimisticReplys){
                    this.props.handleOptimisticReplys(
                        this.props.name,
                        this.props.comments,

                    );
                }
            }
            }
        }

    render() {
        return (
    <>
         <div>
            <Draggable
                axis="both"
                bounds="body"
                handle=".draggable-form-container-handle"
                position={null}
                positionOffset= {{x: '-200%' , y: '0%'}}
                grid={[25, 25]}
                scale={1}
            > 
            <div>
                {
                    this.props.draggableReplyFormVisibility?
                    <div className="centered-form draggable-form-container-handle">
                    <button className='closeForm' onClick={this.props.changeDraggableFormVisibility}>X</button>
                     <div>  
                        <form  onSubmit={this.handleSubmit} className="pure-form pure-form-stacked">
                            <input onMouseDown={(e) => {e.stopPropagation()}} placeholder="name" onChange={this.props.handleChange("name")} 
                             required value={this.props.name} 
                             type="text" name="name" id="name" maxLength="12"/>
                            <textarea onMouseDown={(e) => {e.stopPropagation()}} autoFocus type='text' 
                            onChange={this.props.handleChange("comments")} required
                             maxLength="300" value={this.props.comments}
                            name="comments" id="comments" placeholder="comments"
                            rows="3" cols="22"/>
                            <Recaptcha
                            sitekey="6LdRu6kUAAAAADJKt4O2u0MADCH_Z5GNXUSgcRTX"
                            render="explicit"
                            onloadCallback={this.recaptchaLoaded}
                            verifyCallback={this.verifyCallback}
                            theme="dark"
                            // size="compact"
                            />
                        <button>Send!</button>
                        </form> 
                    </div>
                </div>:null
                }
            </div> 
            </Draggable>
        </div>
      <style jsx>{`
        .centered-form{
            position:absolute;
            left:30%;
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