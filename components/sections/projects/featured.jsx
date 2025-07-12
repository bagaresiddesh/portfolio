import FeaturedProject from '../../blocks/projects/featured'
// Section structure
import Section from '../../structure/section'
import Container from '../../structure/container'
import SectionTitle from '../../blocks/section.title.block'
import css from '../../../styles/sections/projects/featured.module.scss'
import content from '../../../content/projects/featured.json'

export default function FeaturedProjects () {
  return (
    <Section classProp={css.hasBg}>
      <Container spacing={'verticalXXXXLrg'}>
        <SectionTitle
          title='The Art'
          preTitle='My Creative Space'
          subTitle='Beyond logic and code, there lies Art'
        />
        {content.map((data, index) => {
          return <FeaturedProject content={data} index={index} key={index} />
        })}
      </Container>
    </Section>
  )
}
