//Modules
import IndividualBoard from '../components/IndividualBoard.js';
import Head from 'next/head';

export default () => (
    // React Fragment
    <>
      <Head>
        <title>Individual Board Title</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <IndividualBoard/>
    </>
  )