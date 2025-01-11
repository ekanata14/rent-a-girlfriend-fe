import Image from "next/image";
import { Button } from "@/components/ui/button";

// image
import HeroImage from "@/../public/images/hero-background.png";

export default function Home() {
  return (
    <>
      <section
        className="h-screen w-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroImage.src})` }}
      >
        <div className="absolute h-screen w-screen z-10 bg-gradient-to-r from-pink to-blue-700 opacity-75"></div>
        <header className="relative z-20 container flex justify-between items-center mx-auto h-[100px] px-4 md:px-0">
          <h2 className="text-2xl font-bold text-white relative z-20">
            Rent a Girlfriend
          </h2>
          <div className="space-x-4">
            <Button>Register</Button>
            <Button>Login</Button>
          </div>
        </header>
        <div className="container mx-auto relative z-20 flex flex-col gap-8 items-center md:items-start justify-center px-4 md:px-0 text-center md:text-start" style={{ height: 'calc(100vh - 100px)' }}>
          <div className="space-y-4">
          <h1 className="text-6xl font-bold text-white relative z-20">
            Meet Your Lovely Partner
          </h1>
          <h2 className="text-3xl font-bold text-white relative z-20">
            World 1st best dating website with over 1 million user
          </h2>
          </div>
            <Button className="w-[200px] h-[50px]">Signup Now!</Button>
        </div>
      </section>
    </>
  );
}
