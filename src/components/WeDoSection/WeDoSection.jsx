import Container from "../ui/Container";

const WeDoSection = () => {
    return (
        <div className="my-16 md:my-24">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked <span className="text-primary">Questions</span></h2>
                    <p className="w-full md:w-1/2 mx-auto">Feeding the Soul: A Comprehensive Food Sharing FAQ Guide to Nourish Communities and Foster Compassion Through Shared Meals</p>
                </div>
                <div className="md:flex gap-8">
                    {/* <-!----------> */}
                    <div className="mb-5 md:mb-0">
                        <div tabIndex={0} className="collapse collapse-plus border border-base-300">
                            <div className="collapse-title text-xl font-medium">
                                Why should I register as a Donor?
                            </div>
                            <div className="collapse-content">
                                <p>FoodSHare platform gives the opportunity for automatization and improvement of existing processes in terms of food donation. By using this simple and effective, yet free tool, you can save time and money as well as other limited resources. By donating your food waste you can support the local community, raise the social responsibility of your company and protect the environment by decreasing the disposal of food waste.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-plus border border-base-300">
                            <div className="collapse-title text-xl font-medium">
                                Why should I register as a Recipient?
                            </div>
                            <div className="collapse-content">
                                <p>FoodSHare platform enables fast and simple way for acquiring food donations. Growing base of donors gives many opportunities for receiving donations of different kinds as well as equal opportunity for all charity organizations independent of their size of location.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-plus border border-base-300">
                            <div className="collapse-title text-xl font-medium">
                                How does the platform work?
                            </div>
                            <div className="collapse-content">
                                <p>After registering on the platform, donors, recipients, and volunteers can directly communicate with each other. Food donors can offer food donations, recipients can browse through donation listings to search for the specific food they need at the moment. All registered users will receive email notifications about the new food offerings and donation requests. Also, currently active and completed donations will be accessible on the Donations page of the FoodSHare platform.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-plus border border-base-300">
                            <div className="collapse-title text-xl font-medium">
                                How are the donations awarded?
                            </div>
                            <div className="collapse-content">
                                <p>Donors hold the rights on which recipient(s) will receive the donation. If the donor does not exercise this right the donation will be awarded on a “first-come, first-served” basis.</p>
                            </div>
                        </div>
                    </div>
                    {/* <-!----------> */}
                    <div>
                        <div tabIndex={0} className="collapse collapse-plus border border-base-300">
                            <div className="collapse-title text-xl font-medium">
                                What is the FoodSHare platform?
                            </div>
                            <div className="collapse-content">
                                <p>
                                    FoodSHare platform connects food donors, food recipients and volunteers, to reduce food waste. The platform aims to streamline surplus food donations from farms and other food producers, distributors and retailers, to socially disadvantaged groups by facilitating communication and logistic processes. The platform is a part of the Ploutos project, funded under the EU’s Horizon 2020 programme.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-plus border border-base-300">
                            <div className="collapse-title text-xl font-medium">
                                What is food waste?
                            </div>
                            <div className="collapse-content">
                                <p>Food waste is generated in production, distribution and other processes. It represents the food that is not consumed by the end user. Most common cases of food waste are close “Best before” and “Expiraton” date, aesthetic reasons, texture and overall quality of the product, not optimized production, etc. This food is in its entirety safe for human consumption and thus suitable for donating to the socially disadvantaged groups that need it the most.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-plus border border-base-300">
                            <div className="collapse-title text-xl font-medium">
                                Who can donate food?
                            </div>
                            <div className="collapse-content">
                                <p>Generally, food donors can include food and beverage companies, agriculture holdings, distributors, retailers, and other companies that produce, distribute and sell food. The exception is HoReCa sector (hotels, restaurants and cafés) which is restricted from food donation in the Republic of Serbia.</p>
                            </div>
                        </div>
                        <div tabIndex={0} className="collapse collapse-plus border border-base-300">
                            <div className="collapse-title text-xl font-medium">
                                Who can receive food donations?
                            </div>
                            <div className="collapse-content">
                                <p>Food donation recipients can be charity organisations like food banks, foundations and public kitchens. These organisations will then distribute donated food to their members, local community, and other individuals in need.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default WeDoSection;