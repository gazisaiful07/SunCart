import React from 'react';
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";

const MyProfilePage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        redirect("/login?redirect=/my-profile");
    }

    const user = session.user;

    return (
        <section className="max-w-4xl mx-auto px-4 py-20">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
                <div className="flex flex-col items-center text-center">
                    <img
                        src={user.image || "/default-user.png"}
                        alt={user.name || "User"}
                        className="h-32 w-32 rounded-full border border-purple-500 object-cover"
                    />

                    <h1 className="mt-6 text-4xl font-bold text-white">
                        {user.name}
                    </h1>

                    <p className="mt-3 text-gray-400">
                        {user.email}
                    </p>

                    <Link
                        href="/update-profile"
                        className="btn gradient-btn mt-8 px-8"
                    >
                        Update Information
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default MyProfilePage;