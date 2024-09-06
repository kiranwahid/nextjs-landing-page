import Image from "next/image";
import { Fragment } from "react";
import Navbar from "./navbar/page";
import Herosection from "./herosection/page";
import About from "./about/page";
import Courses from "./courses/page";
import Contact from "./contact/page";
import Footer from "./footer/page";


export default function Home() {
  return (
<Fragment>
  <Navbar/>
<Herosection/>
<About/>
<Courses/>
<Contact/>
<Footer/>
</Fragment>

  );
}
