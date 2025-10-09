import React from 'react';
import { Link, NavLink } from 'react-router';
import { Github } from 'lucide-react';
import logoImg from '../assets/logo.png';
const Navbar = () => {
    return (
        <div className=''>
            <div className="navbar bg-white shadow-sm  md:px-10 ">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow">
                          <li>
                            <NavLink
                                    end
                                    to="/"
                                    className={({ isActive }) =>
                                    isActive
                                        ? 'text-violet-600 border-b-2 border-violet-600 pb-1'
                                        : ''
                                    }
                                >
                                    Home
                            </NavLink>
                        </li>
                    <li>
                        <NavLink
                            end
                            to="/apps"
                            className={({ isActive }) =>
                            isActive
                                ? 'text-violet-600 border-b-2 border-violet-600 pb-1'
                                : ''
                            }
                        >
                            Apps
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            end
                            to="/apps/install"
                            className={({ isActive }) =>
                            isActive
                                ? 'text-violet-600 border-b-2 border-violet-600 pb-1'
                                : ''
                            }
                        >
                            Installation
                        </NavLink>
                    </li>
                   
                    </ul>
                    </div>
                    <Link to='/' 
                    className=" text-xl font-bold text-purple-400 flex justify-center items-center gap-2">
                    <img src={logoImg} alt="" className='h-8 w-8' /> HeroApp
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                   <li>
                    <NavLink
                            end
                            to="/"
                            className={({ isActive }) =>
                            isActive
                                ? 'text-violet-600 border-b-2 border-violet-600 pb-1'
                                : ''
                            }
                        >
                            Home
                    </NavLink>
                   </li>
                    <li>
                        <NavLink
                            end
                            to="/apps"
                            className={({ isActive }) =>
                            isActive
                                ? 'text-violet-600 border-b-2 border-violet-600 pb-1'
                                : ''
                            }
                        >
                            Apps
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            end
                            to="/apps/install"
                            className={({ isActive }) =>
                            isActive
                                ? 'text-violet-600 border-b-2 border-violet-600 pb-1'
                                : ''
                            }
                        >
                            Installation
                        </NavLink>
                    </li>
                   
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link 
                    target="_blank"
                    to={`https://github.com/SuvroBiswas93`} 
                    className="btn text-white 
                    bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]">
                    <Github />Contribute
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;