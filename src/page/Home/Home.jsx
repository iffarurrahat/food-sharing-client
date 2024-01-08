import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import FoodIntroduction from "../../components/HomeComponents/FoodIntroduction";
import Foods from "../../components/HomeComponents/Foods";
import CountUpSection from "../../components/CountupSection/CountupSection";
import WeDoSection from "../../components/WeDoSection/WeDoSection";
import BrandPatternSection from "../../components/BrandPatternSection/BrandPatternSection";

const Home = () => {

    const foods = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Foods foods={foods} ></Foods>
            <FoodIntroduction></FoodIntroduction>
            <CountUpSection />
            <WeDoSection />
            <BrandPatternSection />
        </div>
    );
};

export default Home;