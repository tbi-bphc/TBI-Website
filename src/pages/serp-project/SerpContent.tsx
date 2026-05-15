import { useState } from "react";

const englishContent = {
  overview: {
    title: "Overview",
    description:
      "TBI at BITS Pilani Hyderabad Campus hosts the SERP Project under the Deendayal Antyodaya Yojana - National Rural Livelihoods Mission (DAY-NRLM), aimed at strengthening women-led enterprises in rural Telangana.",
  },

  objectives: {
    title: "Program Objectives",
    description:
      "The program focuses on scaling micro-enterprises by providing business mentoring, market linkages, financial access, and capacity building.",
  },

  interventions: {
    title: "Key Interventions",

    items: [
      {
        title: "Challenge Fund",
        description:
          "Grants up to ₹20 lakh and interest-free loans covering up to 75% of growth needs.",
      },

      {
        title: "Incubation & Mentorship",
        description:
          "Customized business plans with expert mentoring and technical guidance.",
      },

      {
        title: "Capacity Building",
        description:
          "Training programs in entrepreneurship, management, and technical skills.",
      },

      {
        title: "Financial Inclusion",
        description:
          "Credit linkages, investor readiness, and financial literacy support.",
      },
    ],
  },

  phasesTitle: "Program Phases",

  phases: [
    {
      title: "Phase 1",
      subtitle: "Outreach & Applications",
      description:
        "Virtual outreach to SHG networks with open applications.",
    },

    {
      title: "Phase 2",
      subtitle: "Training Bootcamp",
      description:
        "Up to 250 participants undergo entrepreneurship training.",
    },
  ],

  eligibility: {
    title: "Eligibility Criteria",

    tableHeaders: ["Criteria", "Description"],

    rows: [
      [
        "Ownership Stake",
        "At least 51% owned by SHG women members",
      ],

      [
        "Location",
        "Telangana residents operating businesses within the state",
      ],
    ],
  },

  outcomes: {
    title: "Expected Outcomes",

    description:
      "The program enables enterprises to achieve sustainable growth and improve access to finance.",
  },

  team: {
    title: "Project Team",
    lead: "Dr. Naveen Krishna",
    manager: "G. Vinod Kumar",
  },

  contact: {
    title: "Contact",
  },
};

const teluguContent = {
  overview: {
    title: "అవలోకనం",
    description:
      "గ్రామీణ తెలంగాణలో మహిళా ఆధారిత సంస్థలను బలోపేతం చేయడానికి SERP ప్రాజెక్ట్ నిర్వహించబడుతోంది.",
  },

  objectives: {
    title: "కార్యక్రమ లక్ష్యాలు",

    description:
      "వ్యాపార అభివృద్ధి, ఆర్థిక సహాయం మరియు మార్కెట్ అవకాశాలను అందించడం.",
  },

  interventions: {
    title: "ప్రధాన కార్యక్రమాలు",

    items: [
      {
        title: "చాలెంజ్ ఫండ్",
        description: "₹20 లక్షల వరకు గ్రాంట్లు మరియు వడ్డీ లేని రుణాలు.",
      },

      {
        title: "మెంటార్‌షిప్",
        description: "వ్యాపార మార్గదర్శకత్వం మరియు సాంకేతిక సహాయం.",
      },
    ],
  },

  phasesTitle: "కార్యక్రమ దశలు",

  phases: [
    {
      title: "దశ 1",
      subtitle: "దరఖాస్తులు",

      description:
        "మహిళా వ్యాపారులకు దరఖాస్తుల ఆహ్వానం.",
    },
  ],

  eligibility: {
    title: "అర్హత ప్రమాణాలు",

    tableHeaders: ["ప్రమాణం", "వివరణ"],

    rows: [
      [
        "యాజమాన్యం",
        "కనీసం 51% SHG మహిళల యాజమాన్యం",
      ],
    ],
  },

  outcomes: {
    title: "అంచనా ఫలితాలు",

    description:
      "స్థిరమైన వ్యాపార అభివృద్ధి మరియు ఉపాధి అవకాశాలు.",
  },

  team: {
    title: "ప్రాజెక్ట్ టీమ్",
    lead: "డా. నవీన్ కృష్ణ",
    manager: "జి. వినోద్ కుమార్",
  },

  contact: {
    title: "సంప్రదించండి",
  },
};

export default function SerpContent() {
  const [language, setLanguage] = useState<"english" | "telugu">(
    "english"
  );

  const content =
    language === "english"
      ? englishContent
      : teluguContent;

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 space-y-12">

     {/* Language Toggle */}
<div className="flex justify-end items-center gap-3">

  <span
    className={`text-sm font-medium transition ${
      language === "english"
        ? "text-nord10"
        : "text-gray-500"
    }`}
  >
    English
  </span>

  <button
    onClick={() =>
      setLanguage(
        language === "english"
          ? "telugu"
          : "english"
      )
    }
    className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${
      language === "telugu"
        ? "bg-nord10"
        : "bg-gray-300"
    }`}
  >
    <div
      className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${
        language === "telugu"
          ? "translate-x-6"
          : ""
      }`}
    />
  </button>

  <span
    className={`text-sm font-medium transition ${
      language === "telugu"
        ? "text-nord10"
        : "text-gray-500"
    }`}
  >
    తెలుగు
  </span>

</div>

      {/* Overview */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-nord10 border-l-4 border-nord10 pl-3">
          {content.overview.title}
        </h2>

        <p className="text-gray-700 leading-relaxed">
          {content.overview.description}
        </p>
      </div>

      {/* Objectives */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-nord10 border-l-4 border-nord10 pl-3">
          {content.objectives.title}
        </h2>

        <p className="text-gray-700 leading-relaxed">
          {content.objectives.description}
        </p>
      </div>

      {/* Interventions */}
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-nord10 border-l-4 border-nord10 pl-3">
          {content.interventions.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {content.interventions.items.map((item, index) => (
            <div
              key={index}
              className="p-5 border rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Phases */}
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-nord10 border-l-4 border-nord10 pl-3">
          {content.phasesTitle}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {content.phases.map((phase, index) => (
            <div
              key={index}
              className="p-6 border rounded-xl shadow-sm hover:shadow-lg transition bg-white"
            >
              <h3 className="text-lg font-bold text-nord10 mb-1">
                {phase.title}
              </h3>

              <p className="font-medium text-gray-800 mb-2">
                {phase.subtitle}
              </p>

              <p className="text-gray-600 text-sm leading-relaxed">
                {phase.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Eligibility */}
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-nord10 border-l-4 border-nord10 pl-3">
          {content.eligibility.title}
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border rounded-lg overflow-hidden">

            <thead className="bg-nord10 text-white">
              <tr>
                {content.eligibility.tableHeaders.map((header, index) => (
                  <th
                    key={index}
                    className="p-3 text-left"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="text-gray-700">
              {content.eligibility.rows.map((row, index) => (
                <tr
                  key={index}
                  className="border-t even:bg-gray-50"
                >
                  <td className="p-3">{row[0]}</td>
                  <td className="p-3">{row[1]}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

      {/* Outcomes */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-nord10 border-l-4 border-nord10 pl-3">
          {content.outcomes.title}
        </h2>

        <p className="text-gray-700 leading-relaxed">
          {content.outcomes.description}
        </p>
      </div>

      {/* Team */}
      <div className="grid md:grid-cols-2 gap-8">

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-nord10 border-l-4 border-nord10 pl-3">
            {content.team.title}
          </h2>

          <ul className="text-gray-700 space-y-2">
            <li>
              <strong>Project Lead:</strong> {content.team.lead}
            </li>

            <li>
              <strong>Project Manager:</strong> {content.team.manager}
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4 text-nord10 border-l-4 border-nord10 pl-3">
            {content.contact.title}
          </h2>

          <p className="text-gray-700">
            📞 040-68012030 <br />
            📧 tbi@hyderabad.bits-pilani.ac.in
          </p>
        </div>

      </div>

    </section>
  );
}