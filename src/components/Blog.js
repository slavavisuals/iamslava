import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"

//because in the Blogs.js we used ...spread to pass all blogs properties we can now access them here
const Blog = ({id, title, image, date, category, slug, desc}) => {
  return <Link to={`/blogs/${slug}`} className="blog" key={id}>
    <article>
      <Image fluid={image.childImageSharp.fluid} className="blog-img" />
      <div className="blog-card">
        <h4>{title}</h4>
        <p className="slava">{desc}</p>
        <div className="blog-footer">
          <p>{category}</p>
          <p>{date}</p>
        </div>
      </div>
    </article>
    </Link>
}

Blog.propTypes = {}

export default Blog
