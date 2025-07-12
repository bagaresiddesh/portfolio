import Container from '../structure/container'
import Icon from '../utils/icon.util'
import css from '../../styles/structure/footer.module.scss'
import content from '../../content/footer.json'

export default function Footer () {
  return (
    <footer className={css.container}>
      <Container spacing={['verticalXXLrg', 'bottomLrg']}>
        <section className={css.sections}>
          <div className={css.social}>
            <h4>Social</h4>
            <div className={css.socialList}>
              {content.social.map(({ url, icon }, index) => {
                return (
                  <a key={index} href={url} rel='noreferrer' target='_blank'>
                    {icon == 'envelope' && <Icon icon={['fas', icon]} />}
                    {icon != 'envelope' && <Icon icon={['fab', icon]} />}
                  </a>
                )
              })}
            </div>
          </div>
          <div>© Siddesh Bagare. All rights reserved.</div>
        </section>
      </Container>
      <canvas id='gradient-canvas' className={''} data-transition-in></canvas>
    </footer>
  )
}
