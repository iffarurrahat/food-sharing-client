import Container from "../ui/Container";

const FoodIntroduction = () => {
    return (
        <Container>
            <div className="flex flex-col md:flex-row my-20 gap-8">
                <div className="flex-1">
                    <img className="w-[550px] h-[500px]" src="https://i.ibb.co/FwjzMDF/purpose-1.jpg" alt="" />
                </div>
                <div className="flex-1 flex items-center mb-2">
                    <div>
                        <p className="text-lg font-medium">Purpose</p>
                        <h2 className="text-4xl font-bold mb-8">The platform aims <br /> to reduce waste, end hunger, <br /> and build community</h2>
                        <p className="">A Community Food Sharing and Surplus Reduction Platform is a digital initiative aimed at reducing food waste and fostering community unity. It connects individuals, businesses, and organizations with surplus food to those in need, promoting sustainability, and alleviating hunger while building strong local bonds.</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default FoodIntroduction;