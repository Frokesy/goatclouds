import Container from "../../components/defaults/Container"
import Hero from "../../components/sections/home/Hero"
import SectionFive from "../../components/sections/home/SectionFive"
import SectionFour from "../../components/sections/home/SectionFour"
import SectionThree from "../../components/sections/home/SectionThree"
import SectionTwo from "../../components/sections/home/SectionTwo"

const Home = () => {
  return (
    <Container active="home">
        <Hero />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
    </Container>
  )
}

export default Home
