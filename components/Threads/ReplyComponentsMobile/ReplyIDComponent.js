import ReactTooltip from 'react-tooltip';
import React from 'react';
import ReactDOM from 'react-dom';
import DraggableReplyForm from '../../DraggableReplyForm.js';
//React Tooltip docs, (awesome btw):
//https://www.npmjs.com/package/react-tooltip
//https://react-tooltip.netlify.com/

const ReplyIDComponent = (props) => (
    <>      
          <div>
            <a data-tip data-for='replyID'> No.{props.threadID}</a>
            <ReactTooltip id='replyID' type='info'>
              <span>reply</span>
            </ReactTooltip>
          </div>
            <DraggableReplyForm/>
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
)

export default ReplyIDComponent;