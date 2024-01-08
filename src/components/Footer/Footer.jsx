import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Container from "../ui/Container";

const Footer = () => {
    return (
        <>
            <div className="py-10 md:py-20 bg-primary font-inter">
                <Container>
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 text-center lg:text-start">
                        {/* <-!----- footer__one ----> */}
                        <div className="text-white pl-2 md:pl-0">
                            <div>
                                <img className="mx-auto lg:mx-0" src="https://i.postimg.cc/02wgGKJy/2-1-removebg-preview.png" alt="" />
                            </div>
                            <p className="text-protein py-3">FoodCloud is the partner organisation for the nationwide availability of food element of the ESF+ Food Support in Ireland, a programme funded by the EU and the Irish Exchequer</p>
                            <div className="flex gap-2 justify-center lg:justify-start mt-3">
                                <span className="border rounded-full p-2"><FaFacebookF className="text-white text-2xl" /></span>
                                <span className="border rounded-full p-2"> <FaXTwitter className="text-white text-2xl" /></span>
                                <span className="border rounded-full p-2"><FaInstagram className="text-white text-2xl" /></span>
                                <span className="border rounded-full p-2"><FaLinkedinIn className="text-white text-2xl" /></span>
                            </div>
                        </div>
                        {/* <-!----- footer__tow ----> */}
                        <div className="text-white">
                            <div className="px-auto lg:pl-16">
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">About US</h2>
                                <div className="text-protein list-none space-y-3">
                                    <li>Charities we work with</li>
                                    <li>Corporate partnerships</li>
                                    <li>Fundraise for us</li>
                                    <li>Staff Vacancies</li>
                                    <li>Privacy Policy</li>
                                </div>
                            </div>
                        </div>
                        {/* <-!----- footer__three ----> */}
                        <div className="text-white">
                            <div className="px-auto lg:pl-16">
                                <h2 className="text-2xl md:text-3xl font-bold mb-8">Find out more</h2>
                                <div className="text-protein list-none space-y-3">
                                    <li>Donate Food</li>
                                    <li>Get Food</li>
                                    <li>Food Safety</li>
                                    <li>Make A Donation</li>
                                    <li>Volunteering Opportunities</li>
                                </div>
                            </div>
                        </div>
                        {/* <-!----- footer__four ----> */}
                        <div className="text-white">
                            <div className="px-auto lg:pl-16">
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Support</h2>
                                <div className="text-protein list-none space-y-3">
                                    <li>Support Center</li>
                                    <li>Feedback</li>
                                    <li>Accessibility</li>
                                    <li>News Get in touch</li>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="bg-secondary text-white py-3">
                <p className="text-center">© Community Food Sharing 2024 Website by FoodSa</p>
            </div>
        </>
    );
};

export default Footer;