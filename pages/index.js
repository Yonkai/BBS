import Layout from '../components/MyLayout.js'
import Link from 'next/link'

const PostLink = (props) => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <h1>Heading 1</h1>
    <ul>
      <PostLink title="List Item 1"/>
      <PostLink title="List Item 2"/>
      <PostLink title="List Item 3"/>
    </ul>
  </Layout>
)