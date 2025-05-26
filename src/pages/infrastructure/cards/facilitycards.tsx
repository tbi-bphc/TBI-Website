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
      <p className="text-gray-600 h-36 my-4 text-justify">{description}</p>
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
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-test-tube-diagonal-icon lucide-test-tube-diagonal"><path d="M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3"/><path d="m16 2 6 6"/><path d="M12 16H4"/></svg>,
        // use img tag for editing here, that's fine
      title: " Clean Room ",
      description:
        "BITS Pilani Hyderabad campus established state of the art facilities for Micro and Nano semiconductor device fabrication and characterization. The size of clean room is 581 sq. ft and 80% of it is maintained as (ISO 6) class 1000 and the rest is class 100 (ISO 5). It is a complete class 100 area covered with yellow light and dedicated for Lithography process.",
      buttonText: "Explore",
      link: "https://www.bits-pilani.ac.in/hyderabad/clean-room-micro-and-nano-fabrication-facility/",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-rabbit-icon lucide-rabbit"><path d="M13 16a3 3 0 0 1 2.24 5"/><path d="M18 12h.01"/><path d="M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3"/><path d="M20 8.54V4a2 2 0 1 0-4 0v3"/><path d="M7.612 12.524a3 3 0 1 0-1.6 4.3"/></svg>,
      title: "Central Animal Facility",
      description: "The Central Animal Facility at BITS Pilani, Hyderabad Campus is a CCSEA (Committee for Control and Supervision of Experiments on Animals) approved facility. It is used for conducting advanced research in the areas of ocular studies, pre-clinical pharmacokinetics, bioavailability studies and pharmacological screening of various drugs.",
      buttonText: "Explore",
      link: "https://www.bits-pilani.ac.in/hyderabad/central-animal-facility/",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-drafting-compass-icon lucide-drafting-compass"><path d="m12.99 6.74 1.93 3.44"/><path d="M19.136 12a10 10 0 0 1-14.271 0"/><path d="m21 21-2.16-3.84"/><path d="m3 21 8.02-14.26"/><circle cx="12" cy="5" r="2"/></svg>,
      title: "Central Analytical Laboratory",
      description:
        "The Central Analytical Laboratory (CAL) at BITS Pilani, Hyderabad Campus is well equipped with a number of sophisticated analytical instruments for the regular course works and research related activities. It facilitates training students as well as carrying out research work at all levels.",
      buttonText: "Explore",
      link: "https://www.bits-pilani.ac.in/hyderabad/central-analytical-laboratory//",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-monitor-cog-icon lucide-monitor-cog"><path d="M12 17v4"/><path d="m14.305 7.53.923-.382"/><path d="m15.228 4.852-.923-.383"/><path d="m16.852 3.228-.383-.924"/><path d="m16.852 8.772-.383.923"/><path d="m19.148 3.228.383-.924"/><path d="m19.53 9.696-.382-.924"/><path d="m20.772 4.852.924-.383"/><path d="m20.772 7.148.924.383"/><path d="M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"/><path d="M8 21h8"/><circle cx="18" cy="6" r="3"/></svg>,
      title: "Sharanga",
      description:"Sharanga is the high performance computing cluster at the BITS Pilani - Hyderabad Campus. It provides computational resources to cater the needs of faculty and research students in several areas of engineering and science. It is a heterogeneous system consisting of AMD EPYC processors and NVIDIA's Data Center GPUs supporting CPU and GPU parallel computations.",
      buttonText: "Explore",
      link: "https://sharanga.hpc.bits-hyderabad.ac.in/",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5 mx-auto py-10">
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
