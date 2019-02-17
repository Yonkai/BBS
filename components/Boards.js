import Link from 'next/link';

const Board = () => (
    <div>
        <Link href="/indivdualboard">
          <a className="boardtab">Board 1</a>
        </Link>
        <Link href="/indivdualboard">
          <a className="boardtab">Board 2</a>
        </Link>
    </div>
)

export default Board