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
                    "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4",
                    "bg-gradient-to-br from-nord1 to-nord10"
                )}
            >
                <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-50"></div>
                <div className="text content mt-8">
                    <h1 className="font-bold text-2xl md:text-2xl text-gray-50 relative z-10 h-12">{title}</h1>
                    <p className="font-normal text-lg text-gray-50 relative z-10 my-4 h-32">{description}</p>
                    <a href={link} className="text-gray-50 relative z-10">
                        <p className="text-gray-50 ">
                            Learn More {"->"}
                        </p>
                    </a>
                    
                </div>
            </div>
        </div>
    );
}

export function CardGrid() {
    const cards = [
        {
            link:
                "/incubatees",
            title: "Academia",
            description:
                "We help nurture an innovative mindset within academic institutions.",
        },
        {
            link:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAHAe0g1f5ng-92MI1s6prc0NW9ZnRPDlHuQ&s",
            title: "Startups",
            description:
                "We create launchpads for disruptive ventures and game-changing ideas.",
        },
        {
            link:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAHAe0g1f5ng-92MI1s6prc0NW9ZnRPDlHuQ&s",
            title: "Corporates",
            description: "We propel growth by establishing connections with corporates and cultivating international partnerships.",
        },
        {
            link:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAHAe0g1f5ng-92MI1s6prc0NW9ZnRPDlHuQ&s",
            title: "Government",
            description: "We support public-sector transformation through pioneering solutions and collaborations.",
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
