import Link from 'next/link';
import React from 'react';

//I keep loading the same props into this from the database but with NextJS you're only suppose to load from pages,
//have to find or look for a work around..
//props.boardNames
//Sourced from: https://css-tricks.com/solved-with-css-dropdown-menus/
//TODO: Add another navigator for the bottom to have horizontally placed anchors instead of vertical

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
              <li key={boards.boards_id}>
                <Link  href={{ pathname: '/indivdualboard', query: { boards_id:boards.boards_id, title: boards.boards_name,initialPage:1}}}>
                  <a>{boards.boards_name.padEnd(12,' ')}</a>   
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
              font-size:18px;
          }

          ul {
            list-style: none;
            margin: 0;
            padding-left: 0;
          }

          li {
            color: #fff;
            background:#99f;
            display: block;
            // float: left;
            // padding: .5rem;
            position: relative;
            text-decoration: none;
          }
            
          li a {
            color: #fff;
            text-decoration:none;
            white-space: pre;
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
          @media all and (max-width: 2200px) {
            div{
              display:grid;
              grid-template-columns:minmax(320px,2200px);
            }
    
          }
        `}</style>
    </div>
)

Navigator.defaultProps = {
  boards: [],
}


export default Navigator;