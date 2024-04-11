import About from "@/components/About";
import Hero from "@/components/Hero";
import Speakers from "@/components/Speakers";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="">
        <div className="relative"><Hero /></div>
        <div className="relative z-10 -mt-28"><About /></div>
      </div>
      <Speakers />
    </main>
  );
}
