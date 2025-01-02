import CarouselFlex from "@/components/ui/CarouselFlex";
import React from "react";

const Home: React.FC = () => {
  const images: string[] = [
    "/black-nike-shoe.png",
    "/red-nike-shoe.png",
    "/rev-lite-shoe.png",
    "/ryan-plomp-76w_eDO1u1E-unsplash.jpg",
    "/paul-gaudriault-a-QH9MAAVNI-unsplash.jpg",
    "/ryan-plomp-PGTO_A0eLt4-unsplash.jpg",
    "/usama-akram-g3CMh2nqj_w-unsplash.jpg",
    "/usama-akram-kP6knT7tjn4-unsplash.jpg",
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        Responsive Carousel
      </h1>
      <CarouselFlex images={images} />
    </div>
  );
};

export default Home;
