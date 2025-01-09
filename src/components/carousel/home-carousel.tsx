interface CardProps {
    title: string;
    image: string;
    description: string;
}

const InspireCard = ({ title, image, description }: CardProps) => {
    return (
      <div className="flex flex-col items-center justify-center p-6 rounded-lg bg-gradient-to-b from-black/50 to-black/80 shadow-lg text-white w-72 h-48 text-center">
        <div className="bg-red-500 p-4 rounded-full">
          <img src={image} alt={`${title} Icon`} className="h-8 w-8" />
        </div>
        <h2 className="mt-4 text-xl font-bold">{title}</h2>
        <p className="mt-2 text-sm">{description}</p>
      </div>
    );
  };
  

const InspireGrid = () => {
  const cards = [
    {
      title: "Inspire",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/38/Robot-clip-art-book-covers-feJCV3-clipart.png", // Replace with actual image URL
      description: "Inspiring innovation and bold ideas that turn dreams into reality",
    },
    {
      title: "Create",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/38/Robot-clip-art-book-covers-feJCV3-clipart.png", // Replace with actual image URL
      description: "Building tools and solutions to shape the future",
    },
    {
      title: "Achieve",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/38/Robot-clip-art-book-covers-feJCV3-clipart.png", // Replace with actual image URL
      description: "Turning ambitions into actionable results for success",
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



