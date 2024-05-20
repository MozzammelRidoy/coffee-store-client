import {  NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-center gap-x-5 my-4'>
                <NavLink to={'/'}>Home </NavLink>
                <NavLink to={'/addCoffee'}>Add Coffee </NavLink>
                <NavLink to={'/register'}> Register</NavLink>
                <NavLink to={'/login'}> Login</NavLink>
                <NavLink to={'/users'}> Users</NavLink>
                
        </div>
    );
};

export default Header;