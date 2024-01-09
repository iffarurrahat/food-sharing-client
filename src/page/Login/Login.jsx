import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FcGoogle } from 'react-icons/fc';
import Swal from "sweetalert2";
import Container from "../../components/ui/Container";

const Login = () => {

    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');

        // reset error 
        setLoginError('');

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                new Swal("Good job!", "You are successfully login", "success");

                // navigation after login 
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                // console.error(error);
                if (error.code === 'auth/invalid-login-credentials') {
                    setLoginError('Your Email or Password was Wrong!!!!')
                    return;
                }
                else if (error.code === 'auth/too-many-requests') {
                    setLoginError('Please try again in a few minutes later!!')
                    return;
                }
            })
    }

    // SignIn With Google
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                // console.log(result.user);
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div className="font-inter">
            {/*<-!------ login ----->*/}
            <Container>
                <div className="md:flex justify-between md:h-screen items-center">
                    {/* <-!------image -----> */}
                    <div className="md:flex-1">
                        <img src="https://i.ibb.co/0GWgxFp/Frame.png" className="hidden md:block" alt="" />
                    </div>
                    <div className="card-body flex-1 border mt-[40%] md:mt-0">
                        <h1 className="text-3xl font-bold text-center mb-10">Login</h1>
                        {/* <-!------ from -----> */}
                        <form onSubmit={handleLogin} className="w-full md:w-4/5 mx-auto">
                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-primary text-white hover:text-primary hover:font-semibold cursor-pointer rounded" type="submit" value="Login" />
                            </div>
                            {
                                loginError && <p className='text-red-600 mt-2'>{loginError}</p>
                            }
                            <div className="text-center">
                                <p className="mt-6 mb-5">Or Sign In with</p>
                                <div onClick={handleGoogleSignIn} className="py-2 cursor-pointer">
                                    <h3 className="px-8 flex justify-center items-center gap-3"><FcGoogle className="text-2xl" /> Login with Google</h3>
                                </div>
                            </div>
                        </form>
                        <p className='my-4 text-center'>If you do not have an account ? <Link className='text-primary font-bold' to='/register'>Register</Link> </p>
                    </div>
                </div>
            </Container>
        </div>

    );
};

export default Login;























{/* <div className="bg-[#171717c9] rounded shadow__bg">
    <div className="flex items-center w-96">
        <form onSubmit={handleLogin} className="card-body z-50">
            <h2 className="mb-1 text-2xl font-bold text-indigo-500">Please Login</h2>
            <p className="mb-5 text-white">If you do not have an account ? <Link to="/register" className="font-semibold text-blue-600">Register</Link></p>

            <div className="font-medium">
                <div className="form-control flex-1 login__input">
                    <label className="label">
                        <span className="label-text text-indigo-500 font-medium">Your Email</span>
                    </label>
                    <input type="text" name="email" placeholder="Your Email" className="input input-bordered" required />
                </div>
                <div className="form-control flex-1 login__input">
                    <label className="label">
                        <span className="label-text text-indigo-500 font-medium">Your Password</span>
                    </label>
                    <input type="password" name="password" placeholder="Your Password" className="input input-bordered " required />
                </div>
            </div>
            {
                loginError && <p className='text-red-600'>{loginError}</p>
            }
            <div className="mt-8">
                <button className="btn btn-block bg-indigo-500 text-white border-none">Login</button>
            </div>
        </form>
    </div>
    <div className="text-center py-3 mb-3">
        <div onClick={handleGoogleSignIn} className="border-2 border-red-600 rounded-full p-1 inline-block mr-3 cursor-pointer">
            <h3 className="text-white px-8 flex items-center gap-3"><FcGoogle className="text-2xl" /> Login with Google</h3>
        </div>
    </div>
</div> */}



