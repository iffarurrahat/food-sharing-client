import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import Container from '../../ui/Container';

const Navbar = ({ children }) => {

    const navLink = <>
        <span>
            <NavLink className={({ isActive }) => isActive ? 'border-b-4 border-black pb-[3px]' : ''} to='/'>Home</NavLink>
        </span>
        <span>
            <NavLink className={({ isActive }) => isActive ? 'border-b-4 border-black pb-[3px]' : ''} to='/availableFoods'>Available Foods</NavLink>
        </span>
        <span>
            <NavLink className={({ isActive }) => isActive ? 'border-b-4 border-black pb-[3px]' : ''} to='/addFood'>Add Food</NavLink>
        </span>
        <span>
            <NavLink className={({ isActive }) => isActive ? 'border-b-4 border-black pb-[3px]' : ''} to='/manageFood'>Manage My Foods</NavLink>
        </span>
        <span>
            <NavLink className={({ isActive }) => isActive ? 'border-b-4 border-black pb-[3px]' : ''} to='/foodRequest'>My Food Request</NavLink>
        </span>
        <span>
            <NavLink to='/login'>Login</NavLink>
        </span>
    </>

    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-base-300">
                    <Container>
                        <div className="flex-none md:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 flex justify-end md:justify-start px-2 mx-2 uppercase"><Logo /></div>
                        <div className="flex-none hidden md:block md:px-2 mx-2">
                            <div className="flex gap-7">
                                {/* Navbar menu content here */}
                                {navLink}
                            </div>
                        </div>
                    </Container>
                </div>
                {/* Page content here */}
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="menu p-4 w-80 min-h-full bg-base-200 space-y-3">
                    {/* Sidebar content here */}
                    {navLink}
                </div>
            </div>
        </div>
    );
};

Navbar.propTypes = {
    children: PropTypes.node
};

export default Navbar;