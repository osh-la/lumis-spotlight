// Categories.jsx
import { Link } from "react-router-dom";
import { useSectionRefs } from "../../context/sectionRefs";

const categories = [
  { id: 1, title: "WEDDINGS", slug: "Weddings", img2: "/wedding2.mp4" },
  { id: 2, title: "COPERATE EVENTS", slug: "events", img2: "/event.mp4" },
  { id: 3, title: "LIFESTYLE", slug: "lifestyle", img2: "/faith.mp4" },
  {
    id: 4,
    title: "BIRTHDAYS & BABY SHOWERS",
    slug: "baby shower",
    img2: "/babyshower.mp4",
  },
   {
    id: 5,
    title: "LARGE SCALE EVENTS",
    slug: "Large scale events",
    img2: "/largescale1.mp4",
  },{
 
    id: 6,
    title: "BRAND STORYTELLING",
    slug: "brandstory",
    img2: "/brandstorytelling1.mp4",
  },
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
            <div className="relative w-full h-100 md:w-[28rem] md:h-[28rem] overflow-hidden md:rounded-3xl">
              {cat.img2.endsWith(".mp4") ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover scale-110"
                >
                  <source src={cat.img2} type="video/mp4" />
                </video>
              ) : (
                <div
                  className="absolute inset-0 scale-110 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${cat.img2})`,
                  }}
                />
              )}
            </div>

            <div className="text-left text-zinc-900 md:max-w-md">
              <h1 className="text-3xl md:text-7xl font-bold mb-4">
                {cat.title}
              </h1>
              <Link
                to={`/gallery/${cat.slug}`}
                className="
    w-[280px]
    h-14
    border-2 border-zinc-900
    rounded-full
    flex items-center justify-between
    px-6
    text-sm
    font-medium
  "
              >
                {cat.title}

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
