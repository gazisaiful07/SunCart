import React from 'react';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    faFacebook,
    faInstagram,
    faLinkedinIn,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-black">
            <div className="max-w-7xl mx-auto px-4 py-14">
                <div className="gap-10 md:grid-cols-3 flex justify-between ">
                    {/* Logo and Description */}
                    <div>
                        <Link href="/" className="text-3xl font-bold">
                            <span className="text-white">Sun</span>
                            <span className="text-purple-500">Cart</span>
                        </Link>

                        <p className="mt-4 text-sm leading-7 text-gray-400">
                            Premium summer essentials including sunglasses, skincare, <br />
                            outfits, and beach accessories designed for modern lifestyles.
                        </p>
                    </div>
                    {/* Footer menu */}
                    <div>
                        <h3 className="text-lg font-semibold text-white">
                            Quick Links
                        </h3>

                        <div className="mt-4 flex flex-col gap-3 text-gray-400">
                            <Link href="/">Home</Link>
                            <Link href="/products">Products</Link>
                            <Link href="/my-profile">My Profile</Link>
                            <Link href="/login">Login</Link>
                        </div>
                    </div>
                    {/* Contact Information */}
                    <div>
                        <h3 className="text-lg font-semibold text-white">
                            Contact Info
                        </h3>

                        <div className="mt-4 space-y-3 text-gray-400">
                            <p>Email: support@suncart.com</p>
                            <p>Phone: +880 1234-567890</p>
                            <p>Location: Dhaka, Bangladesh</p>
                        </div>

                        <div className="mt-6 flex gap-4">
                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-purple-500 hover:text-purple-400"
                            >
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-purple-500 hover:text-purple-400"
                            >
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-purple-500 hover:text-purple-400"
                            >
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:border-purple-500 hover:text-purple-400"
                            >
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-gray-500 md:flex-row">
                    <p>© 2026 SunCart. All rights reserved.</p>

                    <Link
                        href="/privacy-policy"
                        className="hover:text-purple-400 transition"
                    >
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;