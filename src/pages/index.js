import Badges from "../components/Badges"
import Seo from "../components/seo"
import avatar from "../images/avatar.webp"

const IndexPage = () => (
  <div className="mx-auto max-w-screen-md px-4 sm:px-6 md:px-8 my-12 sm:my-20 md:my-32">
    <Seo title="Home" />
    <div className="flex flex-col sm:flex-row">
      <img
        className="w-24 h-24 md:w-32 md:h-32 rounded-full"
        src={avatar}
        alt="avatar"
      />
      <div className="mt-8 sm:mt-0 sm:ml-8 flex flex-col justify-center">
        <p className="text-2xl md:text-3xl leading-tight">Hi, I'm</p>
        <h1 className="leading-tight">Xiaokai Li</h1>
      </div>
    </div>
    <p className="mt-10 text-lg leading-7">
      I'm currently an undergraduate at University of Florida. Interested in C++
      and Javascript.
    </p>
    <Badges />
    {/* <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p> */}
  </div>
)

export default IndexPage
