type BlackButtonProps = {
  text: string;
  css?: string;
  onClick: () => void;
};

const WhiteButton = ({ text, css, onClick }: BlackButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-2xl bg-white text-center text-black hover:bg-[#9E9EA0] w-fit h-9 px-6 py-1 ${css}`}
    >
      {text}
    </button>
  );
};

export default WhiteButton;
