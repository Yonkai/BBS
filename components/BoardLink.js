import Link from 'next/link';

const BoardLink = (props) => (
   <div className="module">
        <Link href={{ pathname: '/indivdualboard', query: { boards_id:props.boards_id, title: props.title, initialPage:1} }} >
            <a className="boardLink">{props.title}</a>
        </Link>
 
      <style jsx>{`
        .module {
          background-color: DimGrey;
          padding: 10px;
          background:#eef;
          color:#004;
          border: 3px solid #fff;
          border-radius:5px;

        }
        
        a{
          font-size:22px;
        }
      `}</style>
  </div>
)

export default BoardLink;