import {withRouter} from 'next/router'
import Layout from '../components/MyLayout.js'
import React, { Component } from 'react'


// class extends Component {
//   static getInitialProps ({ query: { id } }) {
//     return { postId: id }
//   }

const Content = withRouter((props) => (
  <div>
    <h1>{props.router.query.title}</h1>
    <p>This is being rendered with information from 'withRouter()' in NextJS.</p>
    <p>{props.router.query.id}</p>
  </div>
))

const Page = withRouter((props) => (
    <Layout>
       <Content />
    </Layout>
))

export default Page