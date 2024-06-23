import Container from "../../components/defaults/Container"
import Hero from "../../components/sections/about/Hero"
import SectionThree from "../../components/sections/about/SectionThree"
import SectionTwo from "../../components/sections/about/SectionTwo"

const About = () => {
  return (
    <Container active="about">
        <Hero />
        <SectionTwo />
        <SectionThree />
    </Container>
  )
}

export default About
