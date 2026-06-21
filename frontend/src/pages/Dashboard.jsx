import { useEffect, useState } from "react";

import { getMe } from "../services/authService";
import toast from "react-hot-toast";
import { ShieldCheck, Users, KeyRound, Calendar } from "lucide-react";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const res = await getMe();
      setUser(res.data.user);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-slate-100 p-8">
        <h1 className="text-4xl font-bold">Dashboard</h1>

        <p className="text-gray-500 mt-2 mb-8">
          Welcome back, {user?.username} 👋
        </p>

        {/* Stats Cards */}

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Verified User</p>

                <h2 className="text-2xl font-bold text-green-600">Yes</h2>
              </div>

              <ShieldCheck className="text-green-500" />
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Active Sessions</p>

                <h2 className="text-2xl font-bold">1</h2>
              </div>

              <Users className="text-blue-500" />
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Token Status</p>

                <h2 className="text-2xl font-bold text-green-600">Valid</h2>
              </div>

              <KeyRound className="text-purple-500" />
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Account Created</p>

                <h2 className="text-lg font-bold">2026</h2>
              </div>

              <Calendar className="text-orange-500" />
            </div>
          </div>
        </div>

        {/* Main Content */}

        <div className="grid md:grid-cols-2 gap-6">
          {/* User Card */}

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-bold mb-6">Your Information</h2>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-xl font-bold text-purple-700">
                {user?.username?.charAt(0).toUpperCase()}
              </div>

              <div>
                <h3 className="font-bold text-lg">{user?.username}</h3>

                <p className="text-gray-500">{user?.email}</p>

                <span className="inline-block mt-2 px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full">
                  Verified
                </span>
              </div>
            </div>
          </div>

          {/* Auth Overview */}

          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-bold mb-6">Authentication Overview</h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span>JWT Authentication</span>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  Active
                </span>
              </div>

              <div className="flex justify-between">
                <span>Refresh Token</span>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  Enabled
                </span>
              </div>

              <div className="flex justify-between">
                <span>Email Verification</span>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  Completed
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}

        <div className="mt-8 bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>

          <div className="flex justify-between text-gray-600">
            <span>You have successfully logged in.</span>

            <span>Just Now</span>
          </div>
        </div>
      </div>
    </>
  );
}
