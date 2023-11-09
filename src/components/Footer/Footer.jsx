
const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <aside>
                <h2 className="text-3xl font-bold">FOOD SLOGAN</h2>
                <p>Community Food Sharing and <br /> Surplus Reduction Platform</p>
            </aside>
            <nav>
                <header className="footer-title">Services</header>
                <a className="link link-hover">Food Collection</a>
                <a className="link link-hover">Food Rescue</a>
                <a className="link link-hover">Meal Planning</a>
                <a className="link link-hover">Food Education</a>
            </nav>
            <nav>
                <header className="footer-title">Explore</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <header className="footer-title">Contact</header>
                <a className="link link-hover">Mirpur,Dhaka-1216, Bangladesh.</a>
                <a className="link link-hover">Tel: +858 5885 222</a>
                <a className="link link-hover">Email: food@slogan.com</a>
            </nav>
        </footer>
    );
};

export default Footer;