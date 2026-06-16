"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthProvider";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
const { register } = useAuth();
const router = useRouter();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleRegister = async (e) => {
e.preventDefault();


try {
  await register(email, password);
  router.push("/");
} catch (error) {
  alert(error.message);
}


};

return ( <section className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-10"> <div className="w-full max-w-6xl bg-base-100 rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">


    {/* Left Side */}
    <div className="bg-teal-400 text-secondary-content p-10 lg:p-14 flex flex-col justify-center">
      <h1 className="text-4xl lg:text-5xl font-bold mb-6">
        Join ColorCraft
      </h1>

      <p className="text-lg opacity-90">
        Create your account and discover unique handcrafted jewelry
        from talented artisans around the world.
      </p>

      <div className="mt-10 space-y-4">
        <div className="badge badge-outline badge-lg">
          Handmade Products
        </div>

        <div className="badge badge-outline badge-lg">
          Trusted Marketplace
        </div>

        <div className="badge badge-outline badge-lg">
          Secure Experience
        </div>
      </div>
    </div>

    {/* Right Side */}
    <div className="p-8 lg:p-12 flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-2">
        Create Account
      </h2>

      <p className="text-base-content/70 mb-8">
        Register to start shopping and selling.
      </p>

      <form
        onSubmit={handleRegister}
        className="space-y-5"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="input input-bordered w-full"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          required
        />

        <input
          type="password"
          placeholder="Create a password"
          className="input input-bordered w-full"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          required
        />

        <button
          type="submit"
          className="btn btn-secondary w-full"
        >
          Create Account
        </button>
      </form>

      <p className="text-center text-sm mt-6">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-primary font-semibold"
        >
          Login
        </Link>
      </p>
    </div>
  </div>
</section>


);
}
