const Statistics = (props) => (
    <>  
    <div className="statistics">
        <h1>BBS Statistics Component</h1>
    </div>
        {/* Content: Total Posts, Users (Use getInitialProps?) */}
        <style jsx>{`
          h1 {
            font-family: "Roboto";
          }
          .statistics{
            border:5px solid black;
            width:900px;
          }
        `}</style>
    </>
)

export default Statistics