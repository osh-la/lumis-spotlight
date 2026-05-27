// components/TransitionLink.jsx
import { useNavigate } from "react-router-dom";
import { useTransitionContext } from "../context/transitionContext";

const TransitionLink = ({ to, children, className }) => {
  const navigate = useNavigate();
  const { triggerTransition } = useTransitionContext();

  const handleClick = async (e) => {
    e.preventDefault();

    await triggerTransition(() => {
      navigate(to);
    });
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default TransitionLink;
