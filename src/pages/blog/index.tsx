import Container from "../../components/defaults/Container";
import { ArrowRight, Search } from "../../components/icons/icons";
import { getAllArticles } from "../../../services";
import BlogItems from "../../components/sections/blog/BlogItems";
import Paginator from "../../components/sections/blog/Paginator";
import BottomSection from "../../components/sections/services/BottomSection";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import LogoScroll from "../../components/defaults/LogoScroll";

interface Article {
  title: string;
  slug: string;
  coverPhoto: {
    url: string;
  };
  categories: { name: string }[];
  createdAt: string;
  excerpt: string;
  featured: boolean;
  author: {
    name: string;
    avatar: {
      url: string;
    };
  };
}

const Blog = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  const fetchArticles = async () => {
    try {
      const fetchedArticles = (await getAllArticles()) as {
        articles: Article[];
      };
      if (fetchedArticles && fetchedArticles.articles) {
        setArticles(fetchedArticles.articles);
      }
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };


  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      timeZone: "UTC",
    };
    const formattedDate: string = new Intl.DateTimeFormat(
      "en-GB",
      options
    ).format(date);
    return formattedDate;
  };

  useEffect(() => {
    fetchArticles();
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
                <div className="bg-[#fff] flex lg:w-[70%] items-center px-3 rounded-lg text-[#121212]">
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

          {articles.map((article, index) => (
            <div
              key={index}
              data-aos="fade-down"
              data-aos-duration="2000"
              data-aos-offset="200"
              className="lg:w-[50%] mt-10 lg:mt-0"
            >
              {article.featured && (
                <div className="space-y-6">
                  <img
                    src="/assets/blog/bl_one.png"
                    alt="img"
                    className="w-[100%]"
                  />
                  <div className="flex space-x-6 text-[12px]">
                    <p className="text-[#808080]">Design</p>
                    <div className="flex items-center space-x-2">
                      <p>8 min read</p>
                      <ArrowRight />
                    </div>
                  </div>

                  <NavLink to={`/blog/${article.slug}`} className="text-[24px] font-semibold">
                    {article.title}
                  </NavLink>

                  <p>{article.excerpt}</p>

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
                    <img
                      src={article.author.avatar.url}
                      className="w-[56px] h-[56px] rounded-full"
                      alt="avatar"
                    />
                    <div className="text-[14px]">
                      <h2>{article.author.name}</h2>
                      <p>{formatDate(article.createdAt)}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
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
