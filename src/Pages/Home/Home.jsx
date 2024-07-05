import heroImage from "../../assets/Home/HeroImage.png";
import bgCharity from "../../assets/Home/bg_charity.jpg";
import charityProfile from "../../assets/Home/charity_profile.png";
import bgImage from "../../assets/Home/communityBgImage.png";
import mentorSignup from "../../assets/Home/mentor_signup.png";
import person1 from "../../assets/Home/person1.svg";
import person2 from "../../assets/Home/person2.svg";
import person3 from "../../assets/Home/person3.svg";
import studentCharity from "../../assets/Home/student_charity.png";
import ConnectPage from "./ConnectPage";
import CreateCharityPage from "./CreateCharityPage";
import HeroSection from "./HeroSection";
import JoinCommunity from "./JoinCommunity";
import MakeDifferencePage from "./MakeDifferencePage";

const Home = () => {
  const data = {
    connectData: {
      heading: "Connect",
      title: "Empowering Young Entrepreneurs",
      description:
        "Sign up for our course to learn how to create your own charity within 4 weeks!",
      primaryButton: "Learn More",
      secondaryButton: "Sign Up",
      connectProfiles1: {
        name: "Max",
        about: "Blind person charity",
        img: person1,
      },
      connectProfiles2: {
        name: "John",
        about: "Poor people charity",
        img: person2,
      },
      connectProfiles3: {
        name: "Hena",
        about: "Nature lover charity",
        img: person3,
      },
    },
    makeDifferenceData: {
      heading: "Empowering Students and Mentors to Make a Difference",
      subHeading:
        "Our platform provides a space for students to seek advice and guidance for their charities, while experienced adults can sign up to mentor and provide valuable insights.",
      makeDifferenceType: [
        {
          img: studentCharity,
          title: "Student Charity Advice",
          desc: "Get expert advice from mentors on how to improve your charity initiatives.",
        },
        {
          img: mentorSignup,
          title: "Mentor Sign-up",
          desc: "Experienced adults can join our community to share their knowledge and support students.",
        },
        {
          img: charityProfile,
          title: "Charity Profiles",
          desc: "Create a profile for your charity and showcase your impact to attract supporters.",
        },
      ],
    },
    createCharityData: {
      title: "Create Charity",
      heading:
        "Students can create their own charities and seek advice from experienced adults",
      firstDesc: `"Welcome to Happy Charity! Create your charity today, provide details about your organization, and make a positive impact by helping people."`,
      secondDesc:
        "Over 14,000+ students have established a charity through Happy Charity, guided and supported by experienced adults in the charity sector.",
      bgImg: bgCharity,
      form: {
        name: "Name",
        mobile: "Mobile Number",
        charity: "Charity Name",
        details: "Details",
        email: "Email",
        btn1: "Help",
        btn2: "Next",
      },
    },
    heroData: {
      heroImage: heroImage,
    },
    joinCommunityData: {
      bgImage: bgImage,
    },
  };

  return (
    <div className="font-roboto max-w-[1440px] mx-auto">
      <section id="home" className="pt-10">
        <HeroSection heroData={data.heroData} />
      </section>
      <section id="about-us" className="">
        <ConnectPage connectData={data.connectData} />
      </section>
      <section id="create-charity" className="pt-16">
        <CreateCharityPage createCharityData={data.createCharityData} />
      </section>
      <MakeDifferencePage makeDifferenceData={data.makeDifferenceData} />
      <JoinCommunity joinCommunityData={data.joinCommunityData} />
    </div>
  );
};

export default Home;
