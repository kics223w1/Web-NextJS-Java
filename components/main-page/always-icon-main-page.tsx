import { useEffect, useState } from "react";

const imagesSRC = [
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/d76b79fd-e11d-458d-8177-fa1746921e21/revolution-7-road-running-shoes-Dfvsch.png",
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1b629b25-26ec-4d73-a330-da71843d3018/waffle-debut-shoes-hbBJtw.png",
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/c548a178-cd58-4b62-9b8b-020260e80515/air-max-90-futura-shoes-nfmGzj.png",
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e3d72728-4900-4e71-a4ea-1f323bb570d8/custom-nike-air-force-1-high-by-you-shoes.png",
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/06dc64b6-3112-4851-addd-43a61266ecd0/omni-multi-court-younger-shoes-dk59FX.png",
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/0f97608e-ff07-4aff-b338-f86c28ecff8c/air-max-pulse-shoes-zD62r3.png",
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/726672dc-f22b-4ed9-9df6-58d9a5fed4a0/air-max-97-shoes-GBctKW.png",
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/0410970b-5e8f-49ae-b09c-aed707d47e5a/air-max-plus-shoes-mVwq4h.png",
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/33eb9f15-0a30-4244-bf41-77861d94a45f/air-force-1-07-pro-tech-shoes-KHLmTh.png",
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1b629b25-26ec-4d73-a330-da71843d3018/waffle-debut-shoes-hbBJtw.png",
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b1bcbca4-e853-4df7-b329-5be3c61ee057/dunk-low-retro-mens-shoes-87q0hf.png",
];

const imagesName = [
  "Nike Revolution 7",
  "Nike Waffle Debut",
  "Nike Air Max 90",
  "Nike Air Force 1",
  "Nike Omni Multi-Court",
  "Nike Air Max Pulse",
  "Nike Air Max 97",
  "Nike Air Max Plus",
  "Nike Air Force 1 07",
  "Nike Waffle Debut",
  "Nike Dunk Low Retro",
];

const AlwaysIconMainPage = () => {
  const [isFirstItem, setIsFirstItem] = useState(true);
  const [isLastItem, setIsLastItem] = useState(false);

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
              stroke-width="1.5"
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
              stroke-width="1.5"
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
        {imagesSRC.map((src, index) => {
          return <Item key={index} src={src} name={imagesName[index]} />;
        })}
      </div>
    </div>
  );
};

export default AlwaysIconMainPage;

type ItemProps = {
  src: string;
  name: string;
};

const Item = ({ src, name }: ItemProps) => {
  return (
    <div className="flex flex-col relative cursor-pointer">
      <img className="h-[300px] w-[300px]" src={src} />
      <span className="font-normal text-base text-gray-400 mt-4">{name}</span>
    </div>
  );
};
