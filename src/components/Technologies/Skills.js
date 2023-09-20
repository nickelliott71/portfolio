import { DiAndroid, DiTerminal, DiJava, DiHtml5 } from "react-icons/di";
import { SiFirebase, SiGit, SiDart, SiCss3, SiMysql, SiAmazonaws } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";
import { TbBrandKotlin } from "react-icons/tb";


import { GrAccessibility } from "react-icons/gr";
import { SiMaterialdesignicons } from "react-icons/si";

export const Skills = [
  {
    slug: "research",
    Component: GrAccessibility,
    title: "User research",
    Description: () => <><p>Run research projects, identifying the real problems that will make a difference to your service or product.</p><p>Host sessions and create resources that help bring stories to life and excite your whole product team.</p></>,
  },
  {
    slug: "ideation",
    Component: GrAccessibility,
    title: "Ideation & design",
    Description: () => <><p>Help engage your whole product and development team with a problem or insight. Ideate towards solutions that will elevate you above your competitors.</p></>,
  },
  {
    slug: "prototyping",
    Component: SiMaterialdesignicons,
    title: "Prototyping",
    Description: () => <><p>Help turn your ideas into something you can test and learn from.</p><p>From low fidelity prototypes, such as sketches, to more polished and complex artefacts using Figma or similar prototyping tools.</p></>,
  },
  {
    slug: "testing",
    Component: GrAccessibility,
    title: "Usability testing",
    Description: () => <><p>Run tests to ensure you are solving the right problems in the right way.</p><p>Help get you meaningful feedback and insights that will further improve your service or app.</p></>,
  },
  {
    slug: "reviews",
    Component: GrAccessibility,
    title: "Reviews and critiques",
    Description: () => <><p>Help evaluate existing apps or new designs through usability reviews and critiques.</p><p>This will highlight insights that will help you improve the experiences you create.</p></>,
  },
  {
    slug: "ds",
    Component: GrAccessibility,
    title: "Design systems",
    Description: () => <><p>Consult on how to make the most out of your design system and help create consistency and efficiency throughout the design and development process.</p></>,
  },
  {
    slug: "accessibility",
    Component: GrAccessibility,
    title: "Accessibility",
    Description: () => <><p>Perform accessibility audits on your apps.</p><p>Help teams with strategies to resolve issues early in your development process.</p></>,
  },
  {
    slug: "emerging",
    Component: GrAccessibility,
    title: "Emerging technologies",
    Description: () => <><p>Advise on the latest UX trends and emerging technologies, including how to make the most of AI tools in the workplace.</p></>,
  }
];
