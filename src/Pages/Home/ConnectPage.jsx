import hero from "../../assets/Placeholder Image.png";
import iconbig from "../../assets/Relume.png";
import iconsm from "../../assets/chevron-right.png";

const ConnectPage = ({ connectData }) => {
  return (
    <div className=" font-roboto mx-auto w-full">
      <div className=" w-full flex flex-col lg:flex-row items-center px-14 justify-between py-20 gap-16">
        <div className="max-w-2xl space-y-4">
          <h1 className="font-bold text-base py-[4px] w-[151px] pt-[50px] text-[#0E286C] ">
            {connectData?.heading}
          </h1>
          <h1 className="text-[#0E286C] font-bold text-5xl ">
            {connectData?.title}
          </h1>
          <p className="pt-3 text-[18px] max-w-[616px] font-medium pb-3">
            {connectData.description}
          </p>
          <div className="flex justify-between flex-col lg:flex-row gap-10 lg:gap-5 pb-6 lg:pb-3">
            <div className="max-w-[296px] space-y-3">
              <img src={iconbig} alt="" />
              <h1 className="text-[#0E286C] font-bold text-lg ">Create</h1>
              <p className=" text-[#0E286C] text-base max-w-[616px] font-medium">
                Students can create their own charities and seek advice from
                experienced adults.
              </p>
            </div>
            <div className="max-w-[296px] space-y-3">
              <img src={iconbig} alt="" />
              <h1 className="text-[#0E286C] font-bold text-lg ">Connect</h1>
              <p className=" text-[#0E286C] text-base max-w-[616px] font-medium">
                Experienced adults can connect with students and provide
                valuable advice for their charities.{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-[6px]  items-center justify-around lg:justify-start">
            <button className="font-medium text-[20px] text-[#0E286C] py-[10px] px-[25px] border-2 border-[#0E286C] rounded-md">
              {connectData.primaryButton}
            </button>
            <button className="font-medium hover:border-[#0E286C] hover:border-2 rounded-md flex items-center gap-2 text-[20px] text-[#0E286C]  py-[10px] px-[25px] ">
              {connectData.secondaryButton} <img src={iconsm} alt="" />
            </button>
          </div>
        </div>

        <div className="">
          <img
            src={hero}
            className=" md:h-[500px]  sm:h-[400px] h-[300px]  max-w-[600px] bg-gray-400  object-cover"
            alt="hero"
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ConnectPage;
