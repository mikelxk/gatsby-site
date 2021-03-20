import * as React from "react"

import SEO from "../components/seo"

const NotFoundPage = () => (
  <div className="mx-auto max-w-screen-md px-4 sm:px-6 md:px-8 my-12 sm:my-20 md:my-32">
    <SEO title="404: Not found" />
    <h1 className="font-semibold text-2xl md:text-3xl">404: Not Found </h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
)

export default NotFoundPage
