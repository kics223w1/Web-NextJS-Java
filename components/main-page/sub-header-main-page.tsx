import NikeIcon from "../../icons/nike-icon";
import { useState } from "react";

const SubHeaderMainPage = () => {
  return (
    <div className="w-full h-12 pl-12 flex items-center justify-between">
      <div className="w-2/12">
        <NikeIcon className="cursor-pointer" onClick={() => {}} />
      </div>
      <div className="h-full flex items-center gap-3 w-8/12 justify-center">
        <SubHeaderSelection name="New & Featured" />
        <SubHeaderSelection name="Men" />
        <SubHeaderSelection name="Women" />
        <SubHeaderSelection name="Kids" />
        <SubHeaderSelection name="Sale" />
        <SubHeaderSelection name="Customise" />
        <SubHeaderSelection name="Gifts 🎁" />
        <SubHeaderSelection name="SNKRS" />
      </div>
      <div className="w-2/12">
        <SubHeaderItems />
      </div>
    </div>
  );
};

type SubHeaderSelectionProps = {
  name: string;
};

const SubHeaderSelection = ({ name }: SubHeaderSelectionProps) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="flex flex-col items-center justify-between h-full cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="" />
      <span className="font-semibold px-2">{name}</span>
      {hover ? (
        <div className="w-full h-[2px] bg-black" />
      ) : (
        <div className="h-[2px] w-full"></div>
      )}
    </div>
  );
};

const SubHeaderItems = () => {
  return (
    <div className="h-full flex items-center gap-4">
      <div className="h-9 w-40 relative">
        <div className="absolute h-9 flex items-center w-10 px-3 hover:bg-[#E4E5E5] rounded-full cursor-pointer">
          {/* <SearchIcon className="" /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <input
          className="bg-[#F5F5F5] rounded-3xl h-full w-full border-transparent hover:border-transparent pl-10 hover:bg-[#E4E5E5]"
          placeholder="Search"
        />
      </div>

      <div className="rounded-full hover:bg-[#E4E5E5] flex items-center cursor-pointer p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </div>

      <div className="rounded-full hover:bg-[#E4E5E5] flex items-center cursor-pointer p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            stroke-linejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default SubHeaderMainPage;
