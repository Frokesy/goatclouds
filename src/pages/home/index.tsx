import Container from "../../components/defaults/Container"
import Hero from "../../components/sections/home/Hero"
import SectionThree from "../../components/sections/home/SectionThree"
import SectionTwo from "../../components/sections/home/SectionTwo"

const Home = () => {
  return (
    <Container active="home">
        <Hero />
        <SectionTwo />
        <SectionThree />
    </Container>
  )
}

export default Home
