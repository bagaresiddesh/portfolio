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
              <h4>Nov 2021 – Present</h4>
              <h5>Pune, India</h5>
            </div>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Software Engineer (Feb 2022 - Present)</h3>
              </span>
              <span>
                Developed robust, enterprise-grade web applications tailored to
                real-world business needs. Crafted responsive user interfaces
                and built scalable backend, improving performance and user
                engagement. Collaborated with cross-functional teams,
                communicated with stakeholders to gather requirements, and
                ensured alignment with business goals. Maintained clear
                documentation for workflows and processes, participated in Agile
                ceremonies, and consistently delivered high-quality, optimized
                code.
              </span>
            </div>
            <div className={career.companyContent}>
              <span className={career.companyHeader}>
                <h3>Trainee Software Engineer (Nov 2021 - Jan 2022)</h3>
              </span>
              <span>
                Trained in the full software development life cycle and Agile
                methodologies. Gained hands-on experience with modern tools and
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
  { key: 'nodejs', name: 'NodeJS', type: 'devicon' },
  { key: 'react', name: 'React', type: 'devicon' },
  { key: 'nextjs', name: 'NextJS', type: 'devicon' },
  { key: 'php', name: 'PHP', type: 'devicon' },
  { key: 'wordpress', name: 'WordPress', type: 'devicon' },
  { key: 'woocommerce', name: 'WooCommerce', type: 'devicon' },
  { key: 'html5', name: 'HTML5', type: 'devicon' },
  { key: 'css3', name: 'CSS3', type: 'devicon' },
  { key: 'sass', name: 'SASS', type: 'devicon' },
  { key: 'git', name: 'Git', type: 'devicon' },
  { key: 'mysql', name: 'MySQL', type: 'devicon' },
  { key: 'mongodb', name: 'MongoDB', type: 'devicon' }
]

const stack = [
  { key: 'javascript', name: 'JavaScript', type: 'devicon' },
  { key: 'nodejs', name: 'NodeJS', type: 'devicon' },
  { key: 'react', name: 'React', type: 'devicon' },
  { key: 'nextjs', name: 'NextJS', type: 'devicon' },
  { key: 'php', name: 'PHP', type: 'devicon' },
  { key: 'wordpress', name: 'WordPress', type: 'devicon' },
  { key: 'woocommerce', name: 'WooCommerce', type: 'devicon' },
  { key: 'html5', name: 'HTML5', type: 'devicon' },
  { key: 'css3', name: 'CSS3', type: 'devicon' },
  { key: 'sass', name: 'SASS', type: 'devicon' },
  { key: 'git', name: 'Git', type: 'devicon' },
  { key: 'mysql', name: 'MySQL', type: 'devicon' },
  { key: 'mongodb', name: 'MongoDB', type: 'devicon' }
]
