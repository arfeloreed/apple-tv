import Button from "./ui/Button";
import Container from "./ui/Container";
import appleLogo from "../assets/images/apple.svg";

const Header = () => {
  return (
    <>
      <header className="relative z-20 bg-darkContrast text-white">
        <Container className="flex min-h-[--header-row-height] items-center">
          <a
            href="/"
            className="-ml-6 flex h-[--header-row-height] items-center px-6"
          >
            <img src={appleLogo} alt="apple logo" width={22} height={19} />{" "}
            <span className="sr-only">Back to homepage</span>
          </a>
        </Container>
      </header>

      <div className="sticky top-0 z-20 bg-darkContrast text-white">
        <Container className="flex min-h-[--header-row-height] items-center justify-between">
          <p className="text-xl font-semibold">Apple TV+</p>
          <Button size="small">Stream now</Button>
        </Container>
      </div>
    </>
  );
};

export default Header;
