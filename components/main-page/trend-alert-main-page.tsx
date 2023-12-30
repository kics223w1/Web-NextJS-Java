import { useEffect, useState } from "react";

const products = [
  {
    src: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/2eff461f-f3ac-4285-9c6a-2f22173aac42/custom-nike-air-force-1-low-by-you.png",
    title: "Nike Air Force 1",
    description: "Men's Shoes",
    price: "2,929,000đ",
  },
  {
    src: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/2eff461f-f3ac-4285-9c6a-2f22173aac42/custom-nike-air-force-1-low-by-you.png",
    title: "Nike Air Force 1",
    description: "Men's Shoes",
    price: "2,929,000đ",
  },
  {
    src: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/2eff461f-f3ac-4285-9c6a-2f22173aac42/custom-nike-air-force-1-low-by-you.png",
    title: "Nike Air Force 1",
    description: "Men's Shoes",
    price: "2,929,000đ",
  },
  {
    isMemberProduct: true,
    src: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/2eff461f-f3ac-4285-9c6a-2f22173aac42/custom-nike-air-force-1-low-by-you.png",
    title: "Nike Air Force 1",
    description: "Men's Shoes",
    price: "2,929,000đ",
  },
  {
    src: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/2eff461f-f3ac-4285-9c6a-2f22173aac42/custom-nike-air-force-1-low-by-you.png",
    title: "Nike Air Force 1",
    description: "Men's Shoes",
    price: "2,929,000đ",
  },
  {
    src: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/2eff461f-f3ac-4285-9c6a-2f22173aac42/custom-nike-air-force-1-low-by-you.png",
    title: "Nike Air Force 1",
    description: "Men's Shoes",
    price: "2,929,000đ",
  },
  {
    src: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/2eff461f-f3ac-4285-9c6a-2f22173aac42/custom-nike-air-force-1-low-by-you.png",
    title: "Nike Air Force 1",
    description: "Men's Shoes",
    price: "2,929,000đ",
  },
  {
    src: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/2eff461f-f3ac-4285-9c6a-2f22173aac42/custom-nike-air-force-1-low-by-you.png",
    title: "Nike Air Force 1",
    description: "Men's Shoes",
    price: "2,929,000đ",
  },
  {
    src: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/2eff461f-f3ac-4285-9c6a-2f22173aac42/custom-nike-air-force-1-low-by-you.png",
    title: "Nike Air Force 1",
    description: "Men's Shoes",
    price: "2,929,000đ",
  },
  {
    src: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/2eff461f-f3ac-4285-9c6a-2f22173aac42/custom-nike-air-force-1-low-by-you.png",
    title: "Nike Air Force 1",
    description: "Men's Shoes",
    price: "2,929,000đ",
  },
  {
    src: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/2eff461f-f3ac-4285-9c6a-2f22173aac42/custom-nike-air-force-1-low-by-you.png",
    title: "Nike Air Force 1",
    description: "Men's Shoes",
    price: "2,929,000đ",
  },
];

const TrendAlertMainPage = () => {
  const [isFirstItem, setIsFirstItem] = useState(true);
  const [isLastItem, setIsLastItem] = useState(false);

  const handleScroll = (isLeft: boolean) => {
    const slider = document.getElementById("SliderTrendAlertMainPage");
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
    <div className="h-full w-full px-12 mt-28">
      <div className="flex items-center justify-between">
        <span className="text-2xl font-normal">Trend Alert</span>
        <div className="items-center gap-2 hidden md:flex">
          <span className="font-medium text-base mr-2 hover:opacity-50 cursor-pointer">
            Shop
          </span>
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
        id="SliderTrendAlertMainPage"
        style={{
          gridAutoColumns: "300px",
        }}
      >
        {products.map((product, index) => {
          return <Item key={index} product={product} />;
        })}
      </div>
    </div>
  );
};

export default TrendAlertMainPage;

type ItemProps = {
  product: {
    src: string;
    title: string;
    description: string;
    price: string;
    isMemberProduct?: boolean;
  };
};

const Item = ({ product }: ItemProps) => {
  return (
    <div className="flex flex-col relative cursor-pointer">
      <img className="h-[300px] w-[300px] mb-1" src={product.src} />
      {product.isMemberProduct && (
        <span className="font-medium text-base text-[#99470A]">
          Member product
        </span>
      )}
      <span className="font-medium text-sm text-black">{product.title}</span>
      <span className="font-normal text-sm text-gray-400">
        {product.description}
      </span>
      <span className="font-normal text-base text-black mt-1">
        {product.price}
      </span>
    </div>
  );
};
