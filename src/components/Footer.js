import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return <footer className="footer">
    <div>
      <SocialLinks styleClass="footer-links"></SocialLinks>
      <h4>copyright&copy; {new Date().getFullYear()}
      <span> iamslava </span>
      </h4>
    </div>
  </footer>
}

export default Footer
