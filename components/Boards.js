import Link from 'next/link';

const Board = () => (
    <div>
        <Link href="/board1">
          <a className="boardtab">Board 1</a>
        </Link>
        <Link href="/board2">
          <a className="boardtab">Board 2</a>
        </Link>
    </div>
)

export default Board