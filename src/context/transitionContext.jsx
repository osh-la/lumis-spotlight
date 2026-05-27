// context/transitionContext.jsx
import { createContext, useContext, useState } from "react";

const TransitionContext = createContext();

export const TransitionProvider = ({ children }) => {
  const [transitioning, setTransitioning] = useState(false);

  const triggerTransition = async (navigateCallback) => {
    setTransitioning(true);
    // Let overlay animate in first
    await new Promise((res) => setTimeout(res, 300)); // adjust to match your overlay in duration

    navigateCallback();
    // Let overlay animate out after navigation
    await new Promise((res) => setTimeout(res, 1000)); // match your out duration

    setTransitioning(false);
  };

  return (
    <TransitionContext.Provider value={{ transitioning, triggerTransition }}>
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransitionContext = () => useContext(TransitionContext);
