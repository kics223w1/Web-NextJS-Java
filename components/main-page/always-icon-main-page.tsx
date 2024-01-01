import { useState } from "react";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import AlwaysIcon from "../../models/always-icon";

const AlwaysIconMainPage = () => {
  const [isFirstItem, setIsFirstItem] = useState(true);
  const [isLastItem, setIsLastItem] = useState(false);
  const { isPending, error, data }: UseQueryResult<AlwaysIcon[], string> =
    useQuery({
      queryKey: [],
      queryFn: () =>
        fetch("http://localhost:8080/always_icon").then(async (res) => {
          try {
            const data: AlwaysIcon[] = await res.json();
            const newAlwaysIcons = data.flatMap((json: AlwaysIcon) => {
              return [AlwaysIcon.fromJson(json)];
            });

            return newAlwaysIcons;
          } catch (e) {
            console.log(e);
            return [];
          }
        }),
    });

  if (isPending) return <></>;

  if (error || !data) return <></>;

  const handleScroll = (isLeft: boolean) => {
    const slider = document.getElementById("SliderAlwaysIconMainPage");
    if (slider) {
      slider.scrollLeft += isLeft ? -200 : 200;

      const isAtLeftEdge = slider.scrollLeft === 0;
      const isAtRightEdge =
        slider.scrollLeft + slider.clientWidth === slider.scrollWidth;

      setIsLastItem(isAtRightEdge);
      setIsFirstItem(isAtLeftEdge);
    }
  };

  return (
    <div className="h-full w-full px-12 mt-16">
      <div className="flex items-center justify-between">
        <span className="text-2xl font-normal">Always Iconic</span>
        <div className="items-center gap-2 hidden md:flex">
          <button
            className={`rounded-full p-3 duration-300 ${
              isFirstItem
                ? "opacity-50 bg-[#F5F5F5]"
                : "bg-[#E5E5E5] hover:bg-[#CAC9CB]"
            }`}
            onClick={() => handleScroll(true)}
            disabled={isFirstItem}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            className={`rounded-full p-3 duration-300 ${
              isLastItem
                ? "opacity-50 bg-[#F5F5F5]"
                : "bg-[#E5E5E5] hover:bg-[#CAC9CB]"
            }`}
            onClick={() => handleScroll(false)}
            disabled={isLastItem}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className="grid grid-flow-col gap-4 mt-4 md:overflow-x-hidden overflow-y-hidden overflow-x-visible scroll-smooth"
        id="SliderAlwaysIconMainPage"
        style={{
          gridAutoColumns: "300px",
        }}
      >
        {data.map((alwaysIcon, index) => {
          return <Item key={`${index}_alwaysIcon`} alwaysIcon={alwaysIcon} />;
        })}
      </div>
    </div>
  );
};

export default AlwaysIconMainPage;

type ItemProps = {
  alwaysIcon: AlwaysIcon;
};

const Item = ({ alwaysIcon }: ItemProps) => {
  return (
    <div className="flex flex-col relative cursor-pointer">
      <img className="h-[300px] w-[300px]" src={alwaysIcon.image} />
      <span className="font-normal text-base text-gray-400 mt-4">
        {alwaysIcon.shoeName}
      </span>
    </div>
  );
};
