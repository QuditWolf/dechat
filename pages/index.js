import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="landingContainer">
        <div className="textContainer">
          <h1 className="text-6xl textTitle">
            Your <span className="text-green-col">Data.</span> Your{" "}
            <span className="text-green-col">Rules.</span>
          </h1>
          <p className="paraTitle text-lg italic">Privacy. Reimagined.</p>
        </div>
        <div className="containerButtons">
          <Link href="#about" className="scroll-smooth">
            <div className="buttonLandingStroke scroll-smooth">Learn more.</div>
          </Link>
          <Link href="/connect">
            <div className="buttonLandingFill">Connect!</div>
          </Link>
        </div>
      </div>
      <div className="aboutContainer" id="about">
        <div className="textAboutContainer">
          <h1 className="textAbout">
            About the <span className="text-green-col">Product</span>
          </h1>
          <p className="paraAbout">
            NOMAD is an open standard for interoperable, decentralised,
            real-time communication over IP using tor-routing to mask IP and
            using blockchain technology to log communications powered by an
            user-friendly and accessible front-end. Our goal is to provide
            privacy to all irrespective of their status, it is open-source and
            free.
          </p>
        </div>
        <Image src="/landing.svg" width={400} height={150} />
      </div>
    </>
  );
}
