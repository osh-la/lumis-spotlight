// src/context/sectionRefs.jsx
import React, { createContext, useContext, useRef } from "react";

const SectionRefsContext = createContext(null);

export const SectionRefsProvider = ({ children }) => {
  // Add refs for every section / element you want animated from a central place
  const refs = {
    // Hero
    hero: useRef(null),
    heroHeader: useRef(null),
    heroText: useRef(null),
    POD: useRef(null),
    videoRef: useRef(null),

    // About
    about: useRef(null),
    aboutImage1: useRef(null),
    aboutHeader: useRef(null),
    aboutImage: useRef(null),

    // Categories (container that holds .category-slide children)
    categoriesContainer: useRef(null),

    // History
    historySection: useRef(null),
    historyBg: useRef(null),

    // Lookout
    lookoutSection: useRef(null),
    lookoutText: useRef(null),
    lookoutImage: useRef(null),
  };

  return (
    <SectionRefsContext.Provider value={refs}>
      {children}
    </SectionRefsContext.Provider>
  );
};

export const useSectionRefs = () => {
  const ctx = useContext(SectionRefsContext);
  if (!ctx) {
    throw new Error("useSectionRefs must be used within SectionRefsProvider");
  }
  return ctx;
};
