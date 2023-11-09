import './Banner.css'

const Banner = () => {
    return (
        <div className="h-[400px] md:h-[700px] lg:h-screen bg-slate-500 banner_img">
            <div className='flex justify-center items-center h-full'>
                <h2 className='text-white text-center text-3xl md:text-4xl lg:text-6xl font-extrabold px-5 md:px-10 lg:px-0'>Welcome to <br /> Community Food Sharing</h2>
            </div>
        </div>
    );
};

export default Banner;