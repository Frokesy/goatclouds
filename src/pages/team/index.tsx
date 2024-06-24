import Container from "../../components/defaults/Container";
import { CoBehance, CoFacebook, CoLinkedIn, CoTwitter } from "../../components/icons/icons";

const Team = () => {
  const items = [
    {
      id: 1,
      name: "Danny J. Thompson",
      role: "CEO & Founder",
      img: "/assets/team/fr_one.png",
    },
    {
      id: 2,
      name: "Cleo S. Curry",
      role: "Lead Developer",
      img: "/assets/team/fr_two.png",
    },
    {
      id: 3,
      name: "Olivia Turner",
      role: "Project Manager",
      img: "/assets/team/fr_ten.png",
    },
    {
      id: 4,
      name: "James Carter",
      role: "Product Designer",
      img: "/assets/team/fr_six.png",
    },
    {
      id: 5,
      name: "Vincent C. Bender",
      role: "Back-end Developer",
      img: "/assets/team/fr_three.png",
    },
    {
      id: 6,
      name: "Trevor O. James",
      role: "Back-end Developer",
      img: "/assets/team/fr_seven.png",
    },
    {
      id: 7,
      name: "Michael Brown",
      role: "Branding Specialist",
      img: "/assets/team/fr_eight.png",
    },
    {
      id: 8,
      name: "Sophia Nguyen",
      role: "Marketing Specialist",
      img: "/assets/team/fr_nine.png",
    },
  ];

  return (
    <Container active="team">
      <div className="bg-[#121212] py-[15vh] text-[#fff]">
        <div className="text-[15px] flex items-center justify-center space-x-3">
          <div className="h-1 w-6 bg-[#3e4784]"></div>
          <p>Our Team</p>
        </div>
        <h2 className="lg:text-[48px] text-[36px] font-semibold text-center">
          Meet our team
        </h2>

        <p className="text-center my-4 text-[14px] lg:text-[16px]">
          Meet the creative minds behind Goat Clouds Technologies, where
          innovation and expertise come together to craft <br /> exceptional
          digital experiences.
        </p>

        <div className="grid lg:grid-cols-4 grid-cols-1 w-[90vw] mx-auto gap-20 mt-[15vh]">
          {items.map(item => (
            <div key={item.id} className="border border-[#404040] rounded-2xl lg:w-[300px] w-[100%]">
            <img
              src={item.img}
              className="w-[100%] lg:h-[220px] h-[250px]"
              alt="img"
            />
            <div className="space-y-2 my-3 px-4">
              <h2 className="text-[20px] font-semibold">{item.name}</h2>
              <p className="text-[14px] pb-2">{item.role}</p>

              <div className="flex items-center space-x-3 pb-4">
                <CoLinkedIn />
                <CoFacebook />
                <CoBehance />
                <CoTwitter />
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Team;
