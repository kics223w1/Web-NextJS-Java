import BlackButton from "./buttons/black-button";

const images = [
  "https://image.adsoftheworld.com/5wapvrmgndawy4unz6mapfjoqrv8",
  "https://i.pinimg.com/1200x/ca/86/ba/ca86ba3fa2aa7d91570963545c38cc37.jpg",
  "https://www.reed.edu/anthro/adprojects/2011/gould_ramey_butcher/ad3big.jpg",
];

const TheEssentialsMainPage = () => {
  return (
    <div className="h-full w-full px-12 mt-28">
      <div className="flex items-center justify-between">
        <span className="text-2xl font-normal">The Essentials</span>
      </div>
      <div className="flex md:flex-row flex-col gap-4 mt-6 w-full overflow-hidden">
        <div className="flex flex-col md:w-1/3 w-full cursor-pointer relative">
          <img className="h-[70vh] w-full rounded shadow-md" src={images[0]} />

          <div className="absolute left-14 bottom-8">
            <BlackButton text="Men's" onClick={() => {}} />
          </div>
        </div>

        <div className="flex flex-col md:w-1/3 w-full cursor-pointer relative">
          <img className="h-[70vh] w-full rounded shadow-md" src={images[1]} />

          <div className="absolute left-14 bottom-8">
            <BlackButton text="Women's" onClick={() => {}} />
          </div>
        </div>

        <div className="flex flex-col md:w-1/3 w-full cursor-pointer relative">
          <img className="h-[70vh] w-full rounded shadow-md" src={images[2]} />

          <div className="absolute left-14 bottom-8">
            <BlackButton text="Kid's" onClick={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheEssentialsMainPage;
