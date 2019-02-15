import Layout from '../components/MyLayout.js';
import React from 'react';
import Link from 'next/link';
import "../styles2.scss";

const PostLink = (props) => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <h1 className="example">Heading 1</h1>
    <ul>
      <PostLink title="List Item 1"/>
      <PostLink title="List Item 2"/>
      <PostLink title="List Item 3"/>
    </ul>
  <ul>
    <li>
      <Link href='/b' as='/a'>
        <a>a</a>
      </Link>
    </li>
    <li>
      <Link href='/a' as='/b'>
        <a>b</a>
      </Link>
    </li>
    <li>
      <Link href={{ pathname: '/post', query: { id: '2000' } }} as='/posts/2'>
        <a>post #2</a>
      </Link>
    </li>
  </ul>
  </Layout>
)