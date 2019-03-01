import Link from 'next/link';

const Footer = () => (
    <>
        <div>
          <h1>BBS Footer Component</h1>
          {/* Content:*/}
          <Link href="/">    
          <a>Home Page</a>   
          </Link>
          <Link href="/news">
            <a>News</a>
          </Link>
          <Link href="faq">
            <a>F.A.Q.</a>
          </Link>
          <p>© 2019</p>
        </div>
          <style jsx>{`
            h1 {
              font-family: "Roboto";
            }
            a{
              display:inline;
              margin-right:20px;
            }
            div{
              border:5px black solid;
              display:grid;
              grid-template-columns:minmax(320px,1200px);
            }
          `}</style>
    </>
    
)

export default Footer