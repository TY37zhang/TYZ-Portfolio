import { Fragment } from "react";
const Intro = () => {
  return (
    <Fragment>
      <div className="top_author_image w-full h-auto clear-both float-left relative mb-[35px]">
        <img
          className="min-w-full"
          src="assets/img/slider/Photo-1.jpeg"
          alt="image"
        />
      </div>
      <div className="about_title w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[20px] mb-[30px]">
        <h3 className="text-[22px] font-bold">Tianyin Zhang</h3>
        <span>Full Stack Developer</span>
      </div>
      <div className="about_text w-full h-auto clear-both float-left border-solid border-[#DFDFDF] border-b pb-[31px] mb-[30px]">
        <p className="mb-[11px]">
          Hi, my name is <b>Tianyin Zhang</b>, but you can call me <b>Ty</b>. I
          am a newly graduated student at New York University, majoring in
          Computer Science, with a minor in Web Programming and Applications.
          I've spent most of my 4 years at NYU learning and practicing
          JavaScript. This is where my interest sparks!
          <br />
          <br />
          One of my specialities is taking an idea and building it from the
          ground up. I enjoy creating different type of sites with a unique,
          outstanding look as well as feature set. With extensive practices, my
          knowledge in full stack web development is very strong. Besides that,
          I can get familiar with new tools or frameworks pretty quickly.
          <br />
          <br />I am a very passionate person who loves to learn new things. I
          am also a very good team player. As my biggest interest outside of
          programming is creating and running communities. From online gaming
          community during high school, to pushing clean energy commute with{" "}
          <b>Personal Electric Vehicles</b> within NYC. I am always the one that
          make sure the direction the team is going towards never shift from the
          original goal. With the training specifically focused on full stack
          web development in an Agile Methodology from few of my high level
          courses at NYU, I believe I will be able to onboard any team with
          little to no problems.
        </p>
      </div>
      <div className="tokyo_tm_short_info w-full h-auto clear-both float-left flex border-solid border-[#DFDFDF] border-b pb-[30px] mb-[40px]">
        <div className="left w-1/2 pr-[50px]">
          <div className="tokyo_tm_info w-full h-auto clear-both float-left">
            <ul className="m-0 list-none">
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Birthday:
                </span>
                <span>11.01.1999</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Age:
                </span>
                <span>23</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Location:
                </span>
                <span>San Jose, CA, USA</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Email:
                </span>
                <span>
                  <a
                    className="text-[#767676] transition-all duration-300 hover:text-black"
                    href="mailto:hi@tianyinzhang.com"
                  >
                    hi@tianyinzhang.com
                  </a>
                </span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Phone:
                </span>
                <span>
                  <a
                    className="text-[#767676] transition-all duration-300 hover:text-black"
                    href="tel:+1 408 609 4697"
                  >
                    +1 408 609 4697
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="right w-1/2 pl-[50px]">
          <div className="tokyo_tm_info">
            <ul className="m-0 list-none">
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Work Authorization:
                </span>
                <span>Able to work within US freely</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Education:
                </span>
                <span>New York University</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Degree:
                </span>
                <span>B.A. in Computer Science</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Interest:
                </span>
                <span>Full Stack Development</span>
              </li>
              <li className="m-0">
                <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                  Freelance:
                </span>
                <span>Available</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tokyo_tm_button" data-position="left">
        <a href="assets/img/cv/Tianyin_Zhang_Resume.pdf" download>
          <span>Download Resume</span>
        </a>
      </div>
    </Fragment>
  );
};
export default Intro;
