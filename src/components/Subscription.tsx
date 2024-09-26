import Container from "./ui/Container";
import Button from "./ui/Button";
import FadeIn from "./ui/FadeIn";
import { subcribeTexts } from "../variables/movies";

const Subscription = () => {
  return (
    <Container className="pb-36 text-white">
      <FadeIn className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {subcribeTexts.map((item) => (
          <div key={item.id} className="mt-5 md:mt-0">
            <div className="mb-10">
              <p className="text-2xl font-bold">{item.top}</p>
              <h2 className="my-2 text-4xl font-bold">{item.heading}</h2>
              <p className="text-xl text-gray-400">{item.desc}</p>
            </div>

            <Button className="min-w-56" size="large">
              {item.buttonText}
            </Button>
          </div>
        ))}
      </FadeIn>
    </Container>
  );
};

export default Subscription;
