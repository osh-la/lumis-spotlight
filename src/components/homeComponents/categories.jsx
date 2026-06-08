import { Link } from "react-router-dom";
import { useSectionRefs } from "../../context/sectionRefs";

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
            className="
              category-slide
              w-screen
              h-full
              flex
              flex-col
              md:flex-row
              items-center
              justify-center
              shrink-0
            "
          >
            {/* MOBILE VIDEO */}
            <div className="relative w-full h-[55vh] md:hidden overflow-hidden">
              {cat.img2.endsWith(".mp4") ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src={cat.img2} type="video/mp4" />
                </video>
              ) : (
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${cat.img2})`,
                  }}
                />
              )}
            </div>

            {/* DESKTOP VIDEO (UNCHANGED) */}
            <div className="hidden md:block relative w-72 h-72 md:w-[28rem] md:h-[28rem] overflow-hidden rounded-3xl">
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

            {/* TEXT */}
            <div
              className="
                w-full
                h-[45vh]
                md:h-auto
                flex
                flex-col
                items-center
                md:items-start
                justify-center
                text-center
                md:text-left
                px-6
                md:px-0
                text-zinc-900
                max-w-md
              "
            >
              <h1 className="text-4xl md:text-7xl font-bold mb-4">
                {cat.title}
              </h1>

              <Link
                to={`/gallery/${cat.slug}`}
                className="
                  border-2
                  border-zinc-900
                  py-3
                  px-5
                  rounded-full
                  text-sm
                  md:text-base
                  flex
                  items-center
                  justify-between
                  gap-2
                "
              >
                {cat.title}

                <div className="rounded-full bg-white p-2">
                  <img
                    className="w-5 h-5"
                    src="/images/right.png"
                    alt=""
                  />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}