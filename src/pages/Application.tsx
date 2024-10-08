// import { SetStateAction, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaAngleRight } from "react-icons/fa";
import { DSC_4672, RegistrationForm } from "../assets";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Application = () => {
  // let navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detect dark mode using the 'prefers-color-scheme' media query
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

  // const handleClick = () => {
  //   navigate("/home");
  // };

  return (
    <div className="mt-10 lg:mt-[12rem]">
      <div className="">
        <div
          className={`h-[120px] flex justify-start items-center ${
            isDarkMode ? "bg-transparent" : "bg-[#F3F3F3]"
          }`}
        >
          <h2 className="font-OpenSans px-4 lg:px-[8%] text-[36px] font-normal text-left leading-[44px]">
            Applying to New Hall
          </h2>
        </div>
        {/* <div className="flex mb-6 px-4 py-4 border-b-[1.5px] border-[#DDD] lg:px-[8%] justify-start gap-2 items-center">
          <button
            onClick={handleClick}
            className="text-[16px] font-normal font-OpenSans"
          >
            Home
          </button>
          <FaAngleRight />
          <p className="text-[16px] font-normal font-OpenSans text-blue-500">
            Applying to New Hall
          </p>
        </div> */}
        <div className="px-4 my-6 lg:my-[5%] lg:px-[8%] flex flex-col sm:flex-row justify-between items-start">
          {/* <div className="border-[1px] mb-5 lg:mb-0 border-[#F3F3F3] w-full flex flex-col justify-start items-start lg:w-[20%]">
            {menus.map((menu) => (
              <button
                key={menu.href}
                onClick={() => handleMenuClick(menu)}
                className={`h-[50px] text-[16px] font-OpenSans font-normal w-full text-left border-b-[1px] px-3 hover:border-l-[3px] hover:border-b-[0px] hover:border-[#FF7264] ${
                  activeMenu === menu.href
                    ? "bg-[#fff] text-[#282E3F] border-l-[3px] border-b-[0px] border-[#FF7264]"
                    : theme === "light"
                    ? "bg-[#282E3F] text-[#fff]"
                    : "bg-[#fff] text-[#282E3F]"
                }`}
              >
                {menu.text}
              </button>
            ))}
          </div> */}
          <div className="w-full gap-2 flex flex-col justify-between items-center">
            <div className="w-full  flex flex-col justify-start items-start gap-2">
              <motion.div
                className="w-full"
                // ref={refRight}
                // initial={{ x: "5%", opacity: 0 }}
                // animate={controlsRight}
              >
                <div className="relative m-0 p-0 w-[100%]">
                  <img
                    src={DSC_4672}
                    alt="Slide 1"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              <div className="w-full">
                <h2 className="font-OpenSans text-[26px] font-normal text-left leading-[44px]">
                  PARENT VISIT
                </h2>
                <p className="font-OpenSans text-[16px] font-normal leading-[25.6px] text-justify">
                  We ask parents of applicants to observe a classroom or attend
                  an information session (or both).
                </p>
                <h2 className="font-OpenSans my-3 text-[16px] font-normal text-left leading-[44px]">
                  Classroom observations:
                </h2>
                <p className="font-OpenSans text-[16px] font-normal leading-[25.6px] text-justify">
                  We offer prospective parents a tour of our facilities and
                  classroom between 10.00am to 4.00pm.
                </p>
                <div className="w-full flex flex-col lg:flex-row justify-between items-start mt-8 gap-4">
                  <div className="w-full">
                    <h2
                      className={`text-[16px] font-OpenSans font-semibold uppercase w-full text-left`}
                    >
                      Information Sessions
                    </h2>
                    <motion.div
                      className="w-full mb-[2rem] shadow-lg"
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <p className="font-OpenSans my-4 text-[16px] font-normal leading-[25.6px] text-justify">
                        Our information sessions offer you many ways to become
                        better acquainted with New Hall. First our Admission
                        officer and Head of School will give a brief overview.
                        This is very informative, and we encourage you to make
                        the effort to arrive in time to hear what they have to
                        say. We also have teachers from every level available in
                        our auditorium to answer questions and demonstrate
                        Montessori lessons. Parents, students and faculty
                        members will also take you on a tour of our campus.
                        Administrative personnel will be available to answer
                        questions about New Hall or about the admissions
                        process.
                      </p>
                      <p className="font-OpenSans my-4 text-[16px] font-normal leading-[25.6px] text-justify">
                        Reservations for an information sessions are not
                        necessary, but please be sure to sign in when you
                        arrive. You may bring your children with you if you
                        would like them to see an overview of the school. All
                        applicants will have the opportunity to visit during the
                        admissions process (see details below).
                      </p>
                      <h2 className="font-OpenSans my-4 text-[16px] font-semibold text-left leading-[44px]">
                        SUBMIT AN APPLICATION
                      </h2>
                      <p className="font-OpenSans text-[16px] font-normal leading-[25.6px] text-justify">
                        As soon as we receive an application form, we will
                        contact you about the rest of the process. To be
                        considered in our first round of file reviews, the last
                        possible date to submit an application form is January
                        25 of every year; applications received after that date
                        will be considered if space is available, or for our
                        waiting list. Our application form is available in our
                        admissions packet or{" "}
                        <a
                          href={RegistrationForm}
                          download="RegistrationForm.pdf"
                          className="text-[#1EB3FE]"
                        >
                          (download here)
                        </a>
                        . A application fee is due with the application form
                        (cheques payable to New Hall School). As soon as we
                        receive the application, we will notify you about
                        scheduling the rest of the process. The sooner the
                        application comes in, the sooner we can schedule your
                        visits.
                      </p>
                      <h2 className="font-OpenSans  my-4  text-[16px] font-semibold text-left leading-[44px]">
                        STUDENT VISITS
                      </h2>
                      <p className="font-OpenSans text-[16px] font-normal leading-[25.6px] text-justify">
                        After your application is received, the admissions
                        office will schedule a visit for your child. The purpose
                        of the visit is to allow your child and our teachers to
                        interact, and to help determine whether New Hall is the
                        appropriate environment for your child.
                      </p>
                      <h2 className="font-OpenSans  my-4  text-[16px] font-semibold text-left leading-[44px]">
                        ENROLLMENT
                      </h2>
                      <p className="font-OpenSans text-[16px] font-normal leading-[25.6px] text-justify">
                        The Admissions Committee offers enrollment to students
                        after it has been determined that the student and New
                        Hall School are a good match for each other, and
                        provided that appropriate placement is available.
                      </p>
                      <p className="font-OpenSans text-[16px] font-normal leading-[25.6px] text-justify">
                        Applicants who have completed all necessary steps by the
                        appropriate deadlines will be notified. Families must
                        then make an enrollment decision as soon as possible.
                        Payment of registration fee is required to reserve your
                        enrollment.
                      </p>
                    </motion.div>
                  </div>
                  {/* <div className="w-full lg:w-[50%]">
                    <button
                      className="cursor-pointer flex justify-between items-center border-[1px] border-[#ddd] w-full p-3 h-auto"
                      onClick={() => setParentactive(!parentactive)}
                    >
                      <h2
                        className={`text-[16px] font-OpenSans font-normal w-full text-left`}
                      >
                        Parents
                      </h2>
                      {parentactive ? (
                        <GoChevronUp fontSize={25} />
                      ) : (
                        <GoChevronDown fontSize={25} />
                      )}
                    </button>
                    {parentactive && (
                      <motion.div
                        className="w-full mb-[2rem] shadow-lg p-4"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <p className="font-OpenSans mt-4 text-[16px] font-normal leading-[25.6px] text-justify">
                          We schedule a 30-minute visit for parents to meet with
                          New Hall teachers to help us learn more about your
                          child, to discuss educational goals, and to help
                          ensure that our school is the right match for your
                          family.
                        </p>
                        <h2 className="font-OpenSans my-3 text-[16px] italic font-semibold text-left leading-[44px]">
                          Parents of Toddler:
                        </h2>
                        <p className="font-OpenSans text-[16px] font-normal leading-[25.6px] text-justify">
                          Since parents accompany their child for the student
                          visit, we will schedule another time for parents to
                          meet with our Toddler Director (without their child).
                        </p>
                        <h2 className="font-OpenSans my-3 text-[16px] italic font-semibold text-left leading-[44px]">
                          Pre-School & Pre-Nursery Parents:
                        </h2>
                        <p className="font-OpenSans text-[16px] font-normal leading-[25.6px] text-justify">
                          Parents will meet with New Hall faculty at the same
                          time their child is visiting a classroom.
                        </p>
                        <h2 className="font-OpenSans my-3 text-[16px] italic font-semibold text-left leading-[44px]">
                          First Grade Parents:
                        </h2>
                        <p className="font-OpenSans text-[16px] font-normal leading-[25.6px] text-justify">
                          Parents of first grade applicants will meet with a
                          Lower Elementary teacher, either when they drop their
                          child for his/her visit (12:30–1:00 p.m.) or just
                          before picking up their child (2:00–2:30 p.m.)
                        </p>
                        <h2 className="font-OpenSans my-3 text-[16px] italic font-semibold text-left leading-[44px]">
                          Elementary Parents (2nd–6th grade applicants)
                        </h2>
                        <p className="font-OpenSans text-[16px] font-normal leading-[25.6px] text-justify">
                          Parents of second and third grade applicants will meet
                          with a Lower Elementary teacher, either when they drop
                          their child for his/her visit (9:00–9:30 a.m.) or just
                          before picking up their child (12:30–1:00 p.m.)
                        </p>
                        <p className="font-OpenSans text-[16px] font-normal leading-[25.6px] text-justify">
                          Parents of Upper Elementary (4th–6th) applicants will
                          meet with an Upper Elementary teacher, either when
                          they drop their child for his/her visit (9:00–9:30
                          a.m.) or just before picking up their child
                          (12:30–1:00 p.m.)
                        </p>
                        <h2 className="font-OpenSans my-3 text-[16px] italic font-semibold text-left leading-[44px]">
                          Junior and Senior Secondary School Parents (7-9th and
                          10&11th grade applicants)
                        </h2>
                        <p className="font-OpenSans text-[16px] font-normal leading-[25.6px] text-justify">
                          Parents of Junior and Senior Secondary School
                          applicants will meet with a Middle School teacher just
                          before picking up their child (2:00–2:30 p.m.)
                        </p>
                      </motion.div>
                    )}
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
