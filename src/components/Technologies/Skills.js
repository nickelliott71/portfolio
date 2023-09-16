import { DiAndroid, DiTerminal, DiJava, DiHtml5 } from "react-icons/di";
import { SiFirebase, SiGit, SiDart, SiCss3, SiMysql, SiAmazonaws } from "react-icons/si";
import { RiFlutterFill } from "react-icons/ri";
import { TbBrandKotlin } from "react-icons/tb";

export const Skills = [
  {
    slug: "research",
    Component: DiAndroid,
    title: "User research",
    Description: () => <>Run research projects, identifying the real problems that will make a difference to your service or product. <br/>Host sessions and create resources that help bring stories to life and excite your whole product team.</>,
  },
  {
    slug: "ideation",
    Component: RiFlutterFill,
    title: "Ideation & design",
    Description: () => <>Help teams take a problem or insight and work through solutions that will elevate you above your competitors.</>,
  },
  {
    slug: "kotlin",
    Component: TbBrandKotlin,
    title: "Kotlin",
    Description: () => <>Android apps and Lambda functions</>,
  },
  {
    slug: "dart",
    Component: SiDart,
    title: "Dart",
    Description: () => <>Flutter apps only</>,
  },
  {
    slug: "java",
    Component: DiJava,
    title: "Java",
    Description: () => <>Android apps and Lambda functions</>,
  },

  {
    slug: "html",
    Component: DiHtml5,
    title: "HTML",
    Description: () => <>Static webpages and portfolio projects</>,
  },
  {
    slug: "css",
    Component: SiCss3,
    title: "CSS",
    Description: () => <>Styling of my webpages</>,
  },

  {
    slug: "sql",
    Component: SiMysql,
    title: "MySQL",
    Description: () => <>Storing client and user data</>,
  },
  {
    slug: "aws",
    Component: SiAmazonaws,
    title: "AWS Lambda",
    Description: () => <>Lambda functions for creating APIs</>,
  },
  {
    slug: "terminal",
    Component: DiTerminal,
    title: "Bash",
    Description: () => <>Ease of life and build scripts</>,
  },
  {
    slug: "firebase",
    Component: SiFirebase,
    title: "Firebase",
    Description: () => <>Authentication, database and analytics</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Code management and open source contributions</>,
  },
];
