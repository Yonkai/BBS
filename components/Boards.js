import Link from 'next/link';
import Button from '@material-ui/core/Button';

const Board = () => (
    <div>
        <Link href="/indivdualboard">
          <Button variant="contained" color="primary">
            Board 1
          </Button>
        </Link>
        <Link href="/indivdualboard">
          <Button variant="contained" color="primary">
              Board 2
          </Button>
        </Link>
    </div>
)

export default Board