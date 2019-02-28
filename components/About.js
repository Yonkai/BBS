const About = () => (
    <>
      <div>
          <h1>BBS About Component</h1>
      </div>
        {/* Content: Information on single boards */}
        <style jsx>{`
          h1 {
            font-family: "Roboto";
          }
          div{
            border:5px black solid;
            display:grid;
            grid-template-columns:minmax(320px,1200px);
          }

          
        `}</style>
    </>
)

export default About