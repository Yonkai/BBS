import ThreadPreviewRootComponent from './Threads/ThreadPreviewMobile/ThreadPreviewRootComponent.js'; 

const IndivdualBoardsThreadsContainer = (props) => (
    <>
      <div>
      {/* Obviously this will be automated (probably in a mapping function)when the backend is implemented, it would be needed to
      have a "threads per page" functionality, for example.*/}
        <h1>Board's Thread's Container</h1>
        <ThreadPreviewRootComponent/>
        <ThreadPreviewRootComponent/>
        <ThreadPreviewRootComponent/>
        <ThreadPreviewRootComponent/>

        <ThreadPreviewRootComponent/>
        <ThreadPreviewRootComponent/>
        <ThreadPreviewRootComponent/>
        <ThreadPreviewRootComponent/>

        <ThreadPreviewRootComponent/>
        <ThreadPreviewRootComponent/>
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
          @media all and (max-width: 520px) {
            div{
              display:grid;
              grid-template-columns:minmax(320px,1200px);
            }
        }
        `}</style>
    </>
)

export default IndivdualBoardsThreadsContainer