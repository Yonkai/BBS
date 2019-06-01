import React, { Component } from 'react';
import Draggable from 'react-draggable';

class DraggableReplyForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            visiblity: false,
            name:'anon',
            subject:'',
            comments:''
         }
    };
    render() { 
        return (
         <div>
            <Draggable
                axis="both"
                bounds="body"
                handle=".draggable-form-container-handle"
                defaultPosition={{x: 0, y: 0}}
                position={null}
                grid={[25, 25]}
                scale={1}
            >
                <div className='draggable-form-container-handle'>
                    Form Here
                </div>
            </Draggable>
      <style jsx>{`
        .draggable-form-container-handle{
            width:200px;
            height:200px;
            background:red;
        }
      `}</style>
        </div>
        );
    }
}
 
export default DraggableReplyForm;