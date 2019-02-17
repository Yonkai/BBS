import Link from 'next/link';

const linkStyle = {
  marginRight: 15
}

const Board = () => (
    <div>
        <Link href="/board1">
          <a style={linkStyle}>Board 1</a>
        </Link>
        <Link href="/board2">
          <a style={linkStyle}>Board 2</a>
        </Link>
    </div>
)

export default Board