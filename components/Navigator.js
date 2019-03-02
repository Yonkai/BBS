const Navigator = (props) => (
    <>
      <div>
        <h1>Board Navigator Component</h1>
      </div>
        {/* Content: Total Posts, Users (Use getInitialProps?) */}
        <style jsx>{`
          h1 {
            font-family: "Roboto";
            // width:100;
          }
          div{
            border:5px black solid;
            display:grid;
            justify-self:start;
          
          }
          @media all and (max-width: 500px) {
            div{
              display:grid;
              grid-template-columns:minmax(320px,1200px)
            }
    
          }
        `}</style>
    </>
)

export default Navigator