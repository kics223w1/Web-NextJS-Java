import BlackButton from "./buttons/black-button";

const MiddleMainPage = () => {
  return (
    <div className="flex flex-col gap-4 items-start md:items-center h-full w-full px-12">
      <img
        src={
          "https://thumbs.dreamstime.com/b/nike-logo-font-isometric-view-dark-background-d-render-macro-woosh-265734797.jpg"
        }
        className="w-full md:h-[850px] h-[500px]"
      />

      <div className="flex flex-col mt-2 items-start md:items-center">
        <span className="font-medium text-base">Nike Ekiden Pack</span>
        <span className="font-black text-2xl md:text-6xl -mt-1 ">
          RUNNING IS BELIEVING.
        </span>
      </div>

      <span className="font-normal text-base md:text-center text-start">
        The Ekiden is a race like no other.
        <br />
        The Nike EKIDEN.PACK once again celebrates the spirit of this event with
        shoes to supports its runners.
      </span>

      <BlackButton text="Shop" onClick={() => {}} />
    </div>
  );
};
export default MiddleMainPage;
