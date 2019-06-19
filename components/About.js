const About = () => (
    <>
      <div>
          <h2>About</h2>
          <p>
            Welcome to the BBS! There are many boards and topics to discuss on this
            website, just make sure you follow the rules or you'll get banned and stuff.
          </p>
          {/* <p>(WIP)</p> */}
      </div>
        {/* Content: Information on single boards */}
        <style jsx>{`
          h2 {
            margin-left:5px;
          }
          div{
            border:5px solid #99f;
            border-radius:5px;
            display:grid;
            grid-template-columns:minmax(320px,1200px);
            background:#eef;
          }
          
        `}</style>
    </>
)

export default About;