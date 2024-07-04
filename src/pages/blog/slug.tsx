import React, { ReactNode, useEffect, useState } from "react";
import Container from "../../components/defaults/Container";
import {
  Copy,
  Facebook,
  LinkedIn,
  Twitter,
} from "../../components/icons/icons";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleBlog } from "../../../services";
import Loader from "../../components/defaults/Loader";

interface Blog {
  title: string;
  excerpt: string;
  categories: { name: string }[];
  createdAt: string;
  author: { name: string; avatar: { url: string } };
  coverPhoto: { url: string };
  content: { html: string };
}

type Params = {
  blog_id: string;
};

interface BlogData {
  articles: Blog[];
}
const customStyle = {
  p: "mt-4",
  h1: "pt-10 lg:text-[30px] text-[24px] font-semibold",
  h2: "lg:text-[28px] text-[18px] lg:pt-0 pt-4 pb-6 font-bold",
  h3: "lg:text-[24px] text-[16px] lg:pt-0 pt-4 pb-6 font-bold",
  h4: "lg:text-[20px] text-[14px] lg:pt-0 pt-4 pb-6 font-bold",
  h5: "lg:text-[16px] text-[12px] lg:pt-0 pt-4 pb-6 font-bold",
  h6: "lg:text-[14px] text-[10px] lg:pt-0 pt-4 pb-6 font-bold",
  ul: "lg:text-[15px] text-[13px] mt-4 list-disc",
  ol: "lg:text-[15px] text-[13px] mt-4 flex flex-col list-decimal space-y-6 mt-6",
  li: "lg:text-[15px] text-[13px] mt-4 ",
  a: "lg:text-[15px] text-[13px] mt-4 text-blue-500",
  blockquote: "lg:text-[24px] text-[20px] font-semibold italic text-[#ccc]",
  code: "lg:text-[15px] text-[13px] mt-4 p-2",
  pre: "lg:text-[15px] text-[13px] mt-4 border-l-4 border-[#3e4784] px-6 space-y-4 p-2",
  img: "w-[100%] h-[100%] my-10",
};

const BlogSlug = () => {
  const { blog_id } = useParams() as Params;
  const navigate = useNavigate();
  const [singleBlog, setSingleBlog] = useState<Blog | null>(null);
  const [parsedContent, setParsedContent] = useState<ReactNode[]>([]);

  const parseHTML = (htmlContent: string) => {
    const domParser = new DOMParser();
    const parsedDocument = domParser.parseFromString(htmlContent, "text/html");
    if (!parsedDocument.body) {
      return [];
    }
    return Array.from(parsedDocument.body.childNodes).map((node, index) =>
      parseNode(node, index)
    );
  };

  const parseNode = (node: Node, index: number): ReactNode => {
    if (node.nodeType === Node.TEXT_NODE) {
      return node.textContent;
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const tagName = (node as Element).tagName.toLowerCase();
      const children = Array.from(node.childNodes).map((childNode, i) =>
        parseNode(childNode, i)
      );

      const attributes: { [key: string]: string } = {};
      Array.from((node as Element).attributes).forEach((attr: Attr) => {
        if (attr.name === "class") {
          attributes["className"] = attr.value;
        } else {
          attributes[attr.name] = attr.value;
        }
      });

      if (tagName === "br") {
        return React.createElement(tagName, { key: index });
      } else if (tagName === "img") {
        if (customStyle[tagName]) {
          return React.createElement(tagName, {
            key: index,
            className: customStyle[tagName],
            ...attributes,
          });
        } else {
          return React.createElement(tagName, { key: index, ...attributes });
        }
      } else if (customStyle[tagName as keyof typeof customStyle]) {
        return React.createElement(
          tagName,
          {
            key: index,
            className: customStyle[tagName as keyof typeof customStyle],
            ...attributes,
          },
          children
        );
      } else {
        return React.createElement(
          tagName,
          { key: index, ...attributes },
          children
        );
      }
    }
  };

  console.log(parsedContent);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        if (blog_id) {
          const blogData = (await getSingleBlog(blog_id)) as BlogData;
          setSingleBlog(blogData.articles[0]);
        }
      } catch (error) {
        navigate("/404");
      }
    };

    fetchBlog();
  }, []);

  useEffect(() => {
    if (singleBlog && typeof window !== "undefined") {
      const parsedContent = parseHTML(singleBlog.content.html);
      setParsedContent(parsedContent);
    }
  }, []);

  if (!singleBlog)
    return (
      <>
        <div className="flex items-center justify-center h-[100%]">
          <Loader />
        </div>
      </>
    );

  return (
    <Container active="blog">
      <div className="bg-[#121212] text-[#fff] pt-[10vh]">
        <div className="flex flex-col justify-center items-center text-center space-y-6">
          <p className="text-[#3e4784]">Published 19 Jan 2024</p>
          <h2 className="lg:text-[48px] text-[36px] lg:w-[50%] font-semibold">
            {singleBlog?.title}
          </h2>
          <p className="lg:w-[50%] px-6 lg:px-0 text-[#808080]">
            {singleBlog?.excerpt}
          </p>
          <div className="flex items-center space-x-2">
            <img
              src={singleBlog?.author.avatar.url}
              className="w-[56px] h-[56px] rounded-full"
              alt="avatar"
            />
            <div className="text-[14px]">
              <h2>{singleBlog?.author.name}</h2>
              <p>19 Jan 2024</p>
            </div>
          </div>
        </div>

        <div className="w-[90vw] mx-auto">
          <img
            src={singleBlog?.coverPhoto.url}
            alt="hero"
            className="w-[100%] mt-20"
          />
        </div>

        <div className="lg:w-[50%] w-[90%] mx-auto">
          {parsedContent.map((element, index) => (
            <React.Fragment key={index}>{element}</React.Fragment>
          ))}
          {/* <div className="border-b border-[#ccc] pt-[10vh]"></div>
          <h2 className="pt-10 lg:text-[30px] text-[24px] font-semibold">
            Introduction
          </h2>
          <p className="mt-4">
            The world of web design is continually evolving, with new
            technologies and trends emerging to shape how we interact with
            digital interfaces. As we look ahead to 2024, several key trends are
            poised to redefine the landscape of web design. Staying ahead of
            these trends can give you a competitive edge and ensure your digital
            presence remains modern and engaging. Let&apos;s dive into the top
            web design trends to watch in 2024 and how you can leverage them for
            your projects.
          </p>

          <img
            src="/assets/blog/image-5.png"
            alt="image"
            className="py-20 w-[100%]"
          />

          <div className="border-l-4 border-[#3e4784] px-6 space-y-4">
            <h2 className="lg:text-[24px] text-[20px] font-semibold italic text-[#ccc]">
              “In a world older and more complete than ours they move finished
              and complete, gifted with extensions of the senses we have lost or
              never attained, living by voices we shall never hear.”
            </h2>

            <p>— Phoenix Baker, Product Designer</p>
          </div>

          <h2 className="pt-10 lg:text-[30px] text-[24px] font-semibold">
            AI-Driven Design Tools
          </h2>
          <p className="mt-4">
            Artificial Intelligence (AI) is revolutionizing the web design
            process by automating repetitive tasks and providing intelligent
            design suggestions. AI-driven tools can generate design layouts,
            optimize images, and even personalize user experiences based on
            behavior analytics
          </p>

          <ol className="space-y-6 mt-6">
            <li>
              1. Automated Design Generation: AI tools can create initial design
              drafts, allowing designers to focus on refinement and creativity.
            </li>
            <li>
              2. Personalization: AI can tailor content and design elements
              based on individual user preferences, enhancing the user
              experience.
            </li>
            <li>
              3. Efficiency: Automating routine tasks such as image optimization
              and layout adjustments speeds up the design process.
            </li>
          </ol>

          <h2 className="pt-10 lg:text-[30px] text-[24px] font-semibold">
            Immersive User Experience
          </h2>
          <p className="mt-4">
            Artificial Intelligence (AI) is revolutionizing the web design
            process by automating repetitive tasks and providing intelligent
            design suggestions. AI-driven tools can generate design layouts,
            optimize images, and even personalize user experiences based on
            behavior analytics
          </p>

          <ol className="space-y-6 mt-6">
            <li>
              1. 3D Graphics: Incorporating 3D elements can add depth and
              realism to your website, making it more engaging.
            </li>
            <li>
              2. Virtual Reality (VR): VR can create entirely immersive
              environments for users, ideal for industries such as real estate,
              gaming, and education.
            </li>
            <li>
              3. Augmented Reality (AR): AR overlays digital information onto
              the real world, providing interactive and engaging experiences for
              users.
            </li>
          </ol>

          <img
            src="/assets/blog/image-6.png"
            alt="image"
            className="py-20 w-[100%]"
          />

          <h2 className="pt-10 lg:text-[30px] text-[24px] font-semibold">
            Minimalist Design with Bold Typography
          </h2>
          <p className="mt-4">
            Minimalist design continues to be a popular trend, focusing on
            simplicity and usability. Coupled with bold typography, minimalist
            designs can make a strong impact without overwhelming users.
          </p>

          <ol className="space-y-6 mt-6">
            <li>
              1. Clean Layouts: Focus on simplicity with plenty of white space,
              ensuring content is easy to read and navigate.
            </li>
            <li>
              2. Bold Typography: Use large, bold fonts to create hierarchy and
              draw attention to key messages.
            </li>
            <li>
              3. Subtle Animations: Enhance minimalist designs with subtle
              animations to guide user interaction and add a touch of elegance.
            </li>
          </ol> */}

          <div className="bg-[#fff] text-[#808080] lg:p-6 p-4 rounded-xl mt-20">
            <h2 className="text-[24px] font-semibold text-[#121212]">
              Leveraging These Trends
            </h2>
            <div className="space-y-6 text-[18px]">
              <p className="mt-4 mb-10">
                To leverage these trends effectively, consider the following
                strategies:
              </p>
              <p>
                Stay Informed: Keep up with industry news and updates to stay
                ahead of emerging trends.
              </p>
              <p>
                Experiment and Innovate: Don&apos;t be afraid to experiment with
                new technologies and design approaches.
              </p>
              <p>
                User Testing: Continuously test your designs with real users to
                gather feedback and make improvements.
              </p>
              <p>
                Focus on Performance: Ensure that new design elements do not
                compromise website performance. Fast-loading sites provide
                better user experiences.
              </p>
              <p>
                By incorporating these trends into your web design projects, you
                can create modern, engaging, and user-friendly websites that
                stand out in 2024 and beyond.{" "}
              </p>
            </div>
          </div>

          <div className="border-b border-[#808080] pt-[10vh]"></div>
          <div className="flex lg:flex-row flex-col justify-between lg:items-center space-y-10 lg:space-y-0 mt-6 pb-10 lg:pb-[15vh]">
            <div className="flex space-x-4">
              <p className="bg-[#fff] px-3 py-1 text-[#3d8eb9] rounded-full">
                Web Development
              </p>
              <p className="bg-[#fff] px-3 py-1 text-[#d04c95] rounded-full">
                Design
              </p>
              <p className="bg-[#fff] px-3 py-1 text-[#d04c95] rounded-full">
                SaaS
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center px-4 py-2 bg-[#fff] text-[#404040] rounded-xl space-x-3">
                <Copy />
                <h2>Copy link</h2>
              </div>
              <div className="">
                <Twitter />
              </div>
              <div className="">
                <Facebook />
              </div>
              <div className="bg-[#2a2a2a] p-2.5 rounded-full border border-[#404040]">
                <LinkedIn />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[90vw] mx-auto py-[10vh]">
          <h2 className="lg:text-[36px] text-[24px] font-semibold">
            View more posts
          </h2>
          <p className="lg:text-[20px] mt-2">
            The latest industry news, interviews, technologies, and resources.
          </p>

          <div className="mt-[10vh] flex lg:flex-row flex-col justify-between lg:space-x-10">
            <div className="flex lg:flex-row flex-col justify-between lg:w-[45%]">
              <div className="relative lg:w-[320px]">
                <img
                  src="/assets/blog/bl_two.png"
                  alt="img"
                  className="w-[100%]"
                />
                <div className="absolute flex justify-between bg-[#fff] w-[100%] bottom-0 bg-opacity-30 space-y-4 backdrop-blur-sm py-4 px-3">
                  <div className="flex flex-col">
                    <p>Olivia Rhye</p>
                    <p>20 Jan 2022</p>
                  </div>
                  <p>Design</p>
                </div>
              </div>

              <div className="lg:w-[50%] space-y-4 lg:mt-0 mt-10">
                <h2 className="text-[18px] font-semibold">
                  How to Create a Responsive Website Design
                </h2>
                <p>
                  Responsive design is essential for today&apos;s multi-device
                  world. Learn the best practices for creating websites that
                  look and perform great on all screen sizes.
                </p>

                <p className="text-[#3e4874]">Read post</p>
              </div>
            </div>

            <div className="flex lg:flex-row flex-col justify-between lg:w-[45%] lg:mt-0 mt-10">
              <div className="relative lg:w-[320px]">
                <img src="/assets/blog/bl_three.png" alt="img" />
                <div className="absolute flex justify-between bg-[#fff] w-[100%] bottom-0 bg-opacity-30 space-y-4 backdrop-blur-sm py-4 px-3">
                  <div className="flex flex-col">
                    <p>Olivia Rhye</p>
                    <p>20 Jan 2022</p>
                  </div>
                  <p>Design</p>
                </div>
              </div>

              <div className="lg:w-[50%] space-y-4 lg:mt-0 mt-10">
                <h2 className="text-[18px] font-semibold">
                  Effective Content Strategies for Your Website
                </h2>
                <p>
                  Content is king, but creating effective content requires
                  strategy. Find out how to develop a content strategy that
                  engages your audience and supports your business goals.
                </p>

                <p className="text-[#3e4874]">Read post</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BlogSlug;
