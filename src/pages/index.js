import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ( {data} ) => (
  <Layout>
    <SEO title="Home" />


    <h1>{data.allStrapiHome.edges[0].node.Title}</h1>
    <p>{data.allStrapiHome.edges[0].node.Descripcion}</p>
    <p>{data.allStrapiHome.edges[0].node.Imagen.url}</p>

    <img src={data.allStrapiHome.edges[0].node.Imagen[0].url} />

    <ul>
      {data.allStrapiHome.edges.map(document => {

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



  query HomeQuery{
    allStrapiHome{
      edges{
        node{
          id
          Title
          Descripcion
          Imagen{
            url
          }
        }
      }
    }
  }

`