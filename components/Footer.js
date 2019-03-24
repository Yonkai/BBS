import Link from 'next/link';

const Footer = () => (
    <>
        <div className="mainFooterContainer">
          <h2>BBS Footer Component</h2>
              {/* Content: */}
              <div className="linkGroup"> 
                <Link href="/">    
                <a>Home Page</a>   
                </Link>
                <Link href="/news">
                  <a>News</a>
                </Link>
                <Link href="/faq">
                  <a>F.A.Q.</a>
                </Link>
                <Link href="/rules">
                  <a>Rules</a>
                </Link>
              </div>
              <p>© 2019</p>
            </div>

          <style jsx>{`
            h1 {
              font-family: "Roboto";
            }
            a{
              margin-right:20px;
            }
            .linkGroup{
              display:grid;
              grid-template-columns:1fr 1fr 1fr 1fr;
            }
            .mainFooterContainer{
              border:5px solid black;
              display:grid;
              grid-template-columns:minmax(320px,1200px);
            }
          `}</style>
    </>
    
)

export default Footer