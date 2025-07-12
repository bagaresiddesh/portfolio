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
              copy="Around 4 years of experience building enterprise-grade web applications at IncubXperts, I've evolved from intern to core contributor across diverse projects. I specialize in crafting clean UIs and scalable backends. I excel in Agile environments, and my logical thinking, strong communication, and deep technical understanding allow me to collaborate cross-functionally and drive projects from concept to deployment."
            />
            <CopyBlock
              title='Beyond the Code'
              containerClass={about.container}
              block='methods'
              iconClass={about.icon}
              icon={['fat', 'seedling']}
              copy="Away from the screen, I'm a self-taught charcoal sketch artist, specializing in detailed portraits. I was born and raised in Pune, I enjoy gardening and spending quality time with friends and family. I occasionally help my mumma in the kitchen, and yes, I cook some delicious food that I absolutely love eating. Rooted in a Marathi, middle-class background, I value peace, purpose, and meaningful relationships. I blend logic with creativity and carry a quiet belief in karma and spiritual growth."
            />
          </div>
        </section>
      </Container>
    </Section>
  )
}
