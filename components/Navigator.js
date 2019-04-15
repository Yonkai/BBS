import Link from 'next/link';
import React from 'react';

//props.boardNames
const Navigator = (props) => (
    <div>
    <div id="navigationMenu">
        <nav role="navigation">
        <ul>
          <li><a href="#">Boards</a>
          <ul className="dropdown">
            {
              //Explaination of why cond. rendering is used here:
              //https://stackoverflow.com/questions/50845894/reactjs-typeerror-cannot-read-property-map-of-undefined

            props.boards && props.boards.map((boards) =>
              <li key={boards.id}>
                <Link href={`/indivdualboard?title=${boards.board_name}`}>
                  <a>{boards.board_name}</a>   
                </Link> 
              </li>
            )
            }
          </ul>
         </li>
        </ul>
      </nav>
    </div>
    
         {/* Content: Total Posts, Users (Use getInitialProps?) */}
        <style jsx>{`
          #navigationMenu{
            justify-self:stretch;
          }
          
          nav {
              font-family: monospace;
              font-size:14px;
          }

          ul {
            list-style: none;
            margin: 0;
            padding-left: 0;
          }

          li {
            color: #fff;
            background: darkorange;
            display: block;
            // float: left;
            // padding: .5rem;
            position: relative;
            text-decoration: none;
          }
            
          li a {
            color: #fff;
            text-decoration:none; 
          }

          li:hover,
          li:focus-within {
              background:rgba(255,0,0,.25);
              cursor: pointer;
          }

          ul li ul {
            background: rgba(200,100,0,.25);
            visibility: hidden;
            opacity: 0;
            min-width: 5rem;
            position: absolute;
            left: 0;
            display: none;
          }

          ul li:hover > ul,
          ul li:focus-within > ul,
          ul li ul:hover,
          ul li ul:focus {
            visibility: visible;
            opacity: 1;
            display: block;
          }

          ul li ul li {
            clear: both;
            width: 100%;
          }
          @media all and (max-width: 520px) {
            div{
              display:grid;
              grid-template-columns:minmax(320px,1200px);
            }
    
          }
        `}</style>
    </div>
)

Navigator.defaultProps = {
  boards: [],
}


export default Navigator;