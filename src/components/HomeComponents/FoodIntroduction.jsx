import Container from "../ui/Container";

const FoodIntroduction = () => {
    return (
        <Container>
            <div className="flex flex-col md:flex-row my-20 gap-8">
                {/* <-!-----Left site Image-----> */}
                <div className="flex-1">
                    <img className="w-[550px] h-[500px] rounded object-center" src="https://i.ibb.co/FwjzMDF/purpose-1.jpg" alt="" />
                </div>
                {/* <-!-----Right site content-----> */}
                <div className="flex-1 flex items-center mb-2">
                    <div>
                        <p className="text-lg font-bold text-primary mb-3 ">Purpose</p>
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 w-full md:w-9/10">The platform aims to reduce waste, end hunger, and build community</h2>
                        <p className="leading-7">A Community Food Sharing and Surplus Reduction Platform is a digital initiative aimed at reducing food waste and fostering community unity. It connects individuals, businesses, and organizations with surplus food to those in need, promoting sustainability, and alleviating hunger while building strong local bonds.</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default FoodIntroduction;