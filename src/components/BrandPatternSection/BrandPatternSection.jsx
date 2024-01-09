import Marquee from "react-fast-marquee";

const BrandPatternSection = () => {
    return (
        <div className="mb-16">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Well <span className="text-primary">Wisher</span></h2>
                <p className="w-full md:w-2/5 mx-auto">The one who talks about your weaknesses in front of you, and proudly talks about your strengths in front of others</p>
            </div>
            <Marquee>
                <div className="flex items-center gap-10">
                    <img src="https://i.ibb.co/4fvs7xY/sahara.jpg" className="h-20 ml-10" alt="" />
                    <img src="https://i.ibb.co/jzPJd3J/navana.jpg" className="h-28" alt="" />
                    <img src="https://i.ibb.co/6F0g2hf/lotte.png" className="h-20" alt="" />
                    <img src="https://i.ibb.co/SBYBdZP/lotto.png" className="h-28" alt="" />
                    <img src="https://i.ibb.co/sqSjbPB/rfl.png" className="h-28" alt="" />
                    <img src="https://i.ibb.co/tpMNPJ5/bashundhara.jpg" className="h-28" alt="" />
                    <img src="https://i.ibb.co/7kbdvNK/bosundora.png" className="h-28" alt="" />
                    <img src="https://i.ibb.co/s9ktB8P/news-paper.png" className="h-28" alt="" />
                </div>
            </Marquee>
        </div>
    );
};

export default BrandPatternSection;