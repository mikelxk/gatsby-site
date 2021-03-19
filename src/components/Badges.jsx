import React from "react"
import { FaTwitter, FaBroadcastTower, FaEnvelope } from "react-icons/fa"
import { GoMarkGithub } from "react-icons/go"
const Badge = ({ Icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition duration-150 ease-in-out"
  >
    <Icon size="24" />
  </a>
)
export default () => (
  <div className="mt-10 flex gap-x-16">
    <Badge Icon={GoMarkGithub} href="https://github.com/mikelxk" />
    <Badge Icon={FaTwitter} href="https://twitter.com/mike_lxk" />
    <Badge Icon={FaEnvelope} href="mailto:mike.lxk@gmail.com" />
    <Badge Icon={FaBroadcastTower} href="https://mikelxk.github.io/" />
  </div>
)
