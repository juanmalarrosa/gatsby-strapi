import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ( {data} ) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <ul>
      {data.allStrapiArticles.edges.map(document => {

          return(
          <li>
              <Link to={`/${document.node.id}`}>
              {document.node.Title}
              </Link>
          </li>
          )
            
      })}

    </ul>

  </Layout>
)

export default IndexPage


export const pageQuery = graphql`

  query IndexQuery {
    allStrapiArticles{
      edges{
        node{
          id
          Title
        }
      }
    }
  }

`