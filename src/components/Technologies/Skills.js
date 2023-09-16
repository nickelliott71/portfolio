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
    Description: () => <>Android apps and Lambda functions</>,
  },
  {
    slug: "testing",
    Component: SiDart,
    title: "Usability testing",
    Description: () => <>Flutter apps only</>,
  },
  {
    slug: "ds",
    Component: DiJava,
    title: "Design systems",
    Description: () => <>Android apps and Lambda functions</>,
  },

  {
    slug: "accessibility",
    Component: DiHtml5,
    title: "Accessibility",
    Description: () => <>Static webpages and portfolio projects</>,
  }
];
