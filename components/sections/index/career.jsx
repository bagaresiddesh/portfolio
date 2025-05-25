// Core packages
import Icon from "../../utils/icon.util";
// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";
import Link from "next/link";
// Section general blocks
import SectionTitle from "../../blocks/section.title.block";

// Career scss
import career from "../../../styles/sections/index/career.module.scss";

/**
 * Section: Career
 *
 * @returns {jsx} <Career />
 */
export default function Career() {
  return (
    <Section classProp={`${career.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Experience"
          preTitle="Career Journey"
          subTitle="Growth through hands-on learning, real-world projects, and purposeful impact"
        />
        <section className={career.area}>
          <article className={career.company}>
            <span className={career.icon}>
              <Icon icon={["fat", "briefcase"]} />
            </span>
            <div className={career.companyHeader}>
              <h3 className={career.companyName}>
                <Link href={"https://incubxperts.com/"} target="_blank">
                  Incubxperts TechnoConsulting Pvt Ltd
                </Link>
              </h3>
              <h4>Nov 2021 – Present</h4>
              <h5>Pune, India</h5>
            </div>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Software Engineer (Feb 2022 – Present)</h3>
              </span>
              <ul>
                <li>
                  Developed enterprise-grade web applications using Agile
                  methodologies, addressing diverse business needs.
                </li>
                <li>
                  Enhanced user engagement by crafting responsive user
                  interfaces, leading to a 20% increase in user satisfaction
                  metrics.
                </li>
                <li>
                  Designed and integrated scalable APIs using Node.js and
                  Sequelize ORM, reducing API response times by 25%.
                </li>
                <li>
                  Conducted thorough testing, debugging, and optimization,
                  delivering high-performance, bug-free applications.
                </li>
                <li>
                  Collaborated with cross-functional teams to analyze
                  requirements, define project scope, and ensure alignment with
                  business objectives.
                </li>
              </ul>
            </div>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Trainee Software Engineer (Nov 2021 – Jan 2022)</h3>
              </span>
              <ul>
                <li>
                  Built IX-Timesheet, a web application with feature-rich
                  functionality, as part of a comprehensive training program.
                </li>
                <li>
                  Acquired proficiency in modern web development tools,
                  frameworks, and best practices.
                </li>
                <li>
                  Focused on delivering quality solutions through rigorous
                  testing and clear documentation.
                </li>
              </ul>
            </div>
          </article>
        </section>
      </Container>
    </Section>
  );
}

const fullStack = [
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "nextjs", name: "NextJS", type: "devicon" },
  { key: "php", name: "PHP", type: "devicon" },
  { key: "wordpress", name: "WordPress", type: "devicon" },
  { key: "woocommerce", name: "WooCommerce", type: "devicon" },
  { key: "html5", name: "HTML5", type: "devicon" },
  { key: "css3", name: "CSS3", type: "devicon" },
  { key: "sass", name: "SASS", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "mysql", name: "MySQL", type: "devicon" },
  { key: "mongodb", name: "MongoDB", type: "devicon" },
];

const stack = [
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "nextjs", name: "NextJS", type: "devicon" },
  { key: "php", name: "PHP", type: "devicon" },
  { key: "wordpress", name: "WordPress", type: "devicon" },
  { key: "woocommerce", name: "WooCommerce", type: "devicon" },
  { key: "html5", name: "HTML5", type: "devicon" },
  { key: "css3", name: "CSS3", type: "devicon" },
  { key: "sass", name: "SASS", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "mysql", name: "MySQL", type: "devicon" },
  { key: "mongodb", name: "MongoDB", type: "devicon" },
];
