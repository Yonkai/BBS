const About = () => (
    <>
      <div>
          <h2>BBS About Component</h2>
          <p>Welcome to the Cat Bullentein Board System! Here you can dicuss a various range of topics related to stuff.</p>
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