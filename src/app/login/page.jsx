"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const LoginPage = () => {
const { login, googleLogin } = useAuth();
const router = useRouter();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleLogin = async (e) => {
e.preventDefault();


try {
  await login(email, password);
  router.push("/");
} catch (error) {
  alert(error.message);
}


};

const handleGoogleLogin = async () => {
try {
await googleLogin();
router.push("/");
} catch (error) {
alert(error.message);
}
};

return ( <section className="min-h-screen bg-base-200 flex items-center justify-center px-4 py-10"> <div className="w-full max-w-6xl bg-base-100 rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">


    {/* Left Side */}
    <div className="bg-primary text-primary-content p-10 lg:p-14 flex flex-col justify-center">
      <h1 className="text-4xl lg:text-5xl font-bold mb-6">
        Welcome Back
      </h1>

      <p className="text-lg opacity-90">
        Sign in to explore premium handcrafted jewelry,
        manage your products, and connect with trusted artisans.
      </p>

      <div className="mt-10 space-y-4">
        <div className="badge badge-outline badge-lg">
          Premium Collections
        </div>

        <div className="badge badge-outline badge-lg">
          Secure Shopping
        </div>

        <div className="badge badge-outline badge-lg">
          Trusted Sellers
        </div>
      </div>
    </div>

    {/* Right Side */}
    <div className="p-8 lg:p-12 flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-2">
        Login
      </h2>

      <p className="text-base-content/70 mb-8">
        Access your ColorCraft account.
      </p>

      <form
        onSubmit={handleLogin}
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
          placeholder="Enter your password"
          className="input input-bordered w-full"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          required
        />

        <button
          type="submit"
          className="btn btn-primary w-full"
        >
          Login
        </button>
      </form>

      <div className="divider">OR</div>

      <button
        onClick={handleGoogleLogin}
        className="btn btn-outline w-full"
      >
        <FaGoogle />
        Continue with Google
      </button>

      <p className="text-center text-sm mt-6">
        Don't have an account?{" "}
        <Link
          href="/register"
          className="text-primary font-semibold"
        >
          Register
        </Link>
      </p>
    </div>
  </div>
</section>


);
};

export default LoginPage;
