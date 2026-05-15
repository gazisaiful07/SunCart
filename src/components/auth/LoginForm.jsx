"use client";
import React from 'react';
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const LoginForm = () => {
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    const searchParams = useSearchParams();
    const redirectPath = searchParams.get("redirect") || "/";

    const handleLogin = async (e) => {
        e.preventDefault();

        setLoading(true);

        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        const { error } = await authClient.signIn.email({
            email,
            password,
        });

        setLoading(false);

        if (error) {
            toast.error(error.message);
            return;
        }

        toast.success("Login Successful");
        router.push(redirectPath);

        alert("Login Successful");

        router.push(redirectPath);
    };
    const handleGoogleLogin = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });
    };

    return (
        <form onSubmit={handleLogin} className="space-y-5">

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
                {loading ? "Loading..." : "Login"}
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
                Don't have an account?{" "}
                <Link
                    href="/register"
                    className="text-purple-400"
                >
                    Register
                </Link>
            </p>

        </form>
    );
};

export default LoginForm;