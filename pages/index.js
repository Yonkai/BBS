import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import Header from '../components/Header.js';
import Boards from '../components/Boards.js';
import Footer from '../components/Footer.js';
import Footer from '../components/Statistics.js';
import "../styles.scss";


const PostLink = (props) => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => (
  // React Fragment
  <>
    <Header/>
    <Boards/>
    <Statistics/>
    <Footer/>
  </>
)