import { useState } from "react";
import { useTransitionContext } from "../context/transitionContext";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/footer";
import TransitionOverlay from "../components/transitionoverlay";


export default function MainLayout() {
  const { transitioning } = useTransitionContext();

  return (
    <>
      <Nav  />

      {transitioning && <TransitionOverlay />}

      {!transitioning && (
        <>
          <main>
            <Outlet />
          </main>
          <Footer />
        </>
      )}

      
    </>
  );
}
