// Core packages
import Image from "next/image";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title.block";
import SectionGridBg from "../../blocks/section.grid.block";

// Section specific blocks
import BadgesBlock from "../../blocks/about.badges.block";
import CopyBlock from "../../blocks/about.copy.block";

// Section scss
import about from "../../../styles/sections/index/about.module.scss";

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 *
 * @returns {jsx} <About />
 */
export default function About() {
  return (
    <Section classProp={about.section}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Who I Am"
          preTitle="Get to Know Me"
          subTitle="A blend of technical precision and creative intuition"
        />
        <section className={about.content}>
          <div className={about.image}>
            <img src="/img/family-photo.jpg" alt="Nelson family photo" />
            {/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
          </div>
          <div className={about.copy}>
            <CopyBlock
              title="Tech & Professional Life"
              containerClass={about.container}
              iconClass={about.icon}
              icon={["fat", "ear-listen"]}
              copy="I have nearly 4 years of experience building enterprise-grade web applications at IncubXperts, where I've evolved from intern to core contributor across diverse projects. I specialize in crafting clean UIs and scalable backends. I excel in Agile environments, and my logical thinking, strong communication, and deep technical understanding allow me to collaborate cross-functionally and drive projects from concept to deployment."
            />
            <CopyBlock
              title="Beyond the Code"
              containerClass={about.container}
              block="methods"
              iconClass={about.icon}
              icon={["fat", "fingerprint"]}
              copy="Away from the screen, I'm a self-taught charcoal sketch artist, with a focus on realistic facial portraits. I'm deeply spiritual, emotionally grounded, and proud of my Marathi roots. Born and raised in Pune, I love gardening in my free time. I value meaningful relationships, deep conversations, and peaceful living. A single child from a middle-class family, I hold a profound respect for karma, culture, and community. My personality is a mix of analytical thinking and creative instinct, one that thrives on logic, empathy, and aesthetics."
            />
          </div>
        </section>
      </Container>
    </Section>
  );
}
