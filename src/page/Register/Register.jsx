// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { AuthContext } from '../../providers/AuthProvider';
const auth = getAuth(app);



const Register = () => {

    const { createUser } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');

    const location = useLocation();
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name');
        const photo = form.get('photo');
        const contact = form.get('contact');
        const email = form.get('email');
        const password = form.get('password');
        const gender = form.get('gender');

        // reset error
        setRegisterError('');

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer?')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one uppercase character!');
            return;
        }
        else if (!/[ !"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/.test(password)) {
            setRegisterError('Password must contain at least one special character');
            return;
        }

        createUser(email, password)
            .then(result => {
                e.target.reset();
                Swal.fire(
                    'Good job!',
                    'You are successfully registered!',
                    'success'
                );

                // navigation after register
                navigate(location?.state ? location.state : '/');

                // update Profile
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photo,
                })
                    .then(() => console.log('Profile updated'))
                    .catch()
                    
            })
            .catch(error => {
                console.log(error);
                if (error.code === 'auth/email-already-in-use') {
                    new Swal("Your Already Registered", "Please Login", "info");
                    e.target.reset();
                }
                else if (error.code === 'auth/network-request-failed') {
                    new Swal("Unstable Network!", "Please Solve Your Internet Problem", "info");
                    e.target.reset();
                }
            })

    }

    return (
        <div className="bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 py-14 h-full px-3 md:px-0">
            <div className="bg-white md:w-1/2 mx-auto rounded">
                <form onSubmit={handleRegister} className="card-body">
                    <h2 className="mb-1 text-2xl font-bold text-indigo-500">Create New Account</h2>
                    <p className="mb-5">If you have an already account ? <Link to="/login" className="font-semibold text-blue-600">Login</Link></p>
                    {/* input filed name */}
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text text-indigo-500 font-medium">Name Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your Full Name" className="input input-bordered" required />
                    </div>
                    {/* input filed photo_url and contact_number */}
                    <div className="md:flex gap-5">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-indigo-500 font-medium">Your Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Your Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-indigo-500 font-medium">Contact</span>
                            </label>
                            <input type="text" name="contact" placeholder="Your Contact Number" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* input filed email and password */}
                    <div className="md:flex gap-5">
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-indigo-500 font-medium">Your Email</span>
                            </label>
                            <input type="text" name="email" placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-indigo-500 font-medium">Your Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Your Password" className="input input-bordered" required />
                        </div>
                    </div>
                    {/* input filed radio */}
                    <div className="form-control mt-4">
                        <label className="flex gap-5">
                            <span className="label-text text-indigo-500 font-medium">Your Gender</span>
                            <div className="flex items-center">
                                <input type="radio" name="gender" value="Male" className="radio mr-2 checked:bg-indigo-500" defaultChecked />Male
                                <input type="radio" name="gender" value="Female" className="radio checked:bg-indigo-500 ml-4 mr-2" />Female
                            </div>
                        </label>
                    </div>
                    <label className="label">
                        {
                            registerError && <p className='text-red-600'>{registerError}</p>
                        }
                    </label>
                    <div className="mt-8">
                        <button className="btn btn-wide bg-indigo-500 text-white">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;