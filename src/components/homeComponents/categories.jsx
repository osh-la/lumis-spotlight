// Categories.jsx
import { Link } from "react-router-dom";
import { useSectionRefs }  from "../../context/sectionRefs";


const categories = [
  { id: 1, title: "HOMES", slug: "homes", img2: "/images/sane.jpeg" },
  { id: 2, title: "OFFICES", slug: "offices", img2: "/images/office.jpg" },
  { id: 3, title: "LOUNGES", slug: "lounges", img2: "/images/image5.jpg" },
  { id: 4, title: "SPA'S ", slug: "spa's", img2: "/images/spa.jpg" },
  { id: 5, title: "EVENT", slug: "events", img2: "/images/event.jpg" },
];

export default function Categories() {
  const { categoriesContainer } = useSectionRefs();

  return (
    <section
      ref={categoriesContainer}
      className="relative w-full h-screen overflow-hidden bg-red-50"
    >
      <div className="flex w-max h-full">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="category-slide w-screen h-full flex flex-col md:flex-row
                       items-center justify-center p-6 gap-8 md:gap-16 shrink-0"
          >
            <div className="relative w-72 h-72 md:w-100 md:h-100 overflow-hidden">
              <div
                className="glide-bg absolute inset-0 scale-[1.25] pointer-events-none"
                style={{
                  backgroundImage: `url(${cat.img2})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              />
            </div>

            <div className="text-center md:text-left text-zinc-900 max-w-md">
              <h1 className="text-3xl md:text-7xl font-bold mb-4">{cat.title}</h1>
              <Link
                to={`/shop/${cat.slug}`}
                className="border-2 border-zinc-900 py-2 px-4 rounded-full
                           text-sm md:text-base flex items-center gap-2"
              >
                SHOP PIECES FOR {cat.title}
                <div className="rounded-full bg-white p-2">
                  <img className="w-5 h-5" src="/images/right.png" alt="" />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
