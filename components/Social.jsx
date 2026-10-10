import Link from 'next/link'
import React from 'react'

import { FaGithub, FaLinkedin } from "react-icons/fa"

const socials = [
  {icon: <FaGithub />, name: "GitHub", path: "https://github.com/vhsxuz"},
  {icon: <FaLinkedin />, name: "LinkedIn", path: "https://www.linkedin.com/in/vincentius-andreas-alexander/"},
]

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link href={social.path} key={index} aria-label={social.name} className={iconStyles}>
            {social.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Social