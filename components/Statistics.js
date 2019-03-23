const Statistics = (props) => (
    <>  
    <div className="statistics">
        <h2>BBS Statistics Component</h2>
        <div>Total Posts:</div>
        <div>Total Threads:</div>
        <div>Top Threads:</div>
    </div>
        {/* Content: Total Posts, Users (Use getInitialProps?) */}
        <style jsx>{`
          h1 {
            font-family: "Roboto";
          }
          .statistics{
            border:5px solid black;
            display:grid;
            grid-template-columns:minmax(320px,1200px);
          }
        `}</style>
    </>
)

export default Statistics