import Link from 'next/link';

const Board = () => (
    <div>
        <Link href="/indivdualboard">
            <a className="boardLink">Board 1</a>
        </Link>
        <Link href="/indivdualboard">
            <a className="boardLink">Board 2</a>
        </Link>
      <style jsx>{`
        .boardLink {
          margin-right: 15px;
        }
      `}</style>
    </div>
)

export default Board