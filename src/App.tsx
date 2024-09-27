import Header from "./components/Header";
import Hero from "./components/Hero";
import Desc from "./components/Desc";
import Carousel from "./components/Carousel";
import Subscription from "./components/Subscription";
import Devices from "./components/Devices";
import Footer from "./components/Footer";

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

        <section className="relative">
          <Devices />
          <Footer />
        </section>
      </main>
    </>
  );
};

export default App;
