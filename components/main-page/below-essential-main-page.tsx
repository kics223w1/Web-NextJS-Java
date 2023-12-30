import { useEffect, useState } from "react";

const BelowEssentialMainPage = () => {
  const [isHover, setIsHover] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Adjust the threshold as needed
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 800);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="flex flex-col md:flex-row md:items-center items-start md:pt-16 pt-14"
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      {isSmallScreen ? (
        <>
          <ColumnListInSmallScreen />
          <ColumnListInSmallScreen />
          <ColumnListInSmallScreen />
          <ColumnListInSmallScreen />
        </>
      ) : (
        <>
          <ColumnsListInLargeScreen
            isHover={isHover}
            css="w-[14vw] ml-[26vw]"
          />
          <ColumnsListInLargeScreen isHover={isHover} css="w-[16vw]" />
          <ColumnsListInLargeScreen isHover={isHover} css="w-[16vw]" />
          <ColumnsListInLargeScreen isHover={isHover} css="w-[14vw]" />
        </>
      )}
    </div>
  );
};

const ColumnListInSmallScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-col gap-4 ml-10 mt-3">
      <span
        className="text-base font-light text-[#111111] mb-2 select-none cursor-pointer"
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        Icons
      </span>
      {isVisible && (
        <div className="flex flex-col gap-4 pl-6 animate-fade-in">
          <span className="text-base font-light text-[#707072] hover:text-black duration-200 cursor-pointer">
            Air Force 1
          </span>
          <span className="text-base font-light text-[#707072] hover:text-black duration-200 cursor-pointer">
            Huarache
          </span>
          <span className="text-base font-light text-[#707072] hover:text-black duration-200 cursor-pointer">
            Air Max 90
          </span>
          <span className="text-base font-light text-[#707072] hover:text-black duration-200 cursor-pointer">
            Air Max 95
          </span>
          <span className="text-base font-light text-[#707072] hover:text-black duration-200 cursor-pointer">
            Air Max 97
          </span>
          <span className="text-base font-light text-[#707072] hover:text-black duration-200 cursor-pointer">
            Air Max 270
          </span>
          <span className="text-base font-light text-[#707072] hover:text-black duration-200 cursor-pointer">
            Air Max 720
          </span>
          <span className="text-base font-light text-[#707072] hover:text-black duration-200 cursor-pointer">
            All Air Max
          </span>
          <span className="text-base font-light text-[#707072] hover:text-black duration-200 cursor-pointer">
            Vapormax
          </span>
        </div>
      )}
    </div>
  );
};

type ColumnProps = {
  isHover: boolean;
  css: string;
};

const ColumnsListInLargeScreen = ({ isHover, css }: ColumnProps) => {
  return (
    <div className={`flex flex-col gap-4 ${css}`}>
      <span className="text-lg font-light text-[#111111] mb-2 select-none">
        Icons
      </span>
      <div className="flex flex-col gap-4">
        <span className="text-base font-light text-[#707072] hover:text-black duration-200 cursor-pointer">
          Air Force 1
        </span>
        <span className="text-base font-light text-[#707072] hover:text-black duration-200 cursor-pointer">
          Huarache
        </span>
        <span className="text-base font-light text-[#707072] hover:text-black duration-200 cursor-pointer">
          Air Max 90
        </span>
        <span className="text-base font-light text-[#707072] hover:text-black duration-200 cursor-pointer">
          Air Max 95
        </span>
      </div>
      {isHover && (
        <div className="transition-all duration-500 ease-in-out opacity-100 flex flex-col gap-4">
          <span className="text-base font-light text-[#707072] hover:text-black duration-200 cursor-pointer">
            Air Max 97
          </span>
          <span className="text-base font-light text-[#707072] hover:text-black duration-200 cursor-pointer">
            Air Max 270
          </span>
          <span className="text-base font-light text-[#707072] hover:text-black duration-200 cursor-pointer">
            Air Max 720
          </span>
          <span className="text-base font-light text-[#707072] hover:text-black duration-200 cursor-pointer">
            All Air Max
          </span>
          <span className="text-base font-light text-[#707072] hover:text-black duration-200 cursor-pointer">
            Vapormax
          </span>
        </div>
      )}
    </div>
  );
};

export default BelowEssentialMainPage;
