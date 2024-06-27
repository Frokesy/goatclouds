import { ArrowRight } from "../../icons/icons";
import { NavLink } from "react-router-dom";

const BlogItems = () => {
  const items = [
    {
      id: 1,
      img: "/assets/blog/bl_two.png",
      title: "How to Create a Responsive Website Design",
      excerpt:
        "Responsive design is essential for today’s multi-device world. Learn the best practices for creating websites that look and perform great on all screen sizes.",
    },
    {
      id: 2,
      img: "/assets/blog/bl_three.png",
      title: "Boost Your Online Presence: Effective SEO Strategies for 2024",
      excerpt:
        "Learn the most effective SEO strategies to enhance your website’s visibility and drive organic traffic. Our experts share insights on keyword research, on-page SEO, and the latest algorithm updates.",
    },
    {
      id: 3,
      img: "/assets/blog/bl_four.png",
      title: "The Future of Web Design: Trends to Watch in 2024",
      excerpt:
        "Learn the most effective SEO strategies to enhance your website’s visibility and drive organic traffic. Our experts share insights on keyword research, on-page SEO, and the latest algorithm updates.",
    },
    {
      id: 4,
      img: "/assets/blog/bl_five.png",
      title: "The Future of Web Design: Trends to Watch in 2024",
      excerpt:
        "Learn the most effective SEO strategies to enhance your website’s visibility and drive organic traffic. Our experts share insights on keyword research, on-page SEO, and the latest algorithm updates.",
    },
    {
      id: 5,
      img: "/assets/blog/bl_six.png",
      title:
        "Mobile App Development: Choosing Between Native and Cross-Platform",
      excerpt:
        "Deciding between native and cross-platform app development can be challenging. This post explores the pros and cons of each approach, helping you make an informed decision for your next mobile project.",
    },
    {
      id: 6,
      img: "/assets/blog/bl_seven.png",
      title: "The Future of Web Design: Trends to Watch in 2024",
      excerpt:
        "Learn the most effective SEO strategies to enhance your website’s visibility and drive organic traffic. Our experts share insights on keyword research, on-page SEO, and the latest algorithm updates.",
    },
  ];

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 w-[90vw] mx-auto gap-20 mt-20">
      {items.map((item) => (
        <div key={item.id} className="space-y-6">
          <img src={item.img} alt="img" className="w-[100%]" />
          <div className="flex space-x-6 text-[12px]">
            <p className="text-[#808080]">Design</p>
            <div className="flex items-center space-x-2">
              <p>8 min read</p>
              <ArrowRight />
            </div>
          </div>

          <NavLink
            to={`/blog/${item.id}`}
            className="lg:text-[24px] text-[20px] font-semibold"
          >
            {item.title}
          </NavLink>

          <p className="lg:text-[16px] text-[14px]">{item.excerpt}</p>

          <p className="text-[#3e4784]">[Read More]</p>

          <div className="flex items-center space-x-4">
            <img src="/assets/blog/avatar.png" alt="avatar" />
            <div className="text-[14px]">
              <h2>Phoenix Baker</h2>
              <p>19 Jan 2024</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogItems;
