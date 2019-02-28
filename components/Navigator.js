const Navigator = (props) => (
    <>
      <div>
        <h1>BBS Navigator Component</h1>
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
        `}</style>
    </>
)

export default Navigator