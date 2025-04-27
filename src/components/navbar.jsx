import { useEffect, useState } from 'react';
import { NavLink, Link } from "react-router";

export default function Navbar() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const html = document.documentElement;
        if (darkMode) {
            html.classList.add("dark");
        } else {
            html.classList.remove("dark");
        }
    }, [darkMode]);

    const navLinkClass = (isActive) => `pb-1 border-b-2 ${isActive ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400' : 'border-transparent text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'} font-medium`;

    return (
        <nav className="bg-white dark:bg-gray-900">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                <div className="flex space-x-8">
                    <ul className="flex flex-wrap -mb-px">
                        <li className="mx-2">
                            <NavLink to="/" className={({ isActive }) => navLinkClass(isActive)}>
                                Home
                            </NavLink>
                        </li>
                        <li className="mx-2">
                            <NavLink to="/pipeline" className={({ isActive }) => navLinkClass(isActive)}>
                                Pipeline
                            </NavLink>
                        </li>
                        <li className="mx-2">
                            <NavLink to="/upload" className={({ isActive }) => navLinkClass(isActive)}>
                                Upload
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center space-x-6">
                    <Link to="/">
                        <span className="self-center text-2xl font-bold whitespace-nowrap text-black dark:text-white">StarBoard</span>
                    </Link>
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="text-gray-600 dark:text-yellow-400 hover:text-gray-800 dark:hover:text-white focus:outline-none mx-1"
                    >
                        {darkMode ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.485-8.485h-1M4.515 12H3m16.97-5.657l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10 5 5 0 000-10z" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </nav>
    )
}
