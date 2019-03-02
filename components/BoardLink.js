import Link from 'next/link';

const BoardLink = (props) => (
   <div className="module">
        <Link href={{ pathname: '/indivdualboard', query: { title: props.title } }} >
            <a className="boardLink">{props.title}</a>
        </Link>
 
      <style jsx>{`
        .module {
          background-color: deepPink;
          padding: 20px;
          color: #fff;
          border: 1px solid #fff;
        }
        a{
          font-size:24px;

        }
      `}</style>
  </div>
)

export default BoardLink