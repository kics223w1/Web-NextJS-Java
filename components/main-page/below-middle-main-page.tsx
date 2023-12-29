import BlackButton from "./buttons/black-button";

const BelowMiddleMainPage = () => {
  return (
    <div className="flex flex-col md:flex-row row-auto gap-5 h-full w-full px-12 mt-16">
      <div className="flex flex-col relative md:h-[700px] h-[350px] w-full md:w-1/2">
        <img
          className="md:h-[700px] h-[350px] w-full"
          src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_702,c_limit/1d90ad38-12ec-4fda-a571-610e9e68ed89/nike-just-do-it.png"
        />
        <div className="flex flex-col gap-1 absolute bottom-12 left-16">
          <span className="text-sm font-medium">
            Dropping This Week on the Nike App
          </span>
          <span className="text-sm font-medium">JA 1 "Christmas" EP</span>
          <BlackButton text="Get It First" css="mt-5" onClick={() => {}} />
        </div>
      </div>
      <div className="flex flex-col relative md:h-[700px] h-[350px] w-full md:w-1/2">
        <img
          className="md:h-[700px] h-[350px] w-full"
          src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_702,c_limit/1d90ad38-12ec-4fda-a571-610e9e68ed89/nike-just-do-it.png"
        />
        <div className="flex flex-col gap-1 absolute bottom-12 left-16">
          <span className="text-sm font-medium">Loop Back on 2023</span>
          <BlackButton text="Explore Your Year" css="mt-5" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default BelowMiddleMainPage;
