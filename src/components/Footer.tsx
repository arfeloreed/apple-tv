import Container from "./ui/Container";
import { footerLinks } from "../variables/movies";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <Container>
      <footer className="mb-6 mt-20">
        <div>
          <p className="text-sm font-normal text-textDark">
            More ways to shop:{" "}
            <span className="text-blue-500 underline hover:cursor-pointer">
              Find an Apple Store{" "}
            </span>
            or{" "}
            <span className="text-blue-500 underline hover:cursor-pointer">
              other retailer
            </span>{" "}
            near you.
          </p>

          <p className="text-xs font-normal text-textDark">
            Or call +63995 981 3002
          </p>
        </div>

        <div className="my-5 h-[1px] w-full bg-neutral-300" />

        <div className="flex flex-col justify-between md:flex-row md:items-center">
          <p className="text-gray text-xs font-normal">
            Copright @ {date} Apple Inc. All rights reserved.
          </p>

          <div className="flex max-md:mt-3">
            {footerLinks.map((link, i) => (
              <div key={link} className="flex items-center">
                <p className="text-xs font-normal text-textDark hover:cursor-pointer hover:text-blue-500">
                  {link}{" "}
                </p>
                {i !== footerLinks.length - 1 && (
                  <span className="mx-3"> | </span>
                )}
              </div>
            ))}
          </div>

          <div>
            <p className="text-xs font-normal">Philippines</p>
          </div>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
