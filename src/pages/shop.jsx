import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../context/productprovider";
import { useCart } from "../context/cartProvider";
import toast from "react-hot-toast";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ShopPage() {
  const { addToCart } = useCart();
  const { products } = useProducts();
  const { categorySlug } = useParams();

  const categories = ["All", "HOMES", "OFFICES", "LOUNGES", "SPA'S", "EVENTS"];
  const [filter, setFilter] = useState("All");

  const containerRef = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    if (categorySlug) {
      const matched = categories.find(
        (c) => c.toLowerCase() === categorySlug.toLowerCase()
      );
      setFilter(matched || "All");
    }
  }, [categorySlug]);

  const filtered =
    filter === "All"
      ? products
      : products.filter(
          (p) => p.category.toLowerCase() === filter.toLowerCase()
        );

  useEffect(() => {
    const ctx = gsap.context(() => {
      imageRefs.current.forEach((img, i) => {
        if (!img) return;
        gsap.fromTo(
          img,
          { yPercent: -20 },
          {
            yPercent: 20,
            ease: "none",
            scrollTrigger: {
              trigger: img,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              id: `image-${i}`,
            },
          }
        );
      });
    }, containerRef);

    return () => {
       try {
    ctx.revert(); // only if ctx is defined and valid
  } catch (err) {
    console.warn("GSAP revert error:", err.message);
  }
};
      // ctx.revert();
  }, [filtered]);

  return (
    <div ref={containerRef} className="px-4 py-12 space-y-8 bg-red-50">
      <h1 className="text-4xl font-bold">All Products</h1>

      <div className="flex flex-wrap gap-4">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded ${
              filter === cat ? "bg-stone-800 text-white" : "bg-stone-100"
            }`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {filtered.map((p, i) => (
          <div key={i} className="relative shadow rounded overflow-hidden">
            <div className="overflow-hidden">
              <img
                ref={(el) => (imageRefs.current[i] = el)}
                src={p.image}
                alt={p.name}
                className="w-full h-100 object-cover"
              />

              <div className="absolute bottom-0 left-0 p-4 bg-white/40 text-black space-y-2 rounded-md">
                <h2 className="font-semibold">{p.name}</h2>
                <p className="text-lg font-bold">${p.price}</p>
                <button
                  onClick={() => {
                    addToCart(p);
                    toast.success(`${p.name} added to cart`);
                  }}
                  className="mt-2 bg-stone-800 text-white p-2 rounded"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
