import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -1200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
const Hero = () => {
  return (
    <div className="bg-[#121212] lg:py-[15vh] py-10 text-[#fff]">
      <div className="w-[90vw] mx-auto flex lg:flex-row flex-col justify-between items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="lg:w-[45%]"
        >
          <motion.h2
            variants={childVariants}
            className="lg:text-[48px] text-[32px] font-semibold mb-6"
          >
            About Us
          </motion.h2>
          <motion.p
            variants={childVariants}
            className="lg:text-[18px] text-[15px]"
          >
            Founded on the principles of innovation and excellence, Goat Cloud
            Technologies is a collective of passionate designers, developers,
            and strategists. We bring a diverse set of skills and a wealth of
            experience to the table, ensuring every project we undertake is
            executed with precision and creativity.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 1200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="justify-center flex flex-col space-y-10"
        >
          <div className="lg:text-[15px] lg:mt-0 mt-10 flex items-center space-x-3">
            <div className="h-0.5 w-6 bg-[#3e4784]"></div>
            <p>Our accomplishments</p>
          </div>
          <div className="grid grid-cols-2 gap-x-[10vw] gap-y-[5vh] lg:pr-[10vw] ">
            <div className="flex flex-col items-center space-y-2">
              <h2 className="lg:text-[60px] text-[30px] font-semibold">5</h2>
              <p className="text-center">Years of building projects</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <h2 className="lg:text-[60px] text-[30px] font-semibold">24 +</h2>
              <p className="text-center">Countries and growing</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <h2 className="lg:text-[60px] text-[30px] font-semibold">200%</h2>
              <p className="text-center">Team growth in 12 months</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <h2 className="lg:text-[60px] text-[30px] font-semibold">
                280 +
              </h2>
              <p className="text-center">5-star reviews</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
