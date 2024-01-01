import Head from "next/head";
import HeaderMainPage from "./header-main-page";
import SubHeaderMainPage from "./sub-header-main-page";
import SubSubHeaderMainPage from "./sub-sub-header-main-page";
import MiddleMainPage from "./middle-main-page";
import BelowMiddleMainPage from "./below-middle-main-page";
import AlwaysIconMainPage from "./always-icon-main-page";
import TrendAlertMainPage from "./trend-alert-main-page";
import TheEssentialsMainPage from "./the-essentials-main-page";
import BelowEssentialMainPage from "./below-essential-main-page";
import Footer from "../footer";

const MainPage = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <Head>
        <title>Nike. Just Do It. Nike VN</title>
      </Head>

      <HeaderMainPage />
      <SubHeaderMainPage />
      <SubSubHeaderMainPage />
      <MiddleMainPage />
      <BelowMiddleMainPage />
      <AlwaysIconMainPage />
      <TrendAlertMainPage />
      <TheEssentialsMainPage />
      <BelowEssentialMainPage />

      <Footer />
    </div>
  );
};

export default MainPage;
