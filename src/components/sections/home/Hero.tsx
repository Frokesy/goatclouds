import { Play } from "../../icons/icons";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -1200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
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
    <div className="bg-[#121212] text-[#fff] relative min-h-[90vh] w-[100%] lg:overflow-x-auto overflow-x-hidden">
      <div className="flex lg:flex-row flex-col justify-between lg:pl-20 pl-6 lg:pt-[15vh] pt-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="lg:w-[820px] lg:max-w-[820px]"
        >
          <motion.h2
            variants={childVariants}
            className="lg:text-[62px] text-[32px] font-semibold"
          >
            Crafting Digital Experiences with Precision and Creativity
          </motion.h2>
          <motion.p
            variants={childVariants}
            className="my-6 lg:text-[16px] text-[14px] pr-3"
          >
            Transforming your ideas into visually stunning and highly usable
            online media and pushing design and technology to the limits to
            ensure your brand stands out in the digital landscape.
          </motion.p>

          <motion.div
            variants={childVariants}
            className="text-[14px] flex space-x-6"
          >
            <motion.button
              variants={childVariants}
              className="flex border border-[#5a5b5d] py-2 px-4 rounded-lg space-x-2"
            >
              <span>View reel</span>
              <Play />
            </motion.button>
            <motion.button
              variants={childVariants}
              className="border border-[#5a5b5d] py-2 px-4 rounded-lg"
            >
              Contact us
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.75, ease: "easeInOut" }}
        >
          <img
            src="/assets/hero/hero_line_pattern.png"
            alt="linePattern"
            className="z-20 lg:relative absolute lg:top-20 top-[20vh]"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, delay: 1.5, ease: "easeInOut" }}
        className="z-40 absolute lg:hidden block bottom-0 w-[90vw] mx-auto left-5"
      >
        <img src="/assets/hero/hero_img.png" alt="hero_img" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, delay: 1.5, ease: "easeInOut" }}
        className="px-20 lg:flex hidden items-center justify-center absolute -bottom-[30vh] bg-[#121212] w-[100%] pt-10"
      >
        <img src="/assets/hero/hero_img.png" alt="heroImg" className="z-30" />
      </motion.div>
    </div>
  );
};

export default Hero;
