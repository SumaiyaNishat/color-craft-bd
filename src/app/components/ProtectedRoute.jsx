"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthProvider";

const ProtectedRoute = ({ children }) => {
const { user, loading } = useAuth();
const router = useRouter();

useEffect(() => {
if (!loading && !user) {
router.replace("/login");
}
}, [user, loading, router]);

if (loading) {
return ( <div className="min-h-screen flex items-center justify-center"> <span className="loading loading-spinner loading-lg text-primary"></span> </div>
);
}

if (!user) {
return null;
}

return children;
};

export default ProtectedRoute;
