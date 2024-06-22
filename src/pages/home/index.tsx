import Container from "../../components/defaults/Container"
import Hero from "../../components/sections/home/Hero"
import SectionEight from "../../components/sections/home/SectionEight"
import SectionFive from "../../components/sections/home/SectionFive"
import SectionFour from "../../components/sections/home/SectionFour"
import SectionSeven from "../../components/sections/home/SectionSeven"
import SectionSix from "../../components/sections/home/SectionSix"
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
        <SectionSix />
        <SectionSeven />
        <SectionEight />
    </Container>
  )
}

export default Home
