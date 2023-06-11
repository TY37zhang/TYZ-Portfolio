import Isotope from "isotope-layout";
import { useContext, useEffect, useRef, useState } from "react";
import { TokyoContext } from "../Context";
import { tokyo } from "../utils";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";
const detailData = [
  {
    id: 1,
    thumbnail: "assets/img/portfolio/yt-logo-nobg.png",
    title: "Personal Electric Vehicle Review",
    text: [
      "Personal Electric Vehicles are a new and exciting way to get around the city. They are a great alternative to cars and public transport, and they are more environmentally friendly than other forms of transportations.",
      "My interests sparked back in 2019, when I first landed in NYC, the car traffic is so heavy all the time, and MTA always come with delays and service cancellation. So, I gave PEV a try, which started my journey with Electric Skateboards and Electric Unicycles.",
      "As someone who rides PEV daily, I expanded my connection with the manufactures, which they supported me to do reviews on their products. I was able to help the innovation in the industry, providing my input on the products as a experienced rider."
    ],
    client: "N/A",
    date: "March 2021 - Present",
    category: "Detail",
    website:<a href={'https://www.youtube.com/@AKA_TY37'} target={"youtube"}>Youtube</a>,
    share: [
      {
        id: 1,
        iconName: "icon-facebook-squared",
        link: "https://www.facebook.com/",
      },
      {
        id: 2,
        iconName: "icon-twitter-squared",
        link: "https://twitter.com/",
      },
      {
        id: 3,
        iconName: "icon-behance-squared",
        link: "https://www.behance.net/",
      },
      {
        id: 4,
        iconName: "icon-linkedin-squared",
        link: "https://www.linkedin.com/",
      },
    ],
    bigImage: "assets/img/portfolio/pev-review-1.jpg",
    images: ["assets/img/portfolio/pev-review-2.jpg", "assets/img/portfolio/pev-review-3.jpg"],
  },
  {
    id: 2,
    thumbnail: "assets/img/portfolio/pevnyc-logo.jpg",
    title: "PEV NYC",
    text: [
      "PEV NYC is a non-profit group I founded since October 2021. The goal for the group is bring Personal Electric Vehicle riders together, providing a friendly, inclusive, and positive community to the local NYC hobbyists.",
      "The group is actively managed by me and other hand-picked moderators, we actively host events such as group rides, group buys, and other activities to bring the community together.",
      "One key aspect of the PEV NYC is that we host new product demos from the manufactures as they release them, so the riders can try out the new products before they purchase them.",
      "We also provide a platform for riders to share their experiences, and help each other out with technical issues.",
      "The group is currently at 180+ members and growing, and the moderating team is planning to let the group grow naturally for a healthier growth."
    ],
    client: "N/A",
    date: "October 2021 - Present",
    category: "Detail",
    website:<a href={"https://www.pevnyc.org"} target={"pevnyc"}>pevnyc.org</a>,
    share: [
      {
        id: 1,
        iconName: "icon-facebook-squared",
        link: "https://www.facebook.com/",
      },
      {
        id: 2,
        iconName: "icon-twitter-squared",
        link: "https://twitter.com/",
      },
      {
        id: 3,
        iconName: "icon-behance-squared",
        link: "https://www.behance.net/",
      },
      {
        id: 4,
        iconName: "icon-linkedin-squared",
        link: "https://www.linkedin.com/",
      },
    ],
    bigImage: "assets/img/portfolio/pevnyc-big-img.jpg",
    images: ["assets/img/portfolio/pevnyc-img-1.jpg", "assets/img/portfolio/pevnyc-img-2.jpg"],
  },
  {
    id: 3,
    thumbnail: "assets/img/portfolio/photography.jpeg",
    title: "Freelance Photography",
    text: [
      "I started photography as a hobby back in childhood, and I have been actively shooting since 2021. I have been shooting for events, portraits, and products, as well as pets.",
      "My specialty is shooting with natural light, and I enjoy shooting pets and environmental portraits the most. Motion Blur as well as Bokeh are my favorite effects to play with when shooting, as they both serve the purpose of popping out the subject from the image.",
      "I am currently shooting with Sony Alpha system with the Sony A7IV, and my go to focal length is either 28mm or 35mm. I also enjoy shooting with my 85mm for portraits, and I am looking into expanding my lens collection with ultra-wide zoom lens and telephoto zoom lens.",
    ],
    client: "Multiple",
    date: "May 2021 - Present",
    category: "Detail",
    website:<a href={"https://www.instagram.com/aka_ty37/"} target={"instagram"}>Instagram</a>,
    url: <a href={"https://www.fiverr.com/s2/c8efc8617b"} target={"fiverr"}>Fiverr</a>,
    share: [
      {
        id: 1,
        iconName: "icon-facebook-squared",
        link: "https://www.facebook.com/",
      },
      {
        id: 2,
        iconName: "icon-twitter-squared",
        link: "https://twitter.com/",
      },
      {
        id: 3,
        iconName: "icon-behance-squared",
        link: "https://www.behance.net/",
      },
      {
        id: 4,
        iconName: "icon-linkedin-squared",
        link: "https://www.linkedin.com/",
      },
    ],
    bigImage: "assets/img/portfolio/photography-img-2.jpg",
    images: ["assets/img/portfolio/photography-img-1.jpg", "assets/img/portfolio/photography-img-3.jpg"],
  },
];
const Portfolio = () => {
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    const data = document.querySelector(".item__");
    if (data.length !== 0) {
      setTimeout(() => {
        isotope.current = new Isotope(".gallery_zoom", {
          itemSelector: ".item__",
        });
      }, 3000);
    }
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  useEffect(() => {
    tokyo.portfolioHover();
    tokyo.dataImage();
  });
  const { setPortfolioDetailsModal, modalToggle } = useContext(TokyoContext);
  return (
    <SectionContainer name={"portfolio"}>
      <div className="container">
        <div className="tokyo_tm_portfolio w-full h-auto clear-both float-left px-0 pt-[100px] pb-[40px]">
          <div className="tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]">
            <div className="title_flex w-full h-auto clear-both flex justify-between items-end">
              <SectionTitle
                pageName={"Portfolio"}
                title={"Creative Portfolio"}
              />
              <div className="portfolio_filter">
                <ul className="list-none">
                  <li className="mr-[25px] inline-block">
                    <a
                      href="#"
                      className="current text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                      onClick={handleFilterKeyChange("*")}
                    >
                      All
                    </a>
                  </li>
                  {/*<li className="mr-[25px] inline-block">*/}
                  {/*  <a*/}
                  {/*    className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"*/}
                  {/*    href="#"*/}
                  {/*    onClick={handleFilterKeyChange("vimeo")}*/}
                  {/*  >*/}
                  {/*    Vimeo*/}
                  {/*  </a>*/}
                  {/*</li>*/}
                  <li className="mr-[25px] inline-block">
                    <a
                      className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                      href="#"
                      onClick={handleFilterKeyChange("youtube")}
                    >
                      Youtube
                    </a>
                  </li>
                  {/*<li className="mr-[25px] inline-block">*/}
                  {/*  <a*/}
                  {/*    className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"*/}
                  {/*    href="#"*/}
                  {/*    onClick={handleFilterKeyChange("soundcloud")}*/}
                  {/*  >*/}
                  {/*    Soundcloud*/}
                  {/*  </a>*/}
                  {/*</li>*/}
                  <li className="mr-[25px] inline-block">
                    <a
                      className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                      href="#"
                      onClick={handleFilterKeyChange("image")}
                    >
                      Image
                    </a>
                  </li>
                  <li className="inline-block">
                    <a
                      className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                      href="#"
                      onClick={handleFilterKeyChange("detail")}
                    >
                      Detail
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="list_wrapper w-full h-auto clear-both float-left">
            <ul className="portfolio_list gallery_zoom ml-[-40px] list-none">
              <li className="youtube mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="NYC Esk8 Street Bomb"
                    data-category="Youtube"
                  >
                    <a
                      className="popup-youtube"
                      href="https://www.youtube.com/watch?v=1sjxXucqU_8"
                    >
                      <img
                        className="opacity-100 "
                        src="assets/img/thumbs/street-ride-thumb.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/street-ride-thumb.jpg"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="youtube mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="Esk8 Review: Ownboard Bamboo Zeus Pro"
                    data-category="Youtube"
                  >
                    <a
                      className="popup-youtube"
                      href="https://www.youtube.com/watch?v=ZmV2q2B1Y1w&t=42s"
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/bzeus-pro-review.jpeg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/bzeus-pro-review.jpeg"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="youtube mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="Skateboard Overflow NYC"
                    data-category="Youtube"
                  >
                    <a
                      className="popup-youtube"
                      href="https://www.youtube.com/watch?v=DK-rnYJXYkQ&t=115s"
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/overflow-thumbnail.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/overflow-thumbnail.jpg"
                      />
                    </a>
                  </div>
                </div>
              </li>
              
              <li className="detail mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                    className="entry tokyo_tm_portfolio_animation_wrap"
                    data-title="PEV NYC"
                    data-category="Detail"
                  >
                    <a
                      className="popup_info"
                      href="#"
                      onClick={() => {
                        setPortfolioDetailsModal(detailData[1]);
                        modalToggle(true);
                      }}
                    >
                      <img
                        className="opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt="image"
                      />
                      <div
                        className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                        data-img-url="assets/img/portfolio/pevnyc-logo.jpg"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="detail mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                      className="entry tokyo_tm_portfolio_animation_wrap"
                      data-title="Personal Electric Vehicle Review"
                      data-category="Detail"
                  >
                    <a
                        className="popup_info"
                        href="#"
                        onClick={() => {
                          setPortfolioDetailsModal(detailData[0]);
                          modalToggle(true);
                        }}
                    >
                      <img
                          className="opacity-0 min-w-full"
                          src="assets/img/thumbs/1-1.jpg"
                          alt="image"
                      />
                      <div
                          className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                          data-img-url="assets/img/portfolio/yt-logo-2.png"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="detail mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                      className="entry tokyo_tm_portfolio_animation_wrap"
                      data-title="Photography"
                      data-category="Detail"
                  >
                    <a
                        className="popup_info"
                        href="#"
                        onClick={() => {
                          setPortfolioDetailsModal(detailData[2]);
                          modalToggle(true);
                        }}
                    >
                      <img
                          className="opacity-0 min-w-full"
                          src="assets/img/thumbs/1-1.jpg"
                          alt="image"
                      />
                      <div
                          className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                          data-img-url="assets/img/portfolio/photography.jpeg"
                      />
                    </a>
                  </div>
                </div>
              </li>
              
              <li className="image mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                      className="entry tokyo_tm_portfolio_animation_wrap"
                      data-title="Pidan"
                      data-category="Image"
                  >
                    <a className="zoom" href="assets/img/portfolio/images/pidan-1.jpg">
                      <img
                          className="opacity-0 min-w-full"
                          src="assets/img/thumbs/1-1.jpg"
                          alt="image"
                      />
                      <div
                          className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                          data-img-url="assets/img/portfolio/images/pidan-1.jpg"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="image mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                      className="entry tokyo_tm_portfolio_animation_wrap"
                      data-title="Brownie"
                      data-category="Image"
                  >
                    <a className="zoom" href="assets/img/portfolio/images/brownie-1.jpg">
                      <img
                          className="opacity-0 min-w-full"
                          src="assets/img/thumbs/1-1.jpg"
                          alt="image"
                      />
                      <div
                          className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                          data-img-url="assets/img/portfolio/images/brownie-1.jpg"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="image mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                      className="entry tokyo_tm_portfolio_animation_wrap"
                      data-title="DuoDuo"
                      data-category="Image"
                  >
                    <a className="zoom" href="assets/img/portfolio/images/duoduo-1.jpg">
                      <img
                          className="opacity-0 min-w-full"
                          src="assets/img/thumbs/1-1.jpg"
                          alt="image"
                      />
                      <div
                          className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                          data-img-url="assets/img/portfolio/images/duoduo-1.jpg"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="image mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                      className="entry tokyo_tm_portfolio_animation_wrap"
                      data-title="NaiGai"
                      data-category="Image"
                  >
                    <a className="zoom" href="assets/img/portfolio/images/naigai-1.jpg">
                      <img
                          className="opacity-0 min-w-full"
                          src="assets/img/thumbs/1-1.jpg"
                          alt="image"
                      />
                      <div
                          className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                          data-img-url="assets/img/portfolio/images/naigai-1.jpg"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="image mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                      className="entry tokyo_tm_portfolio_animation_wrap"
                      data-title="Hudson Yard"
                      data-category="Image"
                  >
                    <a className="zoom" href="assets/img/portfolio/images/hudson-yard-1.jpg">
                      <img
                          className="opacity-0 min-w-full"
                          src="assets/img/thumbs/1-1.jpg"
                          alt="image"
                      />
                      <div
                          className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                          data-img-url="assets/img/portfolio/images/hudson-yard-1.jpg"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="image mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                      className="entry tokyo_tm_portfolio_animation_wrap"
                      data-title="Street Photography"
                      data-category="Image"
                  >
                    <a className="zoom" href="assets/img/portfolio/images/StreetPhoto-1.jpg">
                      <img
                          className="opacity-0 min-w-full"
                          src="assets/img/thumbs/1-1.jpg"
                          alt="image"
                      />
                      <div
                          className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                          data-img-url="assets/img/portfolio/images/StreetPhoto-1.jpg"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="image mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                      className="entry tokyo_tm_portfolio_animation_wrap"
                      data-title="Street Photography"
                      data-category="Image"
                  >
                    <a className="zoom" href="assets/img/portfolio/images/StreetPhoto-2.jpg">
                      <img
                          className="opacity-0 min-w-full"
                          src="assets/img/thumbs/1-1.jpg"
                          alt="image"
                      />
                      <div
                          className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                          data-img-url="assets/img/portfolio/images/StreetPhoto-2.jpg"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="image mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                      className="entry tokyo_tm_portfolio_animation_wrap"
                      data-title="Street Photography"
                      data-category="Image"
                  >
                    <a className="zoom" href="assets/img/portfolio/images/StreetPhoto-3.jpg">
                      <img
                          className="opacity-0 min-w-full"
                          src="assets/img/thumbs/1-1.jpg"
                          alt="image"
                      />
                      <div
                          className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                          data-img-url="assets/img/portfolio/images/StreetPhoto-3.jpg"
                      />
                    </a>
                  </div>
                </div>
              </li>
              <li className="image mb-[40px] float-left w-1/3 pl-[40px] item__">
                <div className="inner w-full h-auto clear-both float-left overflow-hidden relative">
                  <div
                      className="entry tokyo_tm_portfolio_animation_wrap"
                      data-title="Street Photography"
                      data-category="Image"
                  >
                    <a className="zoom" href="assets/img/portfolio/images/StreetPhoto-4.jpg">
                      <img
                          className="opacity-0 min-w-full"
                          src="assets/img/thumbs/1-1.jpg"
                          alt="image"
                      />
                      <div
                          className="abs_image absolute inset-0 bg-no-repeat bg-cover bg-center transition-all duration-300"
                          data-img-url="assets/img/portfolio/images/StreetPhoto-4.jpg"
                      />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Portfolio;
