"use client";

type CardProps = {
  icon: React.ReactNode; // Pass an icon component
  title: string;
  description: string;
  buttonText: string;
};

function Card({ icon, title, description, buttonText }: CardProps) {
  return (
    <div className="flex flex-col  h-full items-center text-center bg-white rounded-lg shadow-md p-6 space-y-4">
      <div className="text-nord2 text-4xl">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 h-40 my-2 text-justify">{description}</p>
      <button className="px-4 py-2 bg-nord10 text-white rounded-lg font-medium hover:bg-nord2 transition">
        {buttonText}
      </button>
    </div>
  );
}

export default function IncubateesCardGrid() {
  const cards = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-flask-conical-icon lucide-flask-conical"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"/><path d="M6.453 15h11.094"/><path d="M8.5 2h7"/></svg>,
      title: "Incubation",
      description:
        "The Technology Business Incubator (TBI) at BITS Pilani, Hyderabad, offers a dynamic environment for startups and entrepreneurs to thrive. Focused on innovation and technology.",
      buttonText: "Apply for Incubation",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-graduation-cap-icon lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>,
      title: "Pre-Incubation",
      description: "The Pre-Incubation program at TBI, BITS Pilani, Hyderabad Campus, is tailored specifically for student startups, offering a nurturing environment to transform ideas into viable ventures.  ",
      buttonText: "Apply for Pre-Incubation",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-monitor-icon lucide-monitor"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>,
      title: "Virtual Incubation",
      description:
        "The Virtual Incubation program at TBI, BITS Hyderabad, offers startups remote access to essential resources, mentorship, and networking opportunities. Tailored for early-stage ventures. ",
      buttonText: "Apply for Virtual Incubation",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto py-10">
      {cards.map((card, index) => (
        <Card
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
          buttonText={card.buttonText}
        />
      ))}
    </div>
  );
}
