"use client";

import { useState } from "react";

const englishContent = {
  hero: {
    title: "NRLM Incubator Program",
    subtitle:
      "Empowering SHG Women Entrepreneurs through Innovation, Incubation & Sustainable Enterprise Development",
  },

  about: {
    title: "About the Scheme",
    description:
      "The NRLM Incubator Program is an initiative under the Deendayal Antyodaya Yojana – National Rural Livelihoods Mission (DAY-NRLM) aimed at promoting entrepreneurship among Self-Help Group (SHG) women. The program supports the transformation of SHG members into sustainable micro and small entrepreneurs through structured incubation, training, and mentoring support.",
  },

  objectives: {
    title: "Objectives",

    items: [
      "Promote women-led enterprises in rural areas",
      "Strengthen SHG members into business entrepreneurs",
      "Provide structured incubation and mentoring support",
      "Improve livelihood and income generation",
      "Facilitate market linkages and enterprise growth",
    ],
  },

  eligibility: {
    title: "Eligibility",

    items: [
      "Women members of SHGs under NRLM",
      "SHG members with existing or aspiring business ideas",
      "Individuals or groups willing to start or scale enterprises",
      "Priority for vulnerable and economically weaker sections",
    ],
  },

  support: {
    title: "Support Provided",

    items: [
      "Entrepreneurship Development Programs",
      "Sector-specific skill training",
      "Mentoring & handholding support",
      "Business plan development assistance",
      "Financial linkages and subsidy guidance",
      "Market linkage & branding support",
      "Monitoring and performance tracking",
    ],
  },

  duration: {
    title: "Program Duration",

    description:
      "The incubation support duration typically ranges from 3 to 6 months including business training, sector-specific training, and continuous mentoring.",
  },
};

const teluguContent = {
  hero: {
    title: "NRLM ఇన్క్యుబేటర్ ప్రోగ్రామ్",
    subtitle:
      "గ్రామీణ మహిళా వ్యాపారవేత్తలకు శిక్షణ, మార్గదర్శకత్వం మరియు వ్యాపారాభివృద్ధి సహాయం",
  },

  about: {
    title: "పథకం గురించి",

    description:
      "NRLM ఇన్క్యుబేటర్ ప్రోగ్రామ్ భారత ప్రభుత్వ గ్రామీణ అభివృద్ధి మంత్రిత్వ శాఖ ఆధ్వర్యంలో అమలు చేయబడుతున్న కార్యక్రమం. ఈ ప్రోగ్రామ్ ద్వారా SHG మహిళలను స్థిరమైన సూక్ష్మ మరియు చిన్న వ్యాపారవేత్తలుగా తీర్చిదిద్దడం లక్ష్యం.",
  },

  objectives: {
    title: "ప్రధాన లక్ష్యాలు",

    items: [
      "గ్రామీణ మహిళలలో వ్యాపారాన్ని ప్రోత్సహించడం",
      "SHG ఆధారిత వ్యాపారాలను బలోపేతం చేయడం",
      "శిక్షణ మరియు మార్గదర్శకత్వం అందించడం",
      "ఆదాయం మరియు జీవనోపాధిని పెంచడం",
      "మార్కెట్ అవకాశాలు కల్పించడం",
    ],
  },

  eligibility: {
    title: "అర్హత",

    items: [
      "NRLM కింద ఉన్న SHG మహిళా సభ్యులు",
      "వ్యాపార ఆలోచనలు ఉన్న వారు",
      "వ్యాపారాన్ని ప్రారంభించాలనుకునే వ్యక్తులు లేదా గ్రూపులు",
      "ఆర్థికంగా బలహీన వర్గాలకు ప్రాధాన్యం",
    ],
  },

  support: {
    title: "అందించే సహాయం",

    items: [
      "వ్యాపార అభివృద్ధి శిక్షణ",
      "రంగాల వారీ నైపుణ్య శిక్షణ",
      "మెంటారింగ్ మరియు హ్యాండ్ హోల్డింగ్",
      "బిజినెస్ ప్లాన్ సహాయం",
      "బ్యాంకు రుణాలు మరియు ఆర్థిక సహాయం",
      "మార్కెట్ మరియు బ్రాండింగ్ సహాయం",
      "పర్యవేక్షణ మరియు పనితీరు ట్రాకింగ్",
    ],
  },

  duration: {
    title: "ప్రోగ్రామ్ వ్యవధి",

    description:
      "ఈ ప్రోగ్రామ్ సాధారణంగా 3 నుండి 6 నెలల పాటు కొనసాగుతుంది. ఇందులో శిక్షణ, రంగాల వారీ అభ్యాసం మరియు నిరంతర మార్గదర్శకత్వం ఉంటుంది.",
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
    <section className="bg-white text-gray-800">

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-nord10 to-cyan-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="flex justify-end mb-8">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">

              <span
                className={`text-sm ${
                  language === "english"
                    ? "text-white font-semibold"
                    : "text-white/60"
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
                className={`w-14 h-7 rounded-full relative transition-all duration-300 ${
                  language === "telugu"
                    ? "bg-white"
                    : "bg-white/40"
                }`}
              >
                <div
                  className={`absolute top-1 w-5 h-5 bg-nord10 rounded-full transition-transform duration-300 ${
                    language === "telugu"
                      ? "translate-x-8"
                      : "translate-x-1"
                  }`}
                />
              </button>

              <span
                className={`text-sm ${
                  language === "telugu"
                    ? "text-white font-semibold"
                    : "text-white/60"
                }`}
              >
                తెలుగు
              </span>

            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold max-w-4xl leading-tight">
            {content.hero.title}
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed">
            {content.hero.subtitle}
          </p>

        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">

        {/* About */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-nord10">
            {content.about.title}
          </h2>

          <p className="text-lg leading-8 text-gray-700">
            {content.about.description}
          </p>
        </section>

        {/* Objectives */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-nord10">
            {content.objectives.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {content.objectives.items.map((item, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl border border-gray-200 bg-gray-50 hover:shadow-lg transition"
              >
                <p className="font-medium leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Eligibility */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-nord10">
            {content.eligibility.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {content.eligibility.items.map((item, index) => (
              <div
                key={index}
                className="border-l-4 border-nord10 bg-white shadow-sm rounded-xl p-5"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Support */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-nord10">
            {content.support.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {content.support.items.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-nord10/10 flex items-center justify-center mb-4">
                  <span className="text-nord10 font-bold">
                    {index + 1}
                  </span>
                </div>

                <p className="font-medium text-gray-700 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Duration */}
        <section className="bg-nord10 text-white rounded-3xl p-10">
          <h2 className="text-3xl font-bold mb-5">
            {content.duration.title}
          </h2>

          <p className="text-lg leading-8 text-white/90">
            {content.duration.description}
          </p>
        </section>

      </div>
    </section>
  );
}