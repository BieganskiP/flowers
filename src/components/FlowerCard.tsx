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
        className={`flex ${
          direction === "right" ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div className="w-1/2 relative" style={{ paddingBottom: "50%" }}>
          <Image src={image} alt={text} layout="fill" objectFit="cover" />
        </div>
        <div className="w-1/2 relative" style={{ paddingBottom: "50%" }}>
          <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center">
            <h2>{text}</h2>
            <Link
              href={href}
              className="text-center text-accent border-4 border-accent px-6 py-3 hover:bg-accent hover:text-background transition-colors duration-300"
            >
              Zobacz więcej
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowerCard;
