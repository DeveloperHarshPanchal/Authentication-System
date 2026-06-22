import { useNavigate } from "react-router-dom";
import { logoutUser } from "../services/authService";
import { useAuth } from "../hooks/useAuth";
import { Bell, Search, Menu } from "lucide-react";
import toast from "react-hot-toast";

export default function Navbar() {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logoutUser();

      logout();

      toast.success("Logged out successfully");

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="bg-white border-b border-slate-200 px-8 py-4 flex justify-between items-center">
      {/* Left */}

      <div className="flex items-center gap-4">
        <button className="lg:hidden">
          <Menu size={22} />
        </button>

        <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>
      </div>

      {/* Center Search */}

      <div className="hidden md:flex items-center bg-slate-100 rounded-xl px-4 py-2 w-80">
        <Search size={18} className="text-slate-500" />

        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none ml-2 w-full"
        />
      </div>

      {/* Right */}

      <div className="flex items-center gap-5">
        <button className="relative">
          <Bell size={22} />

          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold">
            {user?.username?.charAt(0)?.toUpperCase()}
          </div>

          <div className="hidden md:block">
            <p className="font-semibold text-slate-800">{user?.username}</p>

            <p className="text-xs text-slate-500">Authenticated User</p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="
            bg-gradient-to-r
            from-red-500
            to-red-600
            text-white
            px-4
            py-2
            rounded-xl
            hover:scale-105
            transition-all duration-300 
            cursor-pointer
          "
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
