import Link from 'next/link';

const BoardLink = (props) => (
   <div className="module">
        <Link href={{ pathname: '/indivdualboard', query: { boards_id:props.boards_id, title: props.title} }} >
            <a className="boardLink">{props.title}</a>
        </Link>
 
      <style jsx>{`
        .module {
          background-color: DimGrey;
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

export default BoardLink;