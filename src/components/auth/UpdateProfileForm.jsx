"use client";
import React from 'react';
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const UpdateProfileForm = ({ user }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleUpdate = async (e) => {
        e.preventDefault();

        setLoading(true);

        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;

        const { error } = await authClient.updateUser({
            name,
            image,
        });

        setLoading(false);

        if (error) {
            toast.error(error.message);
            return;
        }

        toast.success("Profile updated successfully");
        router.push("/my-profile");
        router.refresh();
    };

    return (
        <form onSubmit={handleUpdate} className="space-y-5">
            <div>
                <label className="mb-2 block text-sm text-gray-300">
                    Name
                </label>

                <input
                    type="text"
                    name="name"
                    required
                    defaultValue={user.name || ""}
                    className="input input-bordered w-full bg-black/30"
                />
            </div>

            <div>
                <label className="mb-2 block text-sm text-gray-300">
                    Image URL
                </label>

                <input
                    type="text"
                    name="image"
                    required
                    defaultValue={user.image || ""}
                    className="input input-bordered w-full bg-black/30"
                />
            </div>

            <button
                type="submit"
                disabled={loading}
                className="btn gradient-btn w-full"
            >
                {loading ? "Updating..." : "Update Information"}
            </button>
        </form>
    );
};

export default UpdateProfileForm;