import './Banner.css'
import { Typewriter, } from 'react-simple-typewriter'


const Banner = () => {
    // const { text } = useTypewriter({
    //     words: ['Food Sharing', 'Healthy Food', 'Surplus Reduction Platform'],
    //     loop: {}
    // })

    return (
        <div className="h-[400px] md:h-[700px] lg:h-screen bg-slate-500 banner_img">
            <div className='flex justify-center items-center h-full'>
                <h2 className='text-white text-center text-3xl md:text-4xl lg:text-7xl font-bold w-full md:w-2/3'>Welcome to Community
                    <span className='font-bold'>
                        <Typewriter
                            words={[' Food Sharing🍊', ' Healthy Food🍓', ' Surplus Reduction Platform🍏']}
                            loop={false}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h2>
            </div>
        </div>
    );
};

export default Banner;










//