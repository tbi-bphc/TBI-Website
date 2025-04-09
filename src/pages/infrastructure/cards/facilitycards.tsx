"use client";

type CardProps = {
  icon: React.ReactNode; // Pass an icon component
  title: string;
  description: string;
  link: string;
  buttonText: string;
};

function Card({ icon, title, description, buttonText, link }: CardProps) {
  return (
    <div className="flex flex-col items-center text-center bg-white rounded-lg shadow-md p-6 space-y-4">
      <div className="text-nord2 text-4xl">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 h-36 text-left">{description}</p>
      <a href={link}  target="_blank">
      <button className="px-4 py-2 bg-nord10 text-white rounded-lg font-medium hover:bg-nord2 transition">
        {buttonText}
      </button>
      </a>
    </div>
  );
}

export default function FacilityCardGrid() {
  const cards = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M9 16h6m2 5H7a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2z" /></svg>,
        // use img tag for editing here, that's fine
      title: " Clean Room ",
      description:
        "BITS Pilani Hyderabad campus established state of the art facilities for Micro and Nano semiconductor device fabrication and characterization. The size of clean room is 581 sq. ft and 80% of it is maintained as (ISO 6) class 1000 and the rest is class 100 (ISO 5). It is a complete class 100 area covered with yellow light and dedicated for Lithography process.",
      buttonText: "Explore",
      link: "https://www.bits-pilani.ac.in/hyderabad/clean-room-micro-and-nano-fabrication-facility/",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A2 2 0 013 15.382V8.618a2 2 0 011.553-1.894L9 4m6 16l5.447-2.724A2 2 0 0021 15.382V8.618a2 2 0 00-1.553-1.894L15 4M8 12h.01M16 12h.01M12 12h.01M12 12h0" /></svg>,
      title: "Central Animal Facility",
      description: "The Central Animal Facility at BITS Pilani, Hyderabad Campus is a CCSEA (Committee for Control and Supervision of Experiments on Animals) approved facility. It is used for conducting advanced research in the areas of ocular studies, pre-clinical pharmacokinetics, bioavailability studies and pharmacological screening of various drugs.",
      buttonText: "Explore",
      link: "https://www.bits-pilani.ac.in/hyderabad/central-animal-facility/",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-1.104-.9-2-2-2H7c-1.1 0-2 .896-2 2m6 0c0 1.104-.9 2-2 2m0 0c-1.104 0-2 .896-2 2m2-4c1.104 0 2 .896 2 2m2-4c1.104 0 2 .896 2 2m0 0c0-1.104.896-2 2-2m-2 4c-1.104 0-2-.896-2-2m0 0c1.104 0 2-.896 2-2m0 4c1.104 0 2-.896 2-2m-2 4c1.104 0 2-.896 2-2m-2 4h2m0 0h-2m0 0h2" /></svg>,
      title: "Central Analytical Laboratory",
      description:
        "The Central Analytical Laboratory (CAL) at BITS Pilani, Hyderabad Campus is well equipped with a number of sophisticated analytical instruments for the regular course works and research related activities. It facilitates training students as well as carrying out research work at all levels.",
      buttonText: "Explore",
      link: "https://www.bits-pilani.ac.in/hyderabad/central-analytical-laboratory//",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-1.104-.9-2-2-2H7c-1.1 0-2 .896-2 2m6 0c0 1.104-.9 2-2 2m0 0c-1.104 0-2 .896-2 2m2-4c1.104 0 2 .896 2 2m2-4c1.104 0 2 .896 2 2m0 0c0-1.104.896-2 2-2m-2 4c-1.104 0-2-.896-2-2m0 0c1.104 0 2-.896 2-2m0 4c1.104 0 2-.896 2-2m-2 4c1.104 0 2-.896 2-2m-2 4h2m0 0h-2m0 0h2" /></svg>,
      title: "Sharanga",
      description:"Sharanga is the high performance computing cluster at the BITS Pilani - Hyderabad Campus. It provides computational resources to cater the needs of faculty and research students in several areas of engineering and science. It is a heterogeneous system consisting of AMD EPYC processors and NVIDIA's Data Center GPUs supporting CPU and GPU parallel computations.",
      buttonText: "Explore",
      link: "https://sharanga.hpc.bits-hyderabad.ac.in/",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5 max-w-6xl mx-auto py-10">
      {cards.map((card, index) => (
        <Card
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
          buttonText={card.buttonText}
          link={card.link}
        />
      ))}
    </div>
  );
}
