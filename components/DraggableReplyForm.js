import React, { Component } from 'react';
import Draggable from 'react-draggable';

class DraggableReplyForm extends Component {
    constructor(props) {
        super(props);

    };
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
                        <form className="pure-form pure-form-stacked">
                            <input placeholder="name" onChange={this.props.handleChange("name")} 
                             required value={this.props.name} 
                             type="text" name="name" id="name" maxLength="12"/>
                            <textarea autoFocus type='text' 
                            onChange={this.props.handleChange("comments")} required
                             maxLength="300" value={this.props.comments}
                            name="comments" id="comments" placeholder="comments"
                            rows="3" cols="22"/>

                        </form> 
                        <button>Send!</button>
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
 
export default DraggableReplyForm;