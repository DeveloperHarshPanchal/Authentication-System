import { useEffect, useState } from "react";
import { getMe } from "../services/authService";
import { Mail, User, BadgeCheck } from "lucide-react";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const res = await getMe();

      setUser(res.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-purple-50 to-blue-100 flex items-center justify-center p-6">
      <div
        className="
        bg-white/80
        backdrop-blur-xl
        border
        border-white
        shadow-2xl
        rounded-3xl
        w-full
        max-w-xl
        p-8
      "
      >
        {/* Profile Header */}

        <div className="flex flex-col items-center">
          <div
            className="
            w-28
            h-28
            rounded-full
            bg-gradient-to-r
            from-purple-600
            to-blue-600
            flex
            items-center
            justify-center
            text-white
            text-4xl
            font-bold
            shadow-lg
          "
          >
            {user?.username?.charAt(0)?.toUpperCase()}
          </div>

          <h2
            className="
            mt-5
            text-3xl
            font-bold
            text-slate-800
          "
          >
            {user?.username || "Loading..."}
          </h2>

          <p className="text-slate-500 mt-1">Account Profile</p>
        </div>

        {/* Details */}

        <div className="mt-8 space-y-5">
          <div
            className="
            flex
            items-center
            gap-4
            p-4
            rounded-2xl
            bg-slate-100
          "
          >
            <div
              className="
              p-3
              rounded-xl
              bg-purple-600
              text-white
            "
            >
              <User size={22} />
            </div>

            <div>
              <p className="text-sm text-slate-500">Username</p>

              <p className="font-semibold text-slate-800">{user?.username}</p>
            </div>
          </div>

          <div
            className="
            flex
            items-center
            gap-4
            p-4
            rounded-2xl
            bg-slate-100
          "
          >
            <div
              className="
              p-3
              rounded-xl
              bg-blue-600
              text-white
            "
            >
              <Mail size={22} />
            </div>

            <div>
              <p className="text-sm text-slate-500">Email</p>

              <p className="font-semibold text-slate-800">{user?.email}</p>
            </div>
          </div>

          <div
            className="
            flex
            items-center
            gap-4
            p-4
            rounded-2xl
            bg-green-50
          "
          >
            <div
              className="
              p-3
              rounded-xl
              bg-green-600
              text-white
            "
            >
              <BadgeCheck size={22} />
            </div>

            <div>
              <p className="text-sm text-slate-500">Account Status</p>

              <p className="font-semibold text-green-600">Verified User</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
