import Link from 'next/link';

const BoardLink = (props) => (
    <span>
        <Link href={{ pathname: '/indivdualboard', query: { title: props.title } }} as ={props.title} >
            <a className="boardLink">{props.title}</a>
        </Link>
      <style jsx>{`
        .boardLink {
          margin-right: 15px;
        }
      `}</style>
    </span>
)

export default BoardLink