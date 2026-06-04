import TransitionLink from "./transitionLink";

const Nav = ({ onCartClick }) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent shadow-sm text-gray-800 text-base sm:text-xl px-4 sm:px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="font-bold">
          <TransitionLink to="/">
            <img
              src="/images/logo.PNG"
              alt="Logo"
              className="h-12 w-auto object-contain md:h-16"
            />
          </TransitionLink>
        </div>

        <div className="flex items-center gap-4">
          <span className="cursor-pointer hover:underline">
            <TransitionLink to="/gallery">Gallery</TransitionLink>
          </span>
          <span>
            <TransitionLink to="/onboarding">
              <button className="rounded-full bg-black text-white px-8 py-4 text-sm md:text-base uppercase">
                Book a Session
              </button>
            </TransitionLink>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
