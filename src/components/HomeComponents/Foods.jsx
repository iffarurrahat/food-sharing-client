import Container from "../ui/Container";
import FoodsCard from "./FoodsCard";

const Foods = ({ foods }) => {

    console.log(foods);

    return (
        <div className="mt-16 md:mt-24">
            {/* <-!------- top content ------> */}
            <div className="text-center mb-10 md:mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-primary">Foods</span></h2>
                <p>Empowering Communities to Share Surplus Food and Reduce <br /> Waste through a Dedicated Platform in Bangladesh.</p>
            </div>
            {/* <-!------- card content ------> */}
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