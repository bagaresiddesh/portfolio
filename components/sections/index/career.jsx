// Core packages
import Icon from '../../utils/icon.util'
// Section structure
import Section from '../../structure/section'
import Container from '../../structure/container'
import Link from 'next/link'
// Section general blocks
import SectionTitle from '../../blocks/section.title.block'

// Career scss
import career from '../../../styles/sections/index/career.module.scss'

/**
 * Section: Career
 *
 * @returns {jsx} <Career />
 */
export default function Career () {
  return (
    <Section classProp={`${career.section} borderBottom`}>
      <Container spacing={['verticalXXXLrg']}>
        <SectionTitle
          title='Experience'
          preTitle='Career Journey'
          subTitle='Growth through hands-on learning, real-world projects, and purposeful impact'
        />
        <section className={career.area}>
          <article className={career.company}>
            <span className={career.icon}>
              <Icon icon={['fat', 'briefcase']} />
            </span>
            <div className={career.companyHeader}>
              <h4 className={career.companyName}>
                <Link href={'https://incubxperts.com/'} target='_blank'>
                  Incubxperts TechnoConsulting Pvt Ltd
                </Link>
              </h4>
              <h4>Nov 2021 - Present</h4>
              <h5>Pune, India</h5>
            </div>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Senior Software Engineer </h3>
                <h5>Aug 2025 - Present</h5>
              </span>
              <span>
                Lead the design and development of scalable, secure, and
                high-performance applications. Mentor junior engineers, guide
                architectural decisions, and collaborate with stakeholders to
                define technical strategies aligned with business objectives.
              </span>
            </div>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Software Engineer</h3>
                <h5>Feb 2022 - Jul 2025</h5>
              </span>
              <span>
                Developed enterprise-grade web applications with responsive
                front-ends and scalable backend systems. Collaborated with
                cross-functional teams, and consistently delivered high-quality
                code following Agile practices.
              </span>
            </div>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Trainee Software Engineer </h3>
                <h5>Nov 2021 - Jan 2022</h5>
              </span>
              <span>
                Trained in the full software development life cycle and Agile
                methodologies. Gained hands-on experience with tools and
                frameworks, focusing on writing clean code, conducting effective
                testing, and maintaining clear documentation.
              </span>
            </div>
          </article>
        </section>
      </Container>
    </Section>
  )
}

const fullStack = [
  { key: 'javascript', name: 'JavaScript', type: 'devicon' },
  { key: 'typescript', name: 'TypeScript', type: 'devicon' },
  { key: 'nodejs', name: 'Node.js', type: 'devicon' },
  { key: 'react', name: 'React', type: 'devicon' },
  { key: 'nextjs', name: 'Next.js', type: 'devicon' },
  { key: 'python', name: 'Python', type: 'devicon' },
  { key: 'csharp', name: 'C#', type: 'devicon' },
  { key: 'html5', name: 'HTML5', type: 'devicon' },
  { key: 'css3', name: 'CSS3', type: 'devicon' },
  { key: 'sass', name: 'SASS', type: 'devicon' },
  { key: 'git', name: 'Git', type: 'devicon' },
  { key: 'postgresql', name: 'PostgreSQL', type: 'devicon' },
  { key: 'mysql', name: 'MySQL', type: 'devicon' },
  { key: 'dynamodb', name: 'DynamoDB', type: 'devicon' },
  { key: 'amazonwebservices', name: 'AWS', type: 'devicon' }
]

const stack = [
  { key: 'javascript', name: 'JavaScript', type: 'devicon' },
  { key: 'typescript', name: 'TypeScript', type: 'devicon' },
  { key: 'nodejs', name: 'Node.js', type: 'devicon' },
  { key: 'react', name: 'React', type: 'devicon' },
  { key: 'nextjs', name: 'Next.js', type: 'devicon' },
  { key: 'python', name: 'Python', type: 'devicon' },
  { key: 'csharp', name: 'C#', type: 'devicon' },
  { key: 'html5', name: 'HTML5', type: 'devicon' },
  { key: 'css3', name: 'CSS3', type: 'devicon' },
  { key: 'sass', name: 'SASS', type: 'devicon' },
  { key: 'git', name: 'Git', type: 'devicon' },
  { key: 'postgresql', name: 'PostgreSQL', type: 'devicon' },
  { key: 'mysql', name: 'MySQL', type: 'devicon' },
  { key: 'dynamodb', name: 'DynamoDB', type: 'devicon' },
  { key: 'amazonwebservices', name: 'AWS', type: 'devicon' }
]
