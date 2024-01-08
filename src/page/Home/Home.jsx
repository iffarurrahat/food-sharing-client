import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import FoodIntroduction from "../../components/HomeComponents/FoodIntroduction";
import Foods from "../../components/HomeComponents/Foods";
import CountUpSection from "../../components/CountupSection/CountupSection";

const Home = () => {

    const foods = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Foods foods={foods} ></Foods>
            <FoodIntroduction></FoodIntroduction>
            <CountUpSection/>
        </div>
    );
};

export default Home;