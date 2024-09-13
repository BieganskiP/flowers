import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { FaHome, FaHeart, FaPalette, FaLeaf } from "react-icons/fa";

const OfferPage: React.FC = () => {
  return (
    <>
      <Header />
      <main className="max-w-[1280px] mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold mb-12 text-center">Nasza Oferta</h1>

        <section className="mb-16 bg-highlight shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 relative h-64 md:h-auto">
              <Image
                src="https://images.pexels.com/photos/3117159/pexels-photo-3117159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Kwiaty okazyjne"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="w-full md:w-1/2 p-8">
              <h2 className="text-3xl font-semibold mb-6 flex items-center">
                <FaLeaf className="mr-3 text-accent" /> Okazyjne
              </h2>
              <p className="mb-6 text-lg">
                Nasze kwiaty okazyjne to perfekcyjny wybór na wszystkie
                specjalne wydarzenia i momenty w Twoim życiu. Każdy bukiet jest
                starannie komponowany, aby podkreślić wyjątkowość chwili.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Ślubne - romantyczne i eleganckie",
                  "Urodzinowe - radosne i kolorowe",
                  "Imieninowe - personalizowane",
                  "Na rocznicę - pełne uczuć",
                  "Kondolencyjne - pełne szacunku",
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <FaLeaf className="text-accent mr-3" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-highlight shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row-reverse">
            <div className="w-full md:w-1/2 relative h-64 md:h-auto">
              <Image
                src="https://images.pexels.com/photos/2831040/pexels-photo-2831040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Kwiaty na co dzień"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="w-full md:w-1/2 p-8">
              <h2 className="text-3xl font-semibold mb-6 flex items-center">
                <FaHome className="mr-3 text-accent" /> Na co dzień
              </h2>
              <p className="mb-6 text-lg">
                Nasze kwiaty na co dzień wnoszą świeżość i naturalne piękno do
                Twojej codzienności. Niezależnie od pory roku, mamy idealne
                rozwiązania do każdego wnętrza.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Do domu - przytulne i nastrojowe",
                  "Do biura - inspirujące i eleganckie",
                  "Na balkon - odporne i kolorowe",
                  "Sezonowe kwiaty - zawsze świeże",
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <FaLeaf className="text-accent mr-3" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-highlight shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 relative h-64 md:h-auto">
              <Image
                src="https://images.pexels.com/photos/931179/pexels-photo-931179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Kwiaty dla bliskich"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="w-full md:w-1/2 p-8">
              <h2 className="text-3xl font-semibold mb-6 flex items-center">
                <FaHeart className="mr-3 text-accent" /> Dla bliskich
              </h2>
              <p className="mb-6 text-lg">
                Wyraź swoje uczucia poprzez kwiaty. Nasze bukiety dla bliskich
                są tworzone z myślą o wyrażeniu miłości, wdzięczności i troski.
                Każda kompozycja jest wyjątkowa, jak relacja z bliską osobą.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Dla mamy - pełne miłości",
                  "Dla taty - mocne i wyraziste",
                  "Dla ukochanej osoby - romantyczne",
                  "Dla przyjaciela - radosne i energiczne",
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <FaLeaf className="text-accent mr-3" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 bg-highlight shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row-reverse">
            <div className="w-full md:w-1/2 relative h-64 md:h-auto">
              <Image
                src="https://images.pexels.com/photos/931176/pexels-photo-931176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Artystyczne kompozycje kwiatowe"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="w-full md:w-1/2 p-8">
              <h2 className="text-3xl font-semibold mb-6 flex items-center">
                <FaPalette className="mr-3 text-accent" /> Artystyczne
              </h2>
              <p className="mb-6 text-lg">
                Nasze artystyczne kompozycje to prawdziwe dzieła sztuki
                florystycznej. Łączymy niekonwencjonalne formy, rzadkie gatunki
                kwiatów i innowacyjne techniki, tworząc unikalne aranżacje,
                które zachwycą nawet najbardziej wymagających koneserów.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Kompozycje designerskie - awangardowe",
                  "Bukiety luksusowe - ekskluzywne",
                  "Florystyczne dzieła sztuki - niepowtarzalne",
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <FaLeaf className="text-accent mr-3" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <ScrollToTopButton />
    </>
  );
};

export default OfferPage;
