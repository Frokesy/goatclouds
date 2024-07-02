import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const SectionFive = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div className="bg-[#121212] py-[15vh] text-[#fff]">
      <div className="w-[90vw] mx-auto flex lg:flex-row flex-col justify-between space-x-10 items-center">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-offset="200"
        >
          <img src="/assets/services/img_four.png" alt="img" />
        </div>
        <div className="lg:w-[50%]">
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-offset="200"
          >
            <div className="lg:text-[15px] lg:mt-0 mt-10 flex items-center space-x-3">
              <div className="h-0.5 w-6 bg-[#404040]"></div>
              <p>Build Better, launch faster</p>
            </div>
            <h2 className="lg:text-[48px] text-[32px] font-semibold mt-3 mb-10">
              Building great things
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-20">
            <div
              ref={ref}
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-offset="200"
              className="flex flex-col items-center space-y-2"
            >
              <h2 className="lg:text-[60px] text-[30px] font-semibold">
                {inView ? (
                  <CountUp
                    start={0}
                    end={200}
                    duration={2}
                    suffix="%"
                    delay={0.5}
                  />
                ) : (
                  0
                )}
              </h2>
              <p className="text-center">Team growth in 12 months</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="2500"
              data-aos-offset="200"
              className="flex flex-col items-center space-y-2"
            >
              <h2 className="lg:text-[60px] text-[30px] font-semibold">
                {inView ? (
                  <CountUp
                    start={0}
                    end={24}
                    duration={2}
                    suffix="+"
                    delay={0.5}
                  />
                ) : (
                  0
                )}
              </h2>
              <p className="text-center">Team growth in 12 months</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-offset="200"
              className="flex flex-col items-center space-y-2"
            >
              <h2 className="lg:text-[60px] text-[30px] font-semibold">
                {inView ? (
                  <CountUp
                    start={0}
                    end={4.8}
                    duration={2}
                    suffix="+"
                    delay={0.5}
                    decimals={1}
                  />
                ) : (
                  0
                )}
              </h2>
              <p className="text-center">Team growth in 12 months</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="3500"
              data-aos-offset="200"
              className="flex flex-col items-center space-y-2"
            >
              <h2 className="lg:text-[60px] text-[30px] font-semibold">
                {inView ? (
                  <CountUp
                    start={0}
                    end={280}
                    duration={2}
                    delay={0.5}
                    suffix="+"
                  />
                ) : (
                  0
                )}
              </h2>
              <p className="text-center">Team growth in 12 months</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
