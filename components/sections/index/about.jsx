// Section structure
import Section from '../../structure/section'
import Container from '../../structure/container'

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss'

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 *
 * @returns {jsx} <About />
 */
export default function About () {
  return (
    <Section classProp={`${about.section} borderBottom`}>
      <Container spacing={['verticalXXXLrg']}>
        <SectionTitle
          title='Who I Am'
          preTitle='Get to Know Me'
          subTitle='A blend of technical precision and creative intuition'
        />
        <section className={about.content}>
          <div className={about.image}>
            <img src='/img/profile.jpg' alt='Profile picture' />
            {/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
          </div>
          <div className={about.copy}>
            <CopyBlock
              title='Tech & Professional Life'
              containerClass={about.container}
              iconClass={about.icon}
              icon={['fat', 'code']}
              copy="Around 4 years at IncubXperts, I've grown from an intern to a trusted full-stack engineer delivering enterprise-grade web applications. I specialize in building intuitive front-ends and scalable back-end architectures. Agile by practice and logical by nature, I bring clear communication and cross-functional collaboration to every project, seeing ideas through from concept to deployment."
            />
            <CopyBlock
              title='Beyond the Code'
              containerClass={about.container}
              block='methods'
              iconClass={about.icon}
              icon={['fat', 'seedling']}
              copy='Born and raised in Pune, I carry the grounded values of a Marathi middle-class home. Away from the screen, I’m a self-taught charcoal sketch artist with a passion for portraits. I enjoy gardening, spending time with friends and family, and helping my mumma in the kitchen, especially when it involves cooking something I love. I believe in peace, purpose, karma, and the quiet strength of creativity.'
            />
          </div>
        </section>
      </Container>
    </Section>
  )
}
