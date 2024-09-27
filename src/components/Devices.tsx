import Container from "./ui/Container";
import DevicesHeading from "./ui/DevicesHeading";
import DevicesCon from "./ui/DevicesCon";
import BrandsCon from "./ui/BrandsCon";

const Devices = () => {
  return (
    <Container>
      <DevicesHeading />
      <DevicesCon />

      <div className="mt-16 text-center">
        <p className="text-3xl font-medium leading-[1.1] tracking-wide md:text-4xl">
          See it on your smart TV <br />
          or streaming device.
        </p>
        <p className="mt-3 cursor-pointer text-blue-500">
          <span className="transition hover:underline">Set up your device</span>{" "}
          &gt;
        </p>
      </div>

      <BrandsCon />
    </Container>
  );
};

export default Devices;
