import { Link } from "react-router-dom";
export default function GetStarted() {
  return (
    <section className="w-full h-screen bg-[#C8A98A] flex items-center justify-center px-6 py-16">
      <Link to="/onboarding"
        className="
          bg-white
          text-[#6B4E3D]
          font-semibold
          text-base
          sm:text-lg
          px-8
          sm:px-10
          py-3
          sm:py-4
          rounded-full
          shadow-lg
          transition-all
          duration-300
          hover:scale-105
          hover:shadow-xl
          active:scale-95
        "
      >
        Get Started
      </Link>
    </section>
  );
}