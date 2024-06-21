import Container from "../../components/defaults/Container"
import Hero from "../../components/sections/home/Hero"
import SectionTwo from "../../components/sections/home/SectionTwo"

const Home = () => {
  return (
    <Container active="home">
        <Hero />
        <SectionTwo />
    </Container>
  )
}

export default Home
