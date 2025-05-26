"use client";
import { cn } from "@/lib/utils";

interface CardProps {
  title: string;
  description: string;
  link: string;
}

function Card({ title, description, link }: CardProps) {
  return (
    <div className="max-w-xs w-full group/card ">
      <div
        className={cn(
          "overflow-hidden relative card h-80 rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.15)] max-w-sm mx-auto flex flex-col justify-between p-4 bg-white",
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300"></div>
        <div className="text content mt-4">
          <h1 className="font-bold text-lg md:text-2xl  relative z-10 h-12">
            {title}
          </h1>
          <p className="font-normal text-md relative z-10 my-2 h-16">
            {description}
          </p>
          <hr className="h-1 mt-8 border-0 bg-nord" />
          <hr className="h-1 mt-8 border-0 bg-nord" />
          <div className="flex items-center mt-10">
            <a href={link}  target="_blank" className="text-white relative z-10">
              <button className="bg-nord10 rounded-xl p-2 hover:bg-nord8">
                <p>Learn More</p>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CardGrid() {
  const cards = [
    {
      link: "https://www.bits-pilani.ac.in/hyderabad/",
      title: "Host Institute",
      description:
        "Birla Institute of Technology and Science, Pilani - Hyderabad campus is one of the premier technical and science institutes of higher learning in India.",
    },
    {
      link: "/incubatees",
      title: "Startups",
      description:
        "TBI has supported more than 70 startups and 30+ student pre-startups since its inception. Currently, TBI houses 21 startups along with 12 student innovation ideas.",
    },
    {
      link: "/stakeholders",
      title: "Mentors",
      description:
        "TBIS offers mentorship from ideation to commercialization providing assistance in fund-raising from crafting pitch-decks to facilitating connections with venture capitalists.",
    },
    {
      link: "https://dst.gov.in/",
      title: "Government",
      description:
        "TBIS was initially established  in the year 2012 with the support of National Science and Technology Entrepreneurship Development Board (NSTEDB), DST, Govt. of India.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}
