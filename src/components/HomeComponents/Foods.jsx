import Container from "../ui/Container";
import FoodsCard from "./FoodsCard";

const Foods = ({ foods }) => {

    console.log(foods);

    return (
        <div className="py-10">
            <div className="text-center mb-8">
                <h2 className=" text-3xl font-bold mb-5">Featured <span className="text-[#F89223]">Foods</span></h2>
                <p>Empowering Communities to Share Surplus Food and Reduce <br /> Waste through a Dedicated Platform in Bangladesh.</p>
            </div>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
                    {
                        foods?.map(food => <FoodsCard key={food._id} food={food}></FoodsCard>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Foods;