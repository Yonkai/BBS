const ReplyOptions = (props) => (
    <>
      <div>
          <p>ReplyOptions</p>
      </div>
        <style jsx>{`
          p {
            font-family: "Roboto";
          }
          div{
            border:5px olive solid;
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

export default ReplyOptions