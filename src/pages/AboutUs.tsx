import { useNavigate } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { Director, happypyjamas, playground, playingstudent } from "../assets";
import Accordion from "../components/ui/display/accordion/Accordion";
import { useEffect, useState } from "react";
import List from "../components/ui/list/List";
import Slider from "react-slick";
const autoplaySpeed = 3000;

const AboutUs = () => {
  let navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    setIsDarkMode(darkModeMediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    darkModeMediaQuery.addEventListener("change", handleChange);
    return () => {
      darkModeMediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const accordionItems = [
    {
      title: "Vision",
      content:
        "To make New Hall a centre of excellence, aiming to attain the highest level in areas of academics, morals, arts and sports within a truly inclusive environment.",
    },
    {
      title: "Our Mission Statement",
      content:
        "Providing a rich learning environment by empowering every child to develop his⁄her full potential between Home and School.",
    },
  ];
  const values = [
    {
      id: "1",
      description: "Respect for People",
    },
    {
      id: "2",
      description: "Ethical Behaviour",
    },
    {
      id: "3",
      description: "Diligence",
    },
    {
      id: "4",
      description: "Creativity",
    },
    {
      id: "5",
      description: "Accountability",
    },
  ];
  const items = [
    {
      id: 1,
      description:
        "To impact knowledge through a broad and balanced curriculum.",
    },
    {
      id: 2,
      description:
        "To teach students to work hard, take pride in their work and pay attention to details.",
    },
    {
      id: 3,
      description:
        "To develop necessary skills to make practical use of knowledge gained.",
    },
    {
      id: 4,
      description:
        "To inculcate good manners, behavior, courtesy and sense of responsibility to partner as a member of a civilized society, knowing the difference between right and wrong.",
    },
    {
      id: 5,
      description:
        "To encourage the awareness of the moral, religious, social, political and environmental issues of the day.",
    },
    {
      id: 6,
      description:
        "To maximize potentials in all spheres of work – academics, culture and sports.",
    },
    {
      id: 7,
      description:
        "To inspire in each generation of pupils an appreciation of their cultural heritage.",
    },
    {
      id: 8,
      description:
        "To ensure our pupils leave us at the completion of their course not only equipped for their further education, but also for life.",
    },
  ];
  const handleClick = () => {
    navigate("/home");
  };
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: autoplaySpeed,
    arrows: false,
    adaptiveHeight: false,
    lazyLoad: "ondemand" as "ondemand",
  };

  return (
    <div className="mt-10 lg:mt-[12rem]">
      <div className="">
        <div
          className={`h-[120px] flex justify-start items-center ${
            isDarkMode ? "bg-transparent" : "bg-[#F3F3F3]"
          }`}
        >
          <h2 className="font-Raleway px-4 lg:px-[8%] text-[36px] font-normal text-left leading-[44px]">
            About Us
          </h2>
        </div>
        <div className="flex mb-6 px-4 py-4 border-b-[1.5px] border-[#ddd] lg:px-[8%] justify-start gap-2 items-center">
          <button
            onClick={handleClick}
            className="text-[14px] font-normal font-Raleway"
          >
            Home
          </button>
          <FaAngleRight />
          <p className="text-[14px] font-normal font-Raleway text-blue-500">
            About Us
          </p>
        </div>
        <div className="px-4 lg:px-[8%] w-full lg:w-[50%]">
          <Slider {...settings}>
            <div className="relative m-0 p-0 w-[30$]">
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-55 z-10"></div>
              <img
                src={happypyjamas}
                alt="Slide 1"
                className="w-full object-cover"
              />
            </div>
            <div className="relative m-0 p-0 w-[30$]">
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-55 z-10"></div>
              <img
                src={playground}
                alt="Slide 2"
                className="w-full object-cover"
              />
            </div>
            <div className="relative m-0 p-0 w-[30$]">
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-55 z-10"></div>
              <img
                src={playingstudent}
                alt="Slide 3"
                className="w-full object-cover"
              />
            </div>
          </Slider>
        </div>
        <div className="px-4 my-6 lg:my-[2%] lg:px-[8%] flex flex-col lg:flex-row justify-between items-start">
          <div className=" w-full flex flex-col justify-start items-start lg:w-[65%]">
            <h2 className="font-Raleway mb-8 text-[36px] font-normal text-left leading-[44px]">
              Introduction
            </h2>
            <p className="font-OpenSans mt-4 text-[16px] font-normal leading-[25.6px] text-justify">
              New Hall International School Lekki is an integral part of the
              community both educationally and socially. The School looks bright
              and welcoming. We have a beautiful learning environment for our
              children with world-class teaching and learning facilities. Our
              school offers a wide range of learning experiences from academics
              to morals and sports. Our curriculum is a unique blend of British
              and Nigeria based on our philosophy that children’s heritage and
              culture should be preserved even in attempts at internationalism.
              However, we run full Montessori in our Nursery school. Our school
              utilizes active learning, creative thinking, global awareness ,
              I.C.T. and other 21st century learning approaches in our
              classrooms. The school collaborates with parents and various
              stakeholders as well as international educational agencies to
              deliver the best learning outcomes for every child.” to “We run
              full Montessori in our Nursery school. Our school utilizes active
              learning, creative thinking, global awareness, I.C.T. and other
              21st century learning approaches in our classrooms. The school
              collaborates with parents and various stakeholders as well as
              international educational agencies to deliver the best learning
              outcomes for every child
            </p>
            <div className="w-full mt-4 lg:mt-[2%]">
              <h2 className="font-Raleway text-[36px] font-normal text-left leading-[44px]">
                Philosophy of the School
              </h2>
              <ul className="list-disc">
                <li className="font-OpenSans mt-4 text-[16px] font-normal leading-[25.6px] text-justify">
                  New Hall is an all-inclusive establishment. The only
                  conditions for admission are academic merit and the commitment
                  of learners and their parents or guardians to work with the
                  school to ensure success in learning.
                </li>
                <li className="font-OpenSans mt-4 text-[16px] font-normal leading-[25.6px] text-justify">
                  We believe that every child can learn if they are adequately
                  supported and put in the right environment. We also believe
                  that learning should be fun. We recognize the fact that the
                  method and direction of education are fast changing given the
                  global workplace realities. As such, our educators retrain and
                  update their teaching skills to provide relevant education. We
                  also recognize the role of teachers as facilitators of the
                  creative process of learning.{" "}
                </li>
                <li className="font-OpenSans mt-4 text-[16px] font-normal leading-[25.6px] text-justify">
                  At New Hall, we believe that every child should be given the
                  freedom to participate actively in his/her own education. We
                  think that children should have opportunities to demonstrate
                  and develop their unique talents; we understand that children
                  have different ways of learning and different interests, and
                  we are committed to providing an environment that inspires
                  each child to be the best he or she can be.
                </li>
              </ul>
            </div>
          </div>
          <div className=" w-full flex flex-col justify-start items-start lg:w-[30%]">
            <div className="w-full">
              <h2 className="font-Raleway mb-8 text-[36px] font-normal text-left leading-[44px]">
                Mission & Vision
              </h2>
              <Accordion items={accordionItems} />
            </div>
            <div className="w-full mt-4 lg:mt-[2%] flex flex-col justify-start items-start gap-2">
              <h2 className="font-Raleway text-[36px] font-normal text-left leading-[44px]">
                Core Values
              </h2>
              <List items={values} />
            </div>
          </div>
        </div>
        <div className="w-full px-4 lg:px-[8%] flex flex-col justify-start items-start gap-2">
          <h2 className="font-Raleway text-[36px] font-normal text-left leading-[44px]">
            Aims & Objectives
          </h2>
          <List items={items} />
        </div>
        <div className="px-4 my-6 lg:my-[2%] lg:px-[8%] flex flex-col lg:flex-row justify-between items-start">
          <div className="w-full flex justify-between items-start flex-col lg:flex-row gap-6">
            <img src={Director} alt="Director" className="w-[200px] h-[20%]" />
            <div className="flex flex-col justify-between items-start">
              <h2 className="font-Raleway mb-8 text-[36px] font-normal text-left leading-[44px]">
                Director’s Welcome
              </h2>
              <p className="font-OpenSans text-[16px] font-normal leading-[25.6px] text-justify">
                Welcome to New Hall International School Lekki, a new dawn in
                all-round child education with a first class customized
                curriculum to give an edge start to our children in life. New
                Hall International School is a co-educational, multicultural
                School situated in a quiet, leafy campus inside Chevy view
                estate, Lekki.
              </p>
              <p className="font-OpenSans mt-4 text-[16px] font-normal leading-[25.6px] text-justify">
                The primary focus of our Montessori program is to prepare an
                environment that supports the physical, cognitive, social and
                emotional development of each child. Our children are inspired
                and motivated by gifted and well trained teachers in an
                environment that is stimulating and exciting for every child to
                be happy and safe and which allows every child to discover his
                or her God’s given talents.
              </p>
              <div className="mt-20">
                <span className="font-OpenSans text-[16px] font-bold mr-4 leading-[25.6px] text-justify">
                  Mr Biodun Agbaje
                </span>
                <span className="font-OpenSans text-[16px] font-normal leading-[25.6px] text-justify">
                  School Director
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
