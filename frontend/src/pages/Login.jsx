import { useState } from "react";
import { loginUser } from "../services/authService";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import toast from "react-hot-toast";
import { Mail, Lock, ShieldCheck } from "lucide-react";
import loginIllustration from "../assets/Login-amico.svg";

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      return toast.error("All fields are required");
    }

    try {
      setLoading(true);

      const res = await loginUser(form);

      localStorage.setItem("accessToken", res.data.accessToken);

      localStorage.setItem("user", JSON.stringify(res.data.user));

      setUser(res.data.user);

      toast.success("Login Successful");

      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-600 to-blue-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-5xl grid md:grid-cols-2">
        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center items-center bg-slate-50 p-10">
          <div className="w-20 h-20 rounded-2xl bg-purple-100 flex items-center justify-center mb-6">
            <ShieldCheck size={40} className="text-purple-600" />
          </div>

          <h2 className="text-4xl font-bold text-center mb-4">Welcome Back!</h2>

          <p className="text-gray-500 text-center leading-relaxed">
            Login to your account and continue your journey.
          </p>

          <div className="mt-10">
            <img src={loginIllustration} alt="login" className="w-72" />
          </div>
        </div>

        {/* Right Side */}
        <div className="p-10 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-2">Login</h1>

          <p className="text-gray-500 mb-8">
            Enter your credentials to access your account.
          </p>

          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="relative mb-4">
              <Mail size={18} className="absolute left-4 top-4 text-gray-400" />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
              />
            </div>

            {/* Password */}
            <div className="relative mb-6">
              <Lock size={18} className="absolute left-4 top-4 text-gray-400" />

              <input
                type="password"
                placeholder="Password"
                className="w-full border rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                onChange={(e) =>
                  setForm({
                    ...form,
                    password: e.target.value,
                  })
                }
              />
            </div>

            <button
              disabled={loading}
              className="
                w-full
                py-3
                rounded-xl
                text-white
                font-semibold
                bg-gradient-to-r
                from-purple-600
                to-blue-600
                hover:scale-[1.02]
                transition-all
                duration-300
                shadow-lg
              "
            >
              {loading ? "Signing In..." : "Login"}
            </button>

            <p className="text-center mt-6 text-gray-600">
              Don't have an account?
              <Link
                to="/"
                className="text-purple-600 font-semibold ml-2 hover:underline"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
