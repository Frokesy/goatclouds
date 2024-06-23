import Container from "../../components/defaults/Container"
import Hero from "../../components/sections/about/Hero"
import SectionTwo from "../../components/sections/about/SectionTwo"

const About = () => {
  return (
    <Container active="about">
        <Hero />
        <SectionTwo />
    </Container>
  )
}

export default About
