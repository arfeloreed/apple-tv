import Header from "./components/Header";
import Hero from "./components/Hero";
import Desc from "./components/Desc";
import Carousel from "./components/Carousel";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="relative z-10 bg-dark">
          <Hero />
          <Desc />
        </div>
        {/* <div>3 col layout</div> */}
        <Carousel />
        <div className="h-[300vh]" />
      </main>
    </>
  );
};

export default App;
