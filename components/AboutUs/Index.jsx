import Image from "next/image";
import WTM from "../../images/logos/KSRIET.png";
import GFG from "../../images/logos/GFGLOGO.jpg";
import SectionTitle from "../shared/SectionTitle";
import GDG from "../../images/logos/GDGAlgiers.png";
import ParagSection from "../shared/ParagSection";
import globe from "../../images/shapes/globe.png";
import maqam from "../../images/shapes/MaqamWhite.png";
const AboutUs = () => {
  return (
    <section id="about-us">
      {/* <div className=" z-0 h-[100px] max-w-[100%] bg-gradient-to-t from-[#3177ab] to-qiskit-white"></div> */}

      <div className="relative about-bg py-16">
        <div className="absolute top-1/4 right-4 lg:w-[55px] h-[32px] w-[32px] lg:h-[55px] 2xl:w-[82px] 2xl:h-[82px]">
          <Image src={globe} layout="fill" />
        </div>

        <div className="absolute bottom-8 left-4 w-[32px] h-[32px] md:w-[40px] md:h-[40px] lg:w-[55px] lg:h-[55px] 2xl:w-[82px] 2xl:h-[82px]">
          <Image src={globe} layout="fill" />
        </div>

        <div className="absolute bottom-1/2 left-8 w-[75px] h-[53px] md:w-[40px] md:h-[40px] lg:w-[106px] lg:h-[76px] 2xl:w-[160px] 2xl:h-[112px]">
          <Image src={maqam} layout="fill" />
        </div>
        <div className="w-10/12 mx-auto flex flex-col gap-8">
          <SectionTitle isWhite={true} title={"About us"} />
          <div className="flex flex-col gap-12 lg:gap-28">
            <ParagSection
              keyword1={"KSRIET "}
              paragraph1={`also known as The "K S R Institute for Engineering and Technology" an autonomous college is another landmark of the Aarthi Educational & Charitable Trust which has the perquisite of sprawling education proportionally to the society. It has been founded in the year 2011 by the man of great insight, `}
              keyword2={" Thiru.R. Srinivasan. "}
              paragraph2={`He is the younger son of Lion Dr.K.S.Rangasamy whose altruism enlightens the society. His constant dreams and endeavors erected the dome of knowledge for quenching the long unanswered quest among the blooming minds.`}
              img={WTM}
              reverse={false}
              redirect={"https://www.ksriet.ac.in"}
            ></ParagSection>
            <ParagSection
              keyword1={"GDSC KSRIET "}
              paragraph1={`is a community of geeks who help each other learn new technologies, in a peer-to-peer community based learning environment. We believe that every student can become a developer and use their newfound knowledge to make an impact on their society. To help students bridge the gap between theory and practice, we host workshops, meet-ups, hackathons, and informative sessions.`}
              keyword2={" Google Developer Student Clubs "}
              paragraph2={`are university based community groups for students interested in Google developer technologiesthe National Higher School of Computer science . Join our community chapter, and never miss out on any event-related updates!`}
              img={GDG}
              reverse={true}
              redirect={"https://gdsc.community.dev/ksr-institute-for-engineering-technology-namakkal/"}
            ></ParagSection>
            <ParagSection
              keyword1={"GFG KSRIET "}
              paragraph1={`also known as The "GeeksForGeeks Student Chapter KSRIET" are university-based community chapters creating a coding culture for students interested in Computer Science and other core technical competencies.`}
              keyword2={"GFG Student Chapter KSRIET"}
              paragraph2={`serves as a gateway to forums, panel discussions, and symposia that further a student's professional development.`}
              img={GFG}
              reverse={false}
              redirect={"https://www.linkedin.com/company/gfg-student-chapter-ksriet/?originalSubdomain=in"}
            ></ParagSection>
          </div>
        </div>
      </div>
      {/* <div className=" z-0 h-[100px] max-w-[100%] bg-gradient-to-b from-qiskit-blue-normal to-qiskit-white"></div> */}
    </section>
  );
};

export default AboutUs;
