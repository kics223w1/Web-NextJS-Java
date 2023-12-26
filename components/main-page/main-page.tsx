import Head from "next/head";
import HeaderMainPage from "./header-main-page";
import SubHeaderMainPage from "./sub-header-main-page";
import SubSubHeaderMainPage from "./sub-sub-header-main-page";
import MiddleMainPage from "./middle-main-page";

const MainPage = () => {
  return (
    <>
      <Head>
        <title>Nike. Just Do It. Nike VN</title>
      </Head>

      <HeaderMainPage />
      <SubHeaderMainPage />
      <SubSubHeaderMainPage />
      <MiddleMainPage />
    </>
  );
};

export default MainPage;
