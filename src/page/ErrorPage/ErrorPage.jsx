import { Link } from "react-router-dom";
import Container from "../../components/ui/Container";

const ErrorPage = () => {
    return (
        <Container>
            <div className="flex h-screen items-center">
                <div className="text-center">
                    <img className="w-full md:w-3/4 lg:w-2/3 mx-auto" src="https://i.ibb.co/Vx2fFLm/404.jpg" alt="" />
                    <Link className="border bg-primary text-white mt-3 py-2 px-3 rounded" to='/'>Go To Home</Link>
                </div>
            </div>
        </Container>
    );
};

export default ErrorPage;