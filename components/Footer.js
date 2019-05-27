import Link from 'next/link';

const Footer = () => (
    <>
        <div className="mainFooterContainer">
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
              <span>© 2019</span> 
              </div>
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
              margin-top:20px;
            }
            .mainFooterContainer{
              border:5px solid #99f;
              background:#eef;
              display:grid;
              grid-template-columns:minmax(320px,1200px);
            }
          `}</style>
    </>
    
)

export default Footer