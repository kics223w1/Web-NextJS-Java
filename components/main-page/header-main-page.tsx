import { Text } from "@chakra-ui/react";
import JordanIcon from "../../icons/jordan-icon";

const HeaderMainPage = () => {
  return (
    <div className="h-9 w-full bg-[#F5F5F5] px-12 flex items-center justify-between headerMainPage">
      <JordanIcon className="cursor-pointer" onClick={() => {}} />
      <div className="flex items-center gap-3 h-full">
        <Text className="font-medium text-xs hover:text-[#747474] cursor-pointer">
          Find a Store
        </Text>
        <div className="w-[1px] bg-black h-3" />

        <Text className="font-medium text-xs hover:text-[#747474] cursor-pointer">
          Help
        </Text>
        <div className="w-[1px] bg-black h-3" />

        <Text className="font-medium text-xs hover:text-[#747474] cursor-pointer">
          Join Us
        </Text>
        <div className="w-[1px] bg-black h-3" />

        <Text className="font-medium text-xs hover:text-[#747474] cursor-pointer">
          Sign In
        </Text>
      </div>
    </div>
  );
};

export default HeaderMainPage;
