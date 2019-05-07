import ThreadPreviewRootComponent from './Threads/ThreadPreviewMobile/ThreadPreviewRootComponent.js'; 
import React from 'react';

const IndivdualBoardsThreadsContainer = (props) => (
    <>
      <div>
      {/* Obviously this will be automated (probably in a mapping function)when the backend is implemented, it would be needed to
      have a "threads per page" functionality, for example.*/}
        <h2>Board's Thread's Container</h2>
        <p>Stickied Board Description Thread</p>
        {/* Data is queried from backend on page load or refresh. */}
        {/* Automate this with mapping. */}
        {
              //Explaination of why cond. rendering is used here:
              //https://stackoverflow.com/questions/50845894/reactjs-typeerror-cannot-read-property-map-of-undefined
              //2. Pass here as props to load info (pager info)
            props.threads && props.threads.slice(props.startIndex,props.endIndex+1).map((threads, index) =>
              // <li key={threads.id}>
              //   <Link href={`/indivdualboard?title=${boards.board_name}`}>
              //     <a>{boards.board_name}</a>   
              //   </Link>
              // </li>
              <ThreadPreviewRootComponent key={props.startIndex+index} indivdualThreadData={threads} replyCount={props.replyCount}/>
            )
        }
{/* 
        <ThreadPreviewRootComponent exclusiveThreadSlug={faker.random.number(9999999)}/>
        <ThreadPreviewRootComponent/>
        <ThreadPreviewRootComponent/>
        <ThreadPreviewRootComponent/>

        <ThreadPreviewRootComponent/>
        <ThreadPreviewRootComponent/>
        <ThreadPreviewRootComponent/>
        <ThreadPreviewRootComponent/>

        <ThreadPreviewRootComponent/>
        <ThreadPreviewRootComponent exclusiveThreadSlug={faker.random.number(9999999)}/> */}
      </div>
        <style jsx>{`
          h1 {
            font-family: "Roboto";
          }
          div{
            border:5px black solid;
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
  original:[]
}
