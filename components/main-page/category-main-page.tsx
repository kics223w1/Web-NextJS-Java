import { useEffect, useState } from "react";

const imagesSRC = [
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/d76b79fd-e11d-458d-8177-fa1746921e21/revolution-7-road-running-shoes-Dfvsch.png",
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1b629b25-26ec-4d73-a330-da71843d3018/waffle-debut-shoes-hbBJtw.png",
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/c548a178-cd58-4b62-9b8b-020260e80515/air-max-90-futura-shoes-nfmGzj.png",
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e3d72728-4900-4e71-a4ea-1f323bb570d8/custom-nike-air-force-1-high-by-you-shoes.png",
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/06dc64b6-3112-4851-addd-43a61266ecd0/omni-multi-court-younger-shoes-dk59FX.png",
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/0f97608e-ff07-4aff-b338-f86c28ecff8c/air-max-pulse-shoes-zD62r3.png",
  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/726672dc-f22b-4ed9-9df6-58d9a5fed4a0/air-max-97-shoes-GBctKW.png",
];

const imagesName = [
  "Nike Revolution 7",
  "Nike Waffle Debut",
  "Nike Air Max 90",
  "Nike Air Force 1",
  "Nike Omni Multi-Court",
  "Nike Air Max Pulse",
  "Nike Air Max 97",
];

const CategoryMainPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    calculateMiddleItem();
  }, [currentSlide]);

  const nextSlide = () => {
    const slider = document.getElementById("SliderCategoryMainPage");
    if (slider) {
      slider.scrollLeft += 200;
    }

    setCurrentSlide((prevSlide) => (prevSlide + 1) % imagesSRC.length);
  };

  const prevSlide = () => {
    const slider = document.getElementById("SliderCategoryMainPage");
    if (slider) {
      slider.scrollLeft -= 200;
    }

    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + imagesSRC.length) % imagesSRC.length
    );
  };

  const calculateMiddleItem = () => {
    const slider = document.getElementById("SliderCategoryMainPage");
    if (slider) {
      const containerWidth = slider.clientWidth;
      const itemWidth = containerWidth / imagesSRC.length;
      const middleItemIndex = Math.round(slider.scrollLeft / itemWidth);

      console.log(middleItemIndex);
    }
  };

  return (
    <div className="h-full w-full px-12 mt-12">
      <span className="text-2xl font-normal">Always Iconic</span>
      <div
        className="flex items-center gap-2 mt-6 md:overflow-x-hidden overflow-y-hidden overflow-x-visible"
        id="SliderCategoryMainPage"
      >
        {imagesSRC.map((src, index) => {
          return (
            <Item
              key={index}
              src={src}
              name={imagesName[index]}
              buttonName={`${index + 1}/${imagesSRC.length}`}
            />
          );
        })}
        <button
          className="rounded-full bg-white absolute p-3 left-[6vw]"
          onClick={prevSlide}
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
          className="rounded-full bg-white absolute p-3 right-[6vw]"
          onClick={nextSlide}
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
  );
};

export default CategoryMainPage;

type ItemProps = {
  src: string;
  name: string;
  buttonName: string;
};

const Item = ({ src, name, buttonName }: ItemProps) => {
  return (
    <div className="flex-none flex-col relative cursor-pointer duration-1000">
      <img className="h-[300px] w-[300px]" src={src} />
      <button className="absolute top-10 right-10 rounded-2xl bg-[#7B7D81] font-normal text-center text-sm text-white w-fit h-8 px-4">
        {buttonName}
      </button>
      <span className="font-normal text-base text-gray-400 mt-4">{name}</span>
    </div>
  );
};
