import { GrAccessibility } from "react-icons/gr";
import { FaRegLightbulb, FaListCheck, FaRegEye, FaMicrochip, FaFigma } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { LuToyBrick } from "react-icons/lu";
import { SiMaterialdesignicons } from "react-icons/si";
import { ImAccessibility } from "react-icons/im";

export const Skills = [
  {
    slug: "ds",
    Component: LuToyBrick,
    title: "Design systems",
    Description: () => <><p>I have worked on multiple design systems that drive measurable impact.</p><p>I  specialise in creating systems that promote consistency, efficiency, and scalability across your organisation.</p><p><a href="https://www.linkedin.com/in/nickelliott/">Find me on LinkedIn</a> to chat about how I can help with design system reviews and consultancy.</p></>,
  },
  {
    slug: "figma",
    Component: FaFigma,
    title: "Figma UI libraries",
    Description: () => <><p>With my Figma experience, I can build and maintain comprehensive Figma UI libraries that align designers and developers.</p><p>Code is where the rubber hits the road. I specialise in creating developer friendly libraries, enabling speedier handovers and opening the way for AI-enabled technologies.</p></>,
  },
  {
    slug: "prototyping",
    Component: SiMaterialdesignicons,
    title: "Prototyping",
    Description: () => <><p>I can help turn your ideas into reality.  Within a short time, I can create artefacts that you can test and learn from.</p><p>From low-fidelity wireframes to more polished high-fidelity prototypes, or even coded proof of concepts. I can help you build and test your ideas.</p><p>I can also advise on the latest UX trends and emerging technologies, including how AI can complement your user experience.</p></>,
  },
  {
    slug: "research",
    Component: FaUserFriends,
    title: "User research",
    Description: () => <><p>Without research, you are guessing.</p><p>I can help organise and run research projects, identifying real and immediate opportunities that will make a difference to your company, service or product.</p><p>I can host sessions and create resources that help bring stories to life and excite your whole product team.</p></>,
  },
  /*{
    slug: "ideation",
    Component: FaRegLightbulb,
    title: "Ideation & design",
    Description: () => <><p>Help engage your whole product and development team with a problem or insight. Ideate towards solutions that will elevate you above your competitors.</p></>,
  },*/
  /*{
    slug: "reviews",
    Component: FaRegEye,
    title: "Reviews and critiques",
    Description: () => <><p>Using my experience across many successful projects, I can help you evaluate existing apps or new designs through usability reviews and critiques.</p><p>Reviews highlight opportunities to improve the user experience and ensure you are focused on solving the right problems.</p></>,
  },*/
  {
    slug: "testing",
    Component: FaListCheck,
    title: "Usability testing",
    Description: () => <><p>I can help organise and run usability tests on your experiences to ensure you are solving the right problems in the right way.</p><p>Testing helps you get meaningful feedback and insights that will further improve your service or application.</p></>,
  },

  {
    slug: "accessibility",
    Component: ImAccessibility,
    title: "Accessibility",
    Description: () => <><p>I've been an advocate of accessibility in web design for over 20 years.  Although it's always better to perform accessibility audits with people who use assistive technologies, I can perform a quick audit to give you an overview.</p><p>I can also help teams with strategies to resolve accessibility issues early in your design & development processes.</p></>,
  },
  /*{
    slug: "emerging",
    Component: FaMicrochip,
    title: "Emerging technologies",
    Description: () => <><p>Advise on the latest UX trends and emerging technologies, including how to make the most of AI tools in the workplace.</p></>,
  }*/
];
