import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../services/authService";
import toast from "react-hot-toast";
import { User, Mail, Lock } from "lucide-react";
import registerIllustration from "../assets/signup-amico.svg";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.username || !form.email || !form.password) {
      return toast.error("All fields are required");
    }

    try {
      setLoading(true);

      await registerUser(form);

      toast.success("OTP sent to email");

      navigate("/verify", {
        state: {
          email: form.email,
        },
      });
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br  from-indigo-700 via-purple-600 to-blue-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-5xl grid md:grid-cols-2">
        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center items-center bg-slate-50 p-10">
          <div className="w-20 h-20 rounded-2xl bg-purple-100 flex items-center justify-center mb-6">
            <User size={40} className="text-purple-600" />
          </div>

          <h2 className="text-4xl font-bold text-center mb-4">
            Create Your Account
          </h2>

          <p className="text-gray-500 text-center leading-relaxed">
            Join today and start your journey with our Authentication System.
          </p>

          <div className="mt-10">
            <img
              src={registerIllustration}
              alt="illustration"
              className="w-72"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="p-10 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-2">Register</h1>

          <p className="text-gray-500 mb-8">
            Fill in the details to create an account.
          </p>

          <form onSubmit={handleSubmit}>
            {/* Username */}
            <div className="relative mb-4">
              <User size={18} className="absolute left-4 top-4 text-gray-400" />

              <input
                type="text"
                placeholder="Username"
                className="w-full border rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                onChange={(e) =>
                  setForm({
                    ...form,
                    username: e.target.value,
                  })
                }
              />
            </div>

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
              {loading ? "Creating Account..." : "Create Account"}
            </button>

            <p className="text-center mt-6 text-gray-600">
              Already have an account?
              <Link
                to="/login"
                className="text-purple-600 font-semibold ml-2 hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
