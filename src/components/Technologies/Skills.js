import { DiAndroid, DiTerminal, DiJava, DiHtml5 } from "react-icons/di";
import { SiFirebase, SiGit, SiDart, SiCss3, SiMysql, SiAmazonaws } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";
import { TbBrandKotlin } from "react-icons/tb";

export const Skills = [
  {
    slug: "research",
    Component: DiAndroid,
    title: "User research",
    Description: () => <><p>Run research projects, identifying the real problems that will make a difference to your service or product.</p><p>Host sessions and create resources that help bring stories to life and excite your whole product team.</p></>,
  },
  {
    slug: "ideation",
    Component: RiFlutterFill,
    title: "Ideation & design",
    Description: () => <><p>Help engage your whole product and development team with a problem or insight. Ideate towards solutions that will elevate you above your competitors.</p></>,
  },
  {
    slug: "prototyping",
    Component: TbBrandKotlin,
    title: "Prototyping",
    Description: () => <><p>Help turn your ideas into something you can test and learn from.</p><p>From low fidelity prototypes, such as sketches, to more polished and complex artefacts using Figma or similar prototyping tools.</p></>,
  },
  {
    slug: "testing",
    Component: SiDart,
    title: "Usability testing",
    Description: () => <><p>Run tests to ensure you are solving the right problems in the right way.</p><p>Help get you meaningful feedback and insights that will further improve your service or app.</p></>,
  },
  {
    slug: "reviews",
    Component: DiHtml5,
    title: "Design reviews",
    Description: () => <><p>Help run reviews of existing apps or new designs, falling back on my 20 years of usability experience and best practice to give you insights that will help you improve the experiences you create.</p></>,
  },
  {
    slug: "ds",
    Component: DiJava,
    title: "Design systems",
    Description: () => <><p>Consult on how to make the most out of your design system and help create efficiencies throughout the design and development process.</p></>,
  },
  {
    slug: "accessibility",
    Component: DiHtml5,
    title: "Accessibility",
    Description: () => <><p>Perform accessibility audits on your apps. Help teams with strategies to resolve issues early in your development process</p></>,
  }
];
