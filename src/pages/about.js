import Home3Team from "../components/Team/Home3Team";
import About3 from "../components/about/About3";
import Home3Blog from "../components/blog/Home3Blog";
import Choose6 from "../components/choose/Choose6";
import Breadcrumb from "../components/common/Breadcrumb";
import Home3Contact from "../components/contact/Home3Contact";
import Feature4 from "../components/features/Feature4";
import Layout from "../components/layout/Layout";
import Partnar4 from "../components/partner/Partnar4";
import Testimonial3 from "../components/testimonial/Testimonial3";
import { authAtom, usersAtom } from "../../_state";
import { useRecoilState, useRecoilValue } from "recoil";
function AboutPage() {
  const user = useRecoilValue(usersAtom);
  return (
    <Layout>
      <Breadcrumb
        pageList="About"
        title="Get To Know About Softconic"
        pageName="ABOUT"
      />
      <About3 />
      <Choose6 />
      <Feature4 />
      <Partnar4 />
      <Testimonial3 />
      <Home3Team />
      <Home3Contact />
      <Home3Blog />
      <div className="bg-blue-500 text-white p-4 text-center">
        This is an example component using Tailwind CSS.
      </div>
    </Layout>
  );
}

export default AboutPage;
