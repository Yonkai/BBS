import Link from 'next/link';

const Footer = () => (
    <div>
        <h1>BBS Footer Component</h1>
        {/* Content:   */}
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
        <style jsx>{`
          h1 {
            font-family: "Roboto";
          }
          a{
            display:block;
          }
        `}</style>
    </div>
    
)

export default Footer