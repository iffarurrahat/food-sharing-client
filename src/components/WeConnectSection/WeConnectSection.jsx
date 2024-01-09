import Container from "../ui/Container";

const WeConnectSection = () => {
    return (
        <div className="my-16 md:my-24">
            {/* <-!----- top content-----> */}
            <div className="text-center mb-8 lg:mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">We are <span className="text-primary">Connected</span></h2>
                <p className="w-full md:w-1/2 lg:w-5/12 mx-auto">We connect businesses that have surplus food with Charities and Community Groups that need it.</p>
            </div>
            <Container>
                <div className="">
                    {/* <-!----- video -----> */}
                    <iframe className="w-full h-[300px] md:h-[550px] lg:h-screen" src="https://www.youtube.com/embed/8oCswLYXOtk?si=a6srHZQPXhSq4jqZ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </Container>
        </div>
    );
};

export default WeConnectSection;