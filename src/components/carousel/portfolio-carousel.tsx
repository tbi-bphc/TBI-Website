"use client";
import Image from "astro/components/Image.astro";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import React from 'react';

interface ImageProps {
    src: string;
    alt: string;
}

const OptimizedImage = ({ src, alt}: ImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      srcSet={`
        ${src}?w=320 320w,
        ${src}?w=480 480w,
        ${src}?w=800 800w
      `}
      sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, 800px"
      className="h-full w-full object-cover"
    />
  );
};

export function AppleCardsCarouselDemo() {
  return (
    <div className="w-full h-full py-4">
      <Carousel items={data} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <img
              src="/path/to/your/image.jpg"
              alt="Description of the image"
              loading="lazy"
              srcSet={`
                /path/to/your/image.jpg?w=320 320w,
                /path/to/your/image.jpg?w=480 480w,
                /path/to/your/image.jpg?w=800 800w
              `}
              sizes="(max-width: 320px) 280px, (max-width: 480px) 440px, 800px"
              className="h-full w-full object-cover"
            />
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
          </div>
        );
      })}
    </>
  );
};

type Card = {
  src: string;
  title: string;
  category: string;
  link: string;
};

const data: Card[] = [
  {
    src: "path/to/image1.jpg",
    title: "Card 1",
    category: "Category 1",
    link: "https://example.com/1",
  },
  {
    src: "path/to/image2.jpg",
    title: "Card 2",
    category: "Category 2",
    link: "https://example.com/2",
  },
  // Add more cards as needed
];

export default DummyContent;
