import { useLoaderData } from 'react-router-dom';
import './AvailableFoods.css'
import AvailableFoodsCard from './AvailableFoodsCard';


const AvailableFoods = () => {

    const foods = useLoaderData();
    // console.log(foods);

    return (
        <div className="pt-16">
            {/* <-!------- top content --------> */}
            <div className="available__foods-img h-[150px] md:h-[250px]">
                <div className='max-w-screen-xl mx-auto px-5 md:px-10 lg:px-0 relative'>
                    <p className='text-white text-2xl md:text-4xl font-extrabold pt-10 md:pt-20 text-center'>Available Foods <br /> <span className='text-primary'>Collections</span></p>
                </div>
            </div>
            {/* <-!------- main content --------> */}
            <div>
                <div className='max-w-screen-xl mx-auto px-5 md:px-10 lg:px-0 py-12'>
                    <div className='flex justify-around'>
                        {/* <-!------- search field --------> */}
                        <div className="form-control w-1/2">
                            <div className="input-group w-full">
                                <input type="text" placeholder="Search…" className="input input-bordered w-full" />
                                <button className="btn btn-square bg-primary border-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </button>
                            </div>
                        </div>
                        {/* <-!------- short data --------> */}
                        <div className="form-control border rounded-lg">
                            <select className="select">
                                <option  disabled selected>Pick category</option>
                                <option>Date</option>
                                <option>Food Name</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* Available Foods Card */}
                <div className='max-w-screen-xl mx-auto px-5 md:px-10 lg:px-0 py-12'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto'>
                        {
                            foods?.map(food => <AvailableFoodsCard key={food._id} food={food}></AvailableFoodsCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailableFoods;