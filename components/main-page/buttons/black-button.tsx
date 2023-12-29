type BlackButtonProps = {
  text: string;
  css?: string;
  onClick: () => void;
};

const BlackButton = ({ text, css, onClick }: BlackButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-2xl bg-black text-center text-white hover:opacity-50 w-fit h-9 px-6 py-1 ${css}`}
    >
      {text}
    </button>
  );
};

export default BlackButton;
