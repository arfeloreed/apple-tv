import Header from "./components/Header";
import Hero from "./components/Hero";
import Desc from "./components/Desc";
import Carousel from "./components/Carousel";
import Subscription from "./components/Subscription";
import Devices from "./components/Devices";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="relative z-10 bg-dark">
          <Hero />
          <Desc />
          <Subscription />
        </div>
        <Carousel />

        <section className="h-[300vh]">
          <Devices />
        </section>
      </main>
    </>
  );
};

export default App;
