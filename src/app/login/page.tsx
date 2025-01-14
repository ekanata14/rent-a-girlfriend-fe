import React from "react";
import { Button } from "@/components/ui/button";
import { LoginForm } from "@/components/LoginForm";

// image
import HeroImage from "@/../public/images/hero-background.png";
import MsBreew from "@/../public/images/msbreew.jpg";

function Login() {
  return (
    <section
      className="h-screen w-screen bg-fill bg-center"
      style={{ backgroundImage: `url(${MsBreew.src})` }}
    >
      <div className="absolute h-screen w-screen z-10 bg-gradient-to-r from-pink to-blue-700 opacity-75"></div>
      <header className="relative z-20 container flex justify-center items-center mx-auto h-[100px] px-4 md:px-0">
        <h2 className="text-2xl font-bold text-white relative z-20">
          Rent a Girlfriend
        </h2>
      </header>
      <div className="container mx-auto relative z-20 flex flex-col gap-8 items-center justify-center px-4 md:px-0 text-center h-full">
        <LoginForm />
      </div>
    </section>
  );
}

export default Login;
