const Statistics = (props) => (
    <>  
    <div className="statistics">
        <h2>Stats</h2>
        <div>Total Replys:{props.statistics[0].totalreplycount}</div>
        <div>Top Threads: Queried on page load GetIntialProps</div>
    </div>
        {/* Content: Total Posts, Users (Use getInitialProps?) */}
        <style jsx>{`
          h2 {
            margin-left:5px;
          }
          .statistics{
            border:5px solid #99f;
            display:grid;
            grid-template-columns:minmax(320px,1200px);
            background:#eef;
          }
        `}</style>
    </>
)

export default Statistics;