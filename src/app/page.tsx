import Image from "next/image";
import { Button } from "@/components/ui/button";

// image
import HeroImage from "@/../public/images/hero-background.png";
import Gf_1 from "@/../public/images/gf-1.png";
import Gf_2 from "@/../public/images/gf-2.png";
import Gf_3 from "@/../public/images/gf-3.jpeg";
import Gf_4 from "@/../public/images/gf-4.png";

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
            <Button variant={"pink"}>Register</Button>
            <Button variant={"outlinePink"}>Login</Button>
          </div>
        </header>
        <div className="container mx-auto relative z-20 flex flex-col gap-8 items-center justify-center px-4 md:px-0 text-center h-full">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold text-white relative z-20">
              Meet Your{" "}
              <span className="text-white bg-pink px-4 py-2 rounded-xl">
                Lovely
              </span>{" "}
              Partner
            </h1>
            <h2 className="text-3xl font-bold text-white relative z-20">
              Find your best partner here!
            </h2>
          </div>
          <Button
            className="w-[200px] h-[50px] text-xl font-bold"
            variant={"pink"}
          >
            FIND NOW!
          </Button>
        </div>
      </section>
      <section className="h-full w-screen bg-pink text-white grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 py-10">
        <div className="flex justify-center items-center gap-4">
          <div className="bg-white rounded-full w-4 h-4"></div>
          <h2 className="text-3xl font-bold text-white relative z-20">
            Dapet Eimi Fukada
          </h2>
        </div>
        <div className="flex justify-center items-center gap-4">
          <div className="bg-white rounded-full w-4 h-4"></div>
          <h2 className="text-3xl font-bold text-white relative z-20">
            Dapet Eimi Fukada
          </h2>
        </div>
        <div className="flex justify-center items-center gap-4">
          <div className="bg-white rounded-full w-4 h-4"></div>
          <h2 className="text-3xl font-bold text-white relative z-20">
            Dapet Eimi Fukada
          </h2>
        </div>
      </section>
      <section className="h-full w-screen bg-rose-400 text-white flex flex-col md:flex-row justify-evenly text-center relative gap-8 md:gap-0 py-10">
        <h2 className="text-3xl font-bold text-white relative z-20">Cindo</h2>
        <h2 className="text-3xl font-bold text-white relative z-20">Cindo</h2>
        <h2 className="text-3xl font-bold text-white relative z-20">Cindo</h2>
        <h2 className="text-3xl font-bold text-white relative z-20">Cindo</h2>
      </section>
      <section className="h-full w-screen bg-white grid grid-cols-1 md:grid-cols-2 py-10 gap-8 md:gap-0">
        <div className="flex flex-col justify-center items-start gap-4 px-12">
          <h2 className="text-3xl font-bold text-pink relative z-20">
            Dapet Eimi Fukada
          </h2>
          <p className="text-xl text-pink text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum,
            officiis earum quo similique esse animi odit quia id repudiandae,
            quae aliquid quas praesentium amet. Praesentium cumque sint vero
            nihil. Numquam ducimus illo commodi eum ut consequatur dicta
            doloremque sed tempora? Dolorum iusto iure repellat. Eaque fugiat
            minima aperiam voluptate laboriosam.
          </p>
        </div>
        <div className="flex flex-col justify-center items-start gap-4 px-12">
          <h2 className="text-3xl font-bold text-pink relative z-20">
            Dapet Eimi Fukada
          </h2>
          <p className="text-xl text-pink text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum,
            officiis earum quo similique esse animi odit quia id repudiandae,
            quae aliquid quas praesentium amet. Praesentium cumque sint vero
            nihil. Numquam ducimus illo commodi eum ut consequatur dicta
            doloremque sed tempora? Dolorum iusto iure repellat. Eaque fugiat
            minima aperiam voluptate laboriosam.
          </p>
        </div>
      </section>
      <section className="h-full w-screen bg-pink text-white flex flex-col justify-start items-center py-32 gap-12">
        <h2 className="text-3xl font-bold text-white relative z-20">
          Member who Have Found Love
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {[Gf_1, Gf_2, Gf_3, Gf_4].map((image, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-4"
            >
              <Image
                src={image}
                alt={`gf-${index + 2}`}
                className="rounded-full h-40 w-40 object-cover object-center"
              />
              <h3 className="text-3xl font-bold text-white relative z-20">
                Dapet Eimi Fukada
              </h3>
              <p className="text-xl text-white">Clara</p>
            </div>
          ))}
        </div>
      </section>
      <section className="h-full w-screen bg-white text-pink flex flex-col justify-start items-center py-32 gap-12">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl font-bold text-pink relative z-20">
            How to get your Girlfriend
          </h2>
          <p className="text-2xl text-pink">Clara</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-16">
          {[Gf_1, Gf_2, Gf_3].map((image, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-4 relative"
            >
              <div className="h-10 w-10 bg-blue-500 text-white flex justify-center items-center rounded-full absolute -top-4 left-4 text-xl">
                {index + 1}
              </div>
              <Image
                src={image}
                alt={`gf-${index + 2}`}
                className="rounded-full h-40 w-40 object-cover object-center"
              />
              <h3 className="text-3xl font-bold text-pink relative z-20">
                Dapet Eimi Fukada
              </h3>
              <p className="text-xl text-pink">Clara</p>
            </div>
          ))}
        </div>
        <Button variant={"pink"}>Find your Girlfriend</Button>
      </section>

      <section
        className="h-[600px] w-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${HeroImage.src})` }}
      >
        <div className="absolute h-full w-screen z-10 bg-gradient-to-r from-pink to-blue-700 opacity-75"></div>
        <div className="h-full w-screen flex flex-col justify-center items-center gap-8">
          <h2 className="text-4xl font-bold text-white relative z-20">
            Start your love journey now!
          </h2>
          <Button
            className="w-[200px] h-[50px] text-xl font-bold relative z-20"
            variant={"pink"}
          >
            Start Now!
          </Button>
        </div>
      </section>
    </>
  );
}
