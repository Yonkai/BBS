const Navigator = (props) => (
    <>
      <div>
        <h3>Board Navigator Component</h3>
        <select ClassName="boardNavigatorMobile">
        {/* TODO: Interpolate the options through props to go to other boards: */}
          <option value="Board1">Board-1 ->Topic</option>
          <option value="Board2">Board-2 ->Topic</option>
          <option value="Board3">Board-3 ->Topic</option>
        </select>
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
          @media all and (max-width: 520px) {
            div{
              display:grid;
              grid-template-columns:minmax(320px,1200px)
            }
    
          }
        `}</style>
    </>
)

export default Navigator