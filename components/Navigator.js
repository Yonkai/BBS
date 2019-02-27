const Navigator = (props) => (
    <>
     <div>
        <h1>BBS Navigator Component</h1>
      </div>
        {/* Content: Total Posts, Users (Use getInitialProps?) */}
        <style jsx>{`
          h1 {
            font-family: "Roboto";
          }
          div{
            border:5px black solid;
            display:grid;
            grid-template-columns:minmax(320px,1200px);
          }s
        `}</style>
    </>
)

export default Navigator