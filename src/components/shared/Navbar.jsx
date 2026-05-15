"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Navbar = () => {

    const router = useRouter();
    const { data: session, isPending } = authClient.useSession();

    const user = session?.user;

    const handleLogout = async () => {
        await authClient.signOut();

        toast.success("Logout successful");
        router.push("/login");
        router.refresh();
    };


    return (
        <div className="sticky top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
            <div className="navbar max-w-7xl mx-auto px-4">

                <div className="navbar-start">
                    <div className="dropdown md:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost text-white">
                            Menu
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu dropdown-content z-[1] mt-3 w-52 rounded-2xl border border-white/10 bg-black p-3 text-gray-200 shadow"
                        >
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/products">Products</Link>
                            </li>
                            <li>
                                <Link href="/my-profile">My Profile</Link>
                            </li>
                        </ul>
                    </div>


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

                <div className="navbar-end gap-2">
                    {isPending ? (
                        <div className="flex gap-3">
                            <Link href="/login" className="btn btn-ghost btn-sm text-white">
                                Login
                            </Link>

                            <Link href="/register" className="btn gradient-btn btn-sm px-5">
                                Register
                            </Link>
                        </div>
                    ) : user ? (
                        <>
                            <img
                                src={user.image || "/default-user.png"}
                                alt={user.name || "User"}
                                className="h-8 w-8 rounded-full border border-purple-500 object-cover md:h-10 md:w-10"
                            />

                            <button
                                onClick={handleLogout}
                                className="btn gradient-btn btn-xs px-3 md:btn-sm md:px-5"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link href="/login" className="btn btn-ghost btn-sm text-white">
                                Login
                            </Link>

                            <Link href="/register" className="btn gradient-btn btn-sm px-5">
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