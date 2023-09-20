import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="navContainer">
        <Link href="/">
          <Image src="/Nomad.png" width={100} height={40} />
        </Link>
        <Link href="/connect">
          <div className="navBubble">
            <h1>Connect</h1>
          </div>
        </Link>
      </div>
    </>
  );
}
