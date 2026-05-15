"use client";
import React from 'react';
import Link from "next/link";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleRegister = async (e) => {
        e.preventDefault();

        setLoading(true);

        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const image = form.image.value;
        const password = form.password.value;

        const { data, error } = await authClient.signUp.email({
            email,
            password,
            name,
            image,
        });
        console.log(data, error);

        setLoading(false);

        if (error) {
            toast.error(error.message);
            return;
        }

        toast.success("Registration Successful");
        form.reset();
        router.push("/login");

        alert("Registration Successful");

        form.reset();
    };
    const handleGoogleLogin = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });
    };

    return (
        <form onSubmit={handleRegister} className="space-y-5">

            <div>
                <label className="mb-2 block text-sm text-gray-300">
                    Name
                </label>

                <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="input input-bordered w-full bg-black/30"
                />
            </div>

            <div>
                <label className="mb-2 block text-sm text-gray-300">
                    Email
                </label>

                <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    className="input input-bordered w-full bg-black/30"
                />
            </div>

            <div>
                <label className="mb-2 block text-sm text-gray-300">
                    Photo URL
                </label>

                <input
                    type="text"
                    name="image"
                    required
                    placeholder="Enter image url"
                    className="input input-bordered w-full bg-black/30"
                />
            </div>

            <div>
                <label className="mb-2 block text-sm text-gray-300">
                    Password
                </label>

                <input
                    type="password"
                    name="password"
                    required
                    placeholder="Enter password"
                    className="input input-bordered w-full bg-black/30"
                />
            </div>

            <button
                type="submit"
                disabled={loading}
                className="btn gradient-btn w-full"
            >
                {loading ? "Loading..." : "Register"}
            </button>

            <div className="divider text-gray-500">OR</div>

            <button
                type="button"
                onClick={handleGoogleLogin}
                className="btn w-full rounded-full border border-white/10 bg-white text-black hover:bg-gray-200"
            >
                Continue with Google
            </button>
            <p className="text-center text-sm text-gray-400">
                Already have an account?{" "}
                <Link
                    href="/login"
                    className="text-purple-400"
                >
                    Login
                </Link>
            </p>

        </form>
    );
};

export default RegisterForm;