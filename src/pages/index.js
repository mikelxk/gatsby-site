import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Badges from "../components/Badges"
import SEO from "../components/seo"

const IndexPage = () => (
  <div className="mx-auto max-w-screen-md px-4 sm:px-6 md:px-8 my-12 sm:my-20 md:my-32">
    <SEO title="Home" />
    <div className="flex flex-col sm:flex-row">
      <StaticImage
        className="w-24 md:w-32 md:h-32 rounded-full"
        src="../images/avatar.webp"
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="avatar"
      />
      <div className="mt-8 sm:mt-0 sm:ml-8 flex flex-col justify-center">
        <p>Hi, I'm</p>
        <h1>Xiaokai Li</h1>
      </div>
    </div>
    <p className="mt-10 text-lg leading-7 text-gray-900 dark:text-gray-100">
      I'm currently an undergraduate at University of Florida. I'm interested in
      C++ and TypeScript.
    </p>
    <Badges />
    {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p> */}
  </div>
)

export default IndexPage
