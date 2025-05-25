// Core packages
import Image from "next/image";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title.block";

// Section specific blocks
import BadgesBlock from "../../blocks/about.badges.block";

// Section scss
import about from "../../../styles/sections/index/about.module.scss";

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 *
 * @returns {jsx} <Technical />
 */
export default function Technical() {
  return (
    <Section classProp={`${about.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Technical"
          preTitle="My Stack"
          subTitle="A well-balanced mix of modern frameworks, languages, and platforms"
        />
        <section className={`${about.content} ${about.container}`}>
          <div className={about.copy}>
            <BadgesBlock
              title="Environments That Power My Workflow"
              copy="These are the tools and platforms I rely on to design, develop, collaborate, and deploy efficiently."
              list={software}
              block="software"
              fullContainer="fullContainer"
              icon="toolbox"
              containerClass={about.container}
              headerIcon={about.icon}
            />
            <BadgesBlock
              title="Core Technologies I Work With"
              copy="From crafting dynamic interfaces to building scalable server-side logic, these are the technologies I use day-to-day to bring ideas to life."
              list={tech}
              block="tech"
              fullContainer="fullContainer"
              icon="laptop-code"
              containerClass={about.container}
              headerIcon={about.icon}
            />
          </div>
          <div className={`${about.image} ${about.technicalSvg}`}>
            <Image
              src="/img/dataism-24.svg"
              width={477}
              height={1111}
              alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b"
            />
          </div>
        </section>
      </Container>
    </Section>
  );
}

const software = [
  { key: "jira", name: "Jira", type: "devicon" },
  { key: "confluence", name: "confluence", type: "devicon" },
  { key: "vscode", name: "VSCode", type: "devicon" },
  { key: "postman", name: "Postman", type: "devicon" },
  { key: "swagger", name: "Swagger", type: "devicon" },
  { key: "figma", name: "Figma", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "github", name: "Github", type: "devicon" },
  { key: "gitlab", name: "Gitlab", type: "devicon" },
  { key: "bitbucket", name: "bitbucket", type: "devicon" },
  { key: "amazonwebservices", name: "AWS", type: "devicon" },
];

const tech = [
  { key: "react", name: "React", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "nextjs", name: "NextJS", type: "devicon" },
  { key: "typescript", name: "TypeScript", type: "devicon" },
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "antdesign", name: "Ant Design", type: "devicon" },
  { key: "materialui", name: "Material UI", type: "devicon" },
  { key: "bootstrap", name: "Bootstrap", type: "devicon" },
  { key: "html5", name: "HTML5", type: "devicon" },
  { key: "css3", name: "CSS3", type: "devicon" },
  { key: "sass", name: "SASS", type: "devicon" },
  { key: "mysql", name: "MySQL", type: "devicon" },
  { key: "dynamodb", name: "dynamodb", type: "devicon" },
];
