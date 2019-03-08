const IndivdualBoardsThreadsContainer = (props) => (
    <>
      <div>
        <h1>Board's Thread's Container</h1>
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
          @media all and (max-width: 800px) {
            div{
              display:grid;
              grid-template-columns:minmax(320px,1200px)
            }
        }
        `}</style>
    </>
)

export default IndivdualBoardsThreadsContainer