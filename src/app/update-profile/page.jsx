import React from 'react';
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import UpdateProfileForm from "@/components/auth/UpdateProfileForm";

const UpdateProfilePage = async () => {

    const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login?redirect=/update-profile");
  }

     return (
    <section className="flex min-h-screen items-center justify-center px-4 py-20">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-purple-400">
            Profile Settings
          </p>

          <h1 className="mt-4 text-4xl font-bold text-white">
            Update Information
          </h1>
        </div>

        <UpdateProfileForm user={session.user} />
      </div>
    </section>
  );
};

export default UpdateProfilePage;