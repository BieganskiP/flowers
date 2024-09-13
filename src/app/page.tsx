import ScrollToTopButton from "../components/ScrollToTopButton";
import Header from "../components/Header";
import FlowerCard from "../components/FlowerCard";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow w-full max-w-[1280px] mx-auto text-foreground">
        <div className="flex flex-col w-full">
          <FlowerCard
            image="https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            text="Okazyjne"
            href="/okazyjne"
            direction="right"
          />
          <FlowerCard
            image="https://images.pexels.com/photos/2741479/pexels-photo-2741479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            text="Na co dzień"
            href="/na-co-dzien"
            direction="left"
          />
          <FlowerCard
            image="https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            text="Dla bliskich"
            href="/dla-bliskich"
            direction="right"
          />
          <FlowerCard
            image="https://images.pexels.com/photos/2741479/pexels-photo-2741479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            text="Artystyczne"
            href="/artystyczne"
            direction="left"
          />
        </div>
      </main>
      <footer className="bg-muted text-foreground p-4">
        <div className="max-w-[1280px] mx-auto text-center">
          <p>&copy; 2024 Kwiaciarnia Wiosenna. Wszelkie prawa zastrzeżone.</p>
        </div>
      </footer>
      <ScrollToTopButton />
    </>
  );
}
