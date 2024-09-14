import React from "react";
import Image from "next/image";
import Link from "next/link";

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
            <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6 text-center">
              <h2 className="text-xl font-semibold mb-4">{text}</h2>
              <Link
                href={href}
                className="inline-block text-accent border-2 border-accent px-4 py-2 rounded hover:bg-accent hover:text-background transition-colors duration-300"
              >
                Zobacz więcej
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden md:block w-full md:w-1/2 relative aspect-square md:aspect-auto md:pb-[50%]">
          <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center p-4 md:p-0">
            <div className="md:bg-transparent md:backdrop-filter-none md:p-0">
              <h2 className="text-xl font-semibold mb-4 md:mb-0">{text}</h2>
              <Link
                href={href}
                className="inline-block text-accent border-2 md:border-4 border-accent px-4 py-2 md:px-6 md:py-3 rounded md:rounded-none hover:bg-accent hover:text-background transition-colors duration-300"
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
