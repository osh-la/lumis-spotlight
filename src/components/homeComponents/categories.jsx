// Categories.jsx
import { Link } from "react-router-dom";
import { useSectionRefs }  from "../../context/sectionRefs";


const categories = [
  { id: 1, title: "WEDDINGS", slug: "Weddings", img2: "/wedding2.mp4" },
  { id: 2, title: "COOPERATE EVENTS", slug: "events", img2: "/event.mp4" },
  { id: 3, title: "OCCASIONS", slug: "occasion", img2: "/faith.mp4" },
  { id: 4, title: "BABY SHOWERS", slug: "baby shower", img2: "/babyshower.mp4" },
  { id: 5, title: "BIRTHDAYS ", slug: "birthdays", img2: "/birthday.mp4" },
  { id: 6, title: "LOCATION COVERAGE", slug: "location", img2: "/location.mp4" },
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
            <div className="relative w-72 h-72 md:w-[28rem] md:h-[28rem] overflow-hidden rounded-3xl">
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

            <div className="text-center md:text-left text-zinc-900 max-w-md">
              <h1 className="text-3xl md:text-7xl font-bold mb-4">{cat.title}</h1>
              <Link
                to={`/gallery/${cat.slug}`}
                className="border-2 border-zinc-900 py-2 px-4 rounded-full
                           text-sm md:text-base flex items-center justify-between gap-2"
              >{cat.title}
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
