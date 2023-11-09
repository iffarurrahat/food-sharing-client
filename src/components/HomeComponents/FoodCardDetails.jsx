import { useLoaderData } from "react-router-dom";

const FoodCardDetails = () => {

    const food = useLoaderData();
    console.log(food);

    return (
        <div>
            <p>Details Page</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur praesentium commodi corrupti, enim asperiores placeat odit amet vero incidunt odio esse cumque ad ipsum minima culpa ea iusto aut? Maxime?</p>
        </div>
    );
};

export default FoodCardDetails;