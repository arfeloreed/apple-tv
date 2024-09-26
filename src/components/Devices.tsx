import Container from "./ui/Container";
import appleTV from "../assets/images/apple-tv-icon.png";

const Devices = () => {
  return (
    <Container>
      <div className="pb-14 pt-32 text-center">
        <figure
          style={{
            width: "76px",
            height: "76px",
            backgroundImage: `url(${appleTV})`,
            backgroundSize: "76px 76px",
            backgroundRepeat: "no-repeat",
            margin: "0 auto 17px",
          }}
        />
        <h2 className="text-5xl font-bold leading-[1.0556] tracking-[-0.012em] text-textDark">
          Watch Apple TV+ anywhere <br /> on the Apple TV app.
        </h2>
        <p className="mb-[18px] mt-5 text-base leading-normal tracking-[-0.022em] text-textDark">
          Find the Apple TV app on your favorite Apple devices.
          <br /> Or watch Apple TV+ online at{" "}
          <span className="cursor-pointer text-blue-600 transition hover:underline">
            tv.apple.com
          </span>
          .
        </p>
      </div>
    </Container>
  );
};

export default Devices;
