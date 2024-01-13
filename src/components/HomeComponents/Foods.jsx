import PropTypes from 'prop-types';
import Container from "../ui/Container";
import FoodsCard from "./FoodsCard";
import { Link } from 'react-router-dom';

const Foods = ({ foods }) => {
    

    return (
        <div className="mt-16 md:mt-24">
            {/* <-!------- top content ------> */}
            <div className="text-center mb-10 md:mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-primary">Foods</span></h2>
                <p>Empowering Communities to Share Surplus Food and Reduce <br /> Waste through a Dedicated Platform in Bangladesh.</p>
            </div>
            {/* <-!------- card content ------> */}
            <Container>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            foods?.map(food => <FoodsCard key={food._id} food={food}></FoodsCard>)
                        }
                    </div>
                    <div className='text-center  mt-10 md:mt-16'>
                        <Link to="/availableFoods" className='bg-primary text-white py-3 px-4 rounded'> Show All</Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};



Foods.propTypes = {
    foods: PropTypes.array.isRequired,
};


export default Foods;