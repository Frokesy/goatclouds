import Container from "../../components/defaults/Container";
import { ArrowRight, Search } from "../../components/icons/icons";
import BlogItems from "../../components/sections/blog/BlogItems";
import Paginator from "../../components/sections/blog/Paginator";
import BottomSection from "../../components/sections/services/BottomSection";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import LogoScroll from "../../components/defaults/LogoScroll";

const Blog = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Container active="blog">
      <div className="bg-[#121212] lg:pt-[15vh] pt-[10vh] text-[#fff]">
        <div className="w-[90vw] mx-auto lg:flex-row flex-col flex justify-between">
          <div className="lg:w-[45%]">
            <div
              data-aos="fade-down"
              data-aos-duration="2000"
              data-aos-offset="200"
            >
              <div className="text-[15px] flex items-center space-x-3">
                <div className="h-1 w-6 bg-[#3e4784]"></div>
                <p>Blog</p>
              </div>
              <h2 className="lg:text-[48px] text-[32px] font-semibold">
                Read articles on our blog
              </h2>
              <h2 className="pt-3 text-[15px] lg:text-[16px]">
                At Goat Cloud Technologies, we offer a comprehensive range of
                services to help your business thrive in the digital world. Our
                expertise spans across various domains, ensuring that all your
                digital needs are met with creativity, precision, and a focus on
                results.
              </h2>

              <div className="flex w-[100%] justify-between lg:my-16 my-8 lg:flex-row flex-col">
                <div className="bg-[#fff] flex lg:w-[70%] items-center px-3 rounded-lg">
                  <input
                    type="text"
                    className="border-none outline-none w-[98%] py-2"
                    placeholder="Keywords"
                  />
                  <Search />
                </div>
                <button className="lg:w-[25%] bg-[#3e4784] lg:flex hidden items-center justify-center py-2 px-4 rounded-lg">
                  Contact Us
                </button>
                <div className="lg:hidden flex justify-end mt-4">
                  <button className="bg-[#3e4784] flex items-center justify-center py-2 px-4 rounded-lg">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-offset="200"
              className=""
            >
              <h2 className="text-[#3e4784] text-[26px] font-semibold mb-3">
                Categories
              </h2>
              <div className="space-y-3 text-[13px] font-light">
                <div className="flex items-center space-x-3">
                  <div className="h-0.5 w-6 bg-[#3e4784]"></div>
                  <p>Web Design</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-0.5 w-6 bg-[#3e4784]"></div>
                  <p>Web development</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-0.5 w-6 bg-[#3e4784]"></div>
                  <p>Digital Marketing</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-0.5 w-6 bg-[#3e4784]"></div>
                  <p>SEO</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-0.5 w-6 bg-[#3e4784]"></div>
                  <p>Branding</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-0.5 w-6 bg-[#3e4784]"></div>
                  <p>UI/UX Design</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-0.5 w-6 bg-[#3e4784]"></div>
                  <p>Mobile App Development</p>
                </div>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-down"
            data-aos-duration="2000"
            data-aos-offset="200"
            className="lg:w-[50%] mt-10 lg:mt-0 space-y-6"
          >
            <img src="/assets/blog/bl_one.png" alt="img" className="w-[100%]" />
            <div className="flex space-x-6 text-[12px]">
              <p className="text-[#808080]">Design</p>
              <div className="flex items-center space-x-2">
                <p>8 min read</p>
                <ArrowRight />
              </div>
            </div>

            <NavLink to="/blog/0" className="text-[24px] font-semibold">
              The Future of Web Design: Trends to Watch in 2024
            </NavLink>

            <p>
              Stay ahead of the curve with the latest web design trends. From
              AI-driven design tools to immersive user experiences, discover
              what&apos;s shaping the future of web design and how you can
              leverage these trends for your projects.
            </p>

            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-offset="200"
              className="text-[#3e4784]"
            >
              [Read More]
            </p>

            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-offset="200"
              className="flex items-center space-x-4"
            >
              <img src="/assets/blog/avatar.png" alt="avatar" />
              <div className="text-[14px]">
                <h2>Phoenix Baker</h2>
                <p>19 Jan 2024</p>
              </div>
            </div>
          </div>
        </div>
        <BlogItems />
        <Paginator />
        <BottomSection />

        <div className="bg-[#fff] text-[#000] pt-6 pb-6">
            <LogoScroll />
        </div>
      </div>
    </Container>
  );
};

export default Blog;
