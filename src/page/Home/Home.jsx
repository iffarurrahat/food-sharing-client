import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import FoodIntroduction from "../../components/HomeComponents/FoodIntroduction";
import Foods from "../../components/HomeComponents/Foods";
import CountUpSection from "../../components/CountUpSection/CountUpSection";
import WeDoSection from "../../components/WeDoSection/WeDoSection";
import BrandPatternSection from "../../components/BrandPatternSection/BrandPatternSection";
import WeConnectSection from "../../components/WeConnectSection/WeConnectSection";

const Home = () => {

    const foods = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Foods foods={foods} ></Foods>
            <FoodIntroduction></FoodIntroduction>
            <CountUpSection />
            <WeDoSection />
            <WeConnectSection />
            <BrandPatternSection />
        </div>
    );
};

export default Home;