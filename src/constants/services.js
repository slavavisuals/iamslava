
import React from "react"

import { FaLaptopCode, FaDrawPolygon, FaRegListAlt } from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaLaptopCode className="service-icon" />,
    title: "Web Development",
    text: `I design and develop websites and web applications from scratch and provide flexible services to meet needs of your project, whether it is landing page, enterprise site or online shop`,
  },
  {
    id: 2,
    icon: <FaDrawPolygon className="service-icon" />,
    title: "User Experience (UX)",
    text: `I always ensure that the end user is at the heart of my design considerations, and offer a range of design services from UX research to interaction design, as well as full usability audit`,
  },
  {
    id: 3,
    icon: <FaRegListAlt className="service-icon" />,
    title: "Custom Applications",
    text: `Whether it is React JS app or Angular, Svelte JS or Vue, I take your requirements and help you through a procedure to choose right technology and develop the app into a real working solution`,
  },
]
