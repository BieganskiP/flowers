import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Flower1Svg } from "@/assets/flower";

interface FlowerCardProps {
  image: string;
  text: string;
  href: string;
  direction: "left" | "right";
}

const FlowerCard: React.FC<FlowerCardProps> = ({
  image,
  text,
  href,
  direction,
}) => {
  return (
    <div className="w-full">
      <div
        className={`flex flex-col md:flex-row ${
          direction === "right" ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="w-full md:w-1/2 relative aspect-square md:aspect-auto md:pb-[50%]">
          <Image src={image} alt={text} layout="fill" objectFit="cover" />
          <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center p-4 md:hidden">
            <div className="bg-background/20  backdrop-filter backdrop-blur-md w-[90%] rounded-lg p-8 text-center ">
              <h2 className="text-2xl font-bold mb-4">{text}</h2>
              <Link
                href={href}
                className="inline-block text-background font-semibold text-lg border-2 border-background px-4 py-2 rounded hover:bg-accent hover:text-background transition-colors duration-300"
              >
                Zobacz więcej
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden md:block w-full md:w-1/2 relative aspect-square md:aspect-auto md:pb-[50%]">
          <Flower1Svg
            className={`fill-accent absolute  opacity-30 w-full h-full bottom-[-10%] z-[-1] ${
              direction === "right"
                ? "right-[-50%]"
                : "left-[-50%] scale-x-[-1]"
            }`}
          />
          <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center p-4 md:p-0">
            <div className="md:bg-transparent md:backdrop-filter-none md:p-0 flex flex-col gap-4 items-center justify-center relative">
              <h2 className="text-3xl font-bold mb-4 md:mb-0">{text}</h2>
              <Link
                href={href}
                className="inline-block text-primary text-xl font-semibold border-2 md:border-4 border-secondary px-4 py-2 md:px-6 md:py-3 rounded md:rounded-none hover:bg-accent hover:text-background transition-colors duration-300"
              >
                Zobacz więcej
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowerCard;
