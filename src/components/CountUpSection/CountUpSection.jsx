import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import Container from '../ui/Container';
import { BiDonateHeart } from "react-icons/bi";
import { IoIosPeople, IoMdHappy } from "react-icons/io";
import { GiFloatingPlatforms } from "react-icons/gi";


const CountUpSection = () => {

    const [counterOn, setCounterOn] = useState(false);

    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className='bg-primary py-10 mb-10'>
                <Container>
                    <div className='grid grid-cols-2 lg:grid-cols-4'>
                        <div className='text-center text-white'>
                            <BiDonateHeart className='text-5xl md:text-8xl mx-auto mb-2' />
                            <p className='text-3xl font-bold'>{counterOn && <CountUp start={0} end={153} duration={2} delay={0} />} +</p>
                            <p className='font-medium mt-2'>Food Donated</p>
                        </div>
                        <div className='text-center text-white'>
                            <IoIosPeople className='text-5xl md:text-8xl mx-auto mb-2' />
                            <p className='text-3xl font-bold'>{counterOn && <CountUp start={0} end={17} duration={2} delay={0} />} +</p>
                            <p className='font-medium mt-2'>Volunteers Registered</p>
                        </div>
                        <div className='text-center mt-5 md:mt-0 text-white'>
                            <IoMdHappy className='text-5xl md:text-8xl mx-auto mb-2' />
                            <p className='text-3xl font-bold'>{counterOn && <CountUp start={0} end={35} duration={2} delay={0} />} +</p>
                            <p className='font-medium mt-2'>Emission Prevented</p>
                        </div>
                        <div className='text-center mt-5 md:mt-0 text-white'>
                            <GiFloatingPlatforms className='text-5xl md:text-8xl mx-auto mb-2' />
                            <p className='text-3xl font-bold'>{counterOn && <CountUp start={0} end={26} duration={2} delay={0} />} +</p>
                            <p className='font-medium mt-2'>Donors on platform</p>
                        </div>
                    </div>
                </Container>
            </div>
        </ScrollTrigger>
    );
};

export default CountUpSection;