import React from "react"
import {
  FaRegFilePdf,
  FaLinkedin,
  FaGithubSquare,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare
} from "react-icons/fa";




const data = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/slava1",
  },
  {
    id: 3,
    icon: <FaRegFilePdf className="social-icon"></FaRegFilePdf>,
    url: "slava-resume.pdf",
  },
  {
    id: 4,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/slavavisuals",
  },
  {
    id: 5,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/slavavisuals",
  },
  {
    id: 6,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://twitter.com/slavavisuals",
  },
  {
    id: 7,
    icon: <FaInstagramSquare className="social-icon"></FaInstagramSquare>,
    url: "https://www.instagram.com/slavavisuals",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})


export default ({ styleClass }) => {
  return (

    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
