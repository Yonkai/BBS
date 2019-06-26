import ThreadPreviewRootComponent from './Threads/ThreadPreviewMobile/ThreadPreviewRootComponent.js'; 
import React from 'react';

const IndivdualBoardsThreadsContainer = (props) => (
    <>
      <div>
      {/* slice and map information queried from RESTful API from mySQL database */}
        {
              //Explaination of why cond. rendering is used here:
              //https://stackoverflow.com/questions/50845894/reactjs-typeerror-cannot-read-property-map-of-undefined
            props.threads && props.threads.slice(props.startIndex,props.endIndex+1).map((threads, index) =>
              <ThreadPreviewRootComponent key={props.startIndex+index} indivdualThreadData={threads} replyCount={props.replyCount} router={props.router} currentPage={props.currentPage}/>
            )
        }

      </div>
        <style jsx>{`
          h1 {
            font-family: "Roboto";
          }
          div{
            // border:5px black solid;
            display:grid;
            justify-self:start;
          }
          // need to decompose this rule, someway to do it in nextjs way..
          p{
            margin:5px;
          }
          @media all and (max-width: 520px) {
            div{
              display:grid;
              grid-template-columns:minmax(320px,1200px);
            }
        }
        `}</style>
    </>
)

export default IndivdualBoardsThreadsContainer;

IndivdualBoardsThreadsContainer.defaultProps = {
  threads:[],
}
