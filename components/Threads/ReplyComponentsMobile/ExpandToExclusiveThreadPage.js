var faker = require('faker');
import Link from 'next/link';

const ExpandToExclusiveThreadPage = (props) => (
    <>
      <div>
        <Link href={{ pathname: 'exclusivethread', query: { t: props.exclusiveThreadSlug } }} >
            <a className="boardLink">Expand Thread</a>
        </Link>
      </div>
        <style jsx>{`
          p {
            font-family: "Roboto";
            margin:0;

          }
          div{
            border:5px GreenYellow solid;
          
          }
        `}</style>
    </>
)

export default ExpandToExclusiveThreadPage