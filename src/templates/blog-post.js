import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import { Disqus } from "gatsby-plugin-disqus"
import Packages from "../components/packages"
import { PostPagination } from "../components/post-pagination"

class BlogPostTemplate extends React.Component {
  render() {
    const { frontmatter, html, excerpt } = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { location, pageContext } = this.props
    const { next, previous } = pageContext
    const {
      title,
      description,
      date,
      image,
      dsq_thread_id,
      permalink,
    } = frontmatter
    const disqusConfig = {
      url: `${permalink}`,
      identifier: dsq_thread_id || permalink,
      title: title,
    }
    return (
      <Layout location={location} title={siteTitle} footer={<Packages />}>
        <SEO title={title} description={description || excerpt} />
        <Bio />
        <article className="blog-post">
          <PostPagination previous={previous} next={next} />
          <header class="title">
            <h1>{title}</h1>
            <p
              className="content"
              style={{
                ...scale(-1 / 5),
                marginBottom: rhythm(1),
              }}
            >
              {date}
            </p>
            {image && (
              <Image
                className="image"
                fluid={image.childImageSharp.fluid}
                style={{ height: "25rem" }}
              />
            )}
          </header>
          <section
            className="content is-medium"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <footer>
            <Bio />
          </footer>
        </article>

        <PostPagination previous={previous} next={next} />
        <Disqus config={disqusConfig} />
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        dsq_thread_id
        permalink
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tags
      }
    }
  }
`
