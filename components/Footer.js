import Link from 'next/link';

const Footer = () => (
    <div>
        <h1>BBS Footer Component</h1>
        <p>Content:</p>   
        <Link href="/">    
         <a>Home Page</a>   
        </Link>
        <p> News, FAQ, Copyright</p>
        <style jsx>{`
          h1 {
            font-family: "Roboto";
          }
        `}</style>
    </div>
    
)

export default Footer