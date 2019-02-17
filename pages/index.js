//Modules
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

//components
import Header from '../components/Header.js';
import Boards from '../components/Boards.js';
import Footer from '../components/Footer.js';
import Statistics from '../components/Statistics.js';
import About from '../components/About.js';

//styles
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
    <Head>
      <title>BBS title</title>
    </Head>
    <Header/>
    <Boards/>
    <About/>
    <Statistics/>
    <Footer/>
  </>
)