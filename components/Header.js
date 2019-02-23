const Header = () => (
    <>
        <h1>BBS Header Component</h1>
        {/* <p>Content: Image logo</p> */}
        <div>
          <img src="../static/cat-and-header-text.png" alt="made by Eucalyp on flaticon."/>
        </div>
        <style jsx>{`
          h1 {
            font-family: "Roboto";
          }
        `}</style>
    </>
)

export default Header