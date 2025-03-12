interface CardProps {
    title: string;
    image: string;
    description: string;
}

const InspireCard = ({ title, image, description }: CardProps) => {
    return (
      <div className="flex flex-col items-center justify-center p-6 rounded-lg bg-gradient-to-b from-black/50 to-black/80 shadow-lg text-white w-72 h-64   text-center">
        <div className="bg-blue-800 p-4 rounded-full">
          <img src={image} alt={`${title} Icon`} className="h-16 w-16" />
        </div>
        <h2 className="mt-4 text-xl font-bold">{title}</h2>
        <p className="mt-2 text-sm">{description}</p>
      </div>
    );
  };
  

const InspireGrid = () => {
  const cards = [
    {
      title: "Ideate",
      image: "/homepageicons/Inspire.png", // Replace with actual image URL
      description: "Turning dreams and concepts into actionable plans",
    },
    {
      title: "Create",
      image: "/homepageicons/Create.png", // Replace with actual image URL
      description: "Building tools and solutions to shape the future",
    },
    {
      title: "Elevate",
      image: "/homepageicons/Achieve.png", // Replace with acTurningtual image URL
      description: "Scaling innovations to market ready products",
    },
  ];

  return (
    <div className="lg:absolute md:py-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
      {cards.map((card, index) => (
        <InspireCard
          key={index}
          title={card.title}
          image={card.image}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default InspireGrid;



