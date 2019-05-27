import Link from 'next/link';

const Header = () => (
    <>
        {/* <h1>BBS Header Component</h1> */}
        {/* <p>Content: Image logo</p> */}
        <div className="grid-header-item">
          <Link href="/">
            <a>
              <img src="../static/cat-and-header-text-mobile-s.png" alt="made by Eucalyp on flaticon."/>
            </a>
          </Link>
        </div>
        <style jsx>{`
          img{
            background:#eef;
            border:5px solid #99f;
          }
        `}</style>
    </>
)

export default Header