import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  // Show loader while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div
          className="
            w-12
            h-12
            border-4
            border-purple-600
            border-t-transparent
            rounded-full
            animate-spin
          "
        ></div>
      </div>
    );
  }

  // If user exists, show page
  // Otherwise redirect to login
  return user ? children : <Navigate to="/login" replace />;
}
