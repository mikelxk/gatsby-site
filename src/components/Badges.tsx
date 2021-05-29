import React from "react"
import { FaTwitter, FaBroadcastTower, FaEnvelope } from "react-icons/fa"
import { GoMarkGithub } from "react-icons/go"
import { IconType } from "react-icons/lib"
const Badge = ({
  Icon,
  href,
  text,
}: {
  Icon: IconType
  href: string
  text: string
}) => (
  <a
    href={href}
    aria-label={text}
    className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition duration-150 ease-in-out"
  >
    <Icon size="24" />
  </a>
)
const Badges = () => (
  <div className="mt-10 flex gap-x-16">
    <Badge
      Icon={GoMarkGithub}
      href="https://github.com/mikelxk"
      text="Github"
    />
    <Badge
      Icon={FaTwitter}
      href="https://twitter.com/mike_lxk"
      text="Twitter"
    />
    <Badge Icon={FaEnvelope} href="mailto:mike.lxk@gmail.com" text="Email" />
    <Badge
      Icon={FaBroadcastTower}
      href="https://mikelxk.github.io/"
      text="Blog"
    />
  </div>
)

export default Badges
