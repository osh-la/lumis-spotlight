import Hero from "../components/homeComponents/Hero";
import About from "../components/homeComponents/About";
import Categories from "../components/homeComponents/categories";
import History from "../components/homeComponents/history";
import LookoutSection from "../components/homeComponents/lookOut";
import Subscribe from "../components/homeComponents/subscribe";
const Home = () => {
  return (
    <section className="">
      <Hero />
      <About />
      <Categories />
      <History />
      <LookoutSection/>
      <Subscribe />
    </section>
  );
};

export default Home;
