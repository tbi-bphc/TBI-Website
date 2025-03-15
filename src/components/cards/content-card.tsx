"use client";
import { cn } from "@/lib/utils";

interface CardProps {
  title: string;
  description: string;
  link: string;
}

function Card({ title, description, link }: CardProps) {
  return (
    <div className="max-w-xs w-full group/card">
      <div
        className={cn(
          "overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4",
          "bg-gradient-to-br from-nord1 to-nord10"
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-50"></div>
        <div className="text content mt-4">
          <h1 className="font-bold text-2xl md:text-2xl text-gray-50 relative z-10 h-12">
            {title}
          </h1>
          <p className="font-normal text-lg text-gray-50 relative z-10 my-2 h-32">
            {description}
          </p>
          <hr className="h-1 mt-8 border-0 bg-nord" />
          <hr className="h-1 mt-8 border-0 bg-nord" />
          <div className="flex items-center justify-center mt-10">
            <a href={link} className="text-white relative z-10">
              <button className="bg-nord9 rounded-xl p-2 hover:bg-nord8">
                <p className="text-gray-50 ">Learn More</p>
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
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAHAe0g1f5ng-92MI1s6prc0NW9ZnRPDlHuQ&s",
      title: "Mentors",
      description:
        "TBIS offers mentorship from ideation to commercialization providing assistance in fund-raising from crafting pitch-decks to facilitating connections with venture capitalists.",
    },
    {
      link: "https://www.indiascienceandtechnology.gov.in/",
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
