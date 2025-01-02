import ResponsiveCarouselPage from "./pages/Carousel";
import DropdownPage from "./pages/Dropdown";
import CarouselFlexPage from "@/app/pages/CarouselFlex";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <CarouselFlexPage />
    </main>
  );
}
