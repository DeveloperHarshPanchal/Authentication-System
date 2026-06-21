import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { verifyEmail } from "../services/authService";
import toast from "react-hot-toast";
import { MailCheck, ShieldCheck } from "lucide-react";

export default function VerifyEmail() {
  const navigate = useNavigate();

  const location = useLocation();

  const email = location.state?.email;

  const [otp, setOtp] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await verifyEmail({
        email,
        otp,
      });

      toast.success("Email Verified Successfully");

      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Verification failed");
    }
  };

  return (
    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      p-6
      bg-gradient-to-br
      from-indigo-700
      via-purple-600
      to-blue-600
    "
    >
      <form
        onSubmit={handleSubmit}
        className="
          w-full
          max-w-md
          bg-white/20
          backdrop-blur-xl
          border
          border-white/30
          rounded-3xl
          shadow-2xl
          p-8
          text-white
        "
      >
        {/* Icon */}

        <div
          className="
          flex
          justify-center
          mb-5
        "
        >
          <div
            className="
            bg-white
            text-purple-600
            p-5
            rounded-full
            shadow-lg
          "
          >
            <MailCheck size={45} />
          </div>
        </div>

        <h2
          className="
          text-3xl
          font-bold
          text-center
          mb-2
        "
        >
          Verify Email
        </h2>

        <p
          className="
          text-center
          text-purple-100
          mb-8
        "
        >
          Enter the OTP sent to your email
        </p>

        <div
          className="
          flex
          items-center
          bg-white/90
          rounded-xl
          px-4
          mb-5
        "
        >
          <ShieldCheck className="text-purple-600" size={22} />

          <input
            type="text"
            placeholder="Enter OTP"
            className="
              w-full
              p-4
              outline-none
              bg-transparent
              text-slate-800
              ml-2
              tracking-widest
              font-semibold
            "
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>

        <button
          className="
            w-full
            py-3
            rounded-xl
            bg-white
            text-purple-700
            font-bold
            text-lg
            hover:scale-105
            transition
            shadow-lg
          "
        >
          Verify Email
        </button>

        <p
          className="
          text-center
          text-sm
          text-purple-100
          mt-6
        "
        >
          Secure verification powered by OTP
        </p>
      </form>
    </div>
  );
}
