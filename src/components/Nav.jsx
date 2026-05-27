import TransitionLink from "./transitionLink";

const Nav = ({ onCartClick }) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-red-50 shadow-sm text-gray-800 text-base sm:text-xl px-4 sm:px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="font-bold">
          <TransitionLink to="/">LOGO</TransitionLink>
        </div>

        <div className="flex gap-4">
          <span className="cursor-pointer hover:underline">
            <TransitionLink to="/shop">SHOP</TransitionLink>
          </span>
          <button onClick={onCartClick} className="cursor-pointer hover:underline">
            CART
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
