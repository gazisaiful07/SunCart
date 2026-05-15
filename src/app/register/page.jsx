import React from 'react';
import RegisterForm from "@/components/auth/RegisterForm";

const RegisterPage = () => {
   return (
    <section className="flex min-h-screen items-center justify-center px-4 py-20">

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8">

        <div className="mb-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-purple-400">
            Create Account
          </p>

          <h1 className="mt-4 text-4xl font-bold text-white">
            Register
          </h1>
        </div>

        <RegisterForm />

      </div>

    </section>
  );
};

export default RegisterPage;