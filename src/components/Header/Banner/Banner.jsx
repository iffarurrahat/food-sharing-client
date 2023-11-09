import './Banner.css'

const Banner = () => {
    return (
        <div className="h-screen bg-slate-500 banner_img">
            <div className='flex justify-center items-center h-full'>
                <h2 className='text-white text-6xl font-extrabold'>Welcome to <br /> Community Food Sharing</h2>
            </div>
        </div>
    );
};

export default Banner;