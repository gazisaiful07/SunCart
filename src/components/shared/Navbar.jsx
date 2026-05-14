"use client";

import Link from "next/link";

const Navbar = () => {
    const user = null; // BetterAuth connect korar por dynamic hobe

    return (
        <div className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
            <div className="navbar max-w-7xl mx-auto px-4">

                <div className="navbar-start">
                    <Link href="/" className="text-2xl font-bold">
                        <span className="text-white">Sun</span>
                        <span className="text-purple-500">Cart</span>
                    </Link>
                </div>

                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal gap-2 text-gray-200">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/products">Products</Link></li>
                        <li><Link href="/my-profile">My Profile</Link></li>
                    </ul>
                </div>

                <div className="navbar-end gap-3">
                    {user ? (
                        <>
                            <img
                                src={user.image}
                                alt="User"
                                className="w-10 h-10 rounded-full border border-purple-500"
                            />
                            <button className="btn btn-sm gradient-btn px-5">
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link href="/login" className="btn btn-sm btn-ghost text-white">
                                Login
                            </Link>
                            <Link href="/register" className="btn btn-sm gradient-btn px-5">
                                Register
                            </Link>
                        </>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Navbar;