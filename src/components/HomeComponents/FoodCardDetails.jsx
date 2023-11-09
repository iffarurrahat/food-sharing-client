import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const FoodCardDetails = () => {

    const [food, setFood] = useState([]);

    const { date, location, name, notes, photo, quantity, status } = food || {}

    const foods = useLoaderData();
    const { id } = useParams();

    useEffect(() => {
        const findFood = foods.find(data => data._id === id)
        setFood(findFood)
    }, [foods, id])

    console.log(food);

    return (
        <div className="max-w-screen-xl mx-auto px-2 md:px-4 lg:px-1 my-5 md:my-10 lg:my-20">
            <div className="">
                <img src={photo} alt="" className="mb-4" />
                <div className="bg-slate-100 p-4">
                    <h4 className="text-2xl font-bold mb-2">Food Name: {name}</h4>
                    <p className="font-bold py-1">Location: {location}</p>
                    <p className="font-bold py-1">Quantity: {quantity}</p>
                    <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">{notes}</p>
                </div>
            </div>
        </div>
    );
};

export default FoodCardDetails;