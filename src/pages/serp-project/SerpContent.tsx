"use client";

import { useState } from "react";
import serpImage from "public/homegallery/serp.png";

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
    title: "Eligibility Conditions",

    items: [
      "Women members of SHGs under NRLM",
      "SHG members with existing or aspiring business ideas",
      "Individuals or groups willing to start or scale enterprises",
      "Priority for vulnerable and economically weaker sections",
      "Applicants must actively participate in training & mentoring programs",
      "Business activities should contribute to rural livelihood generation",
    ],
  },

  phases: {
    title: "Support & Program Flow",

    items: [
      {
        phase: "Phase 01",
        title: "Training & Skill Development",
        color: "bg-green-700",
        icon: "🎓",

        points: [
          "Entrepreneurship awareness programs",
          "Sector-specific technical training",
          "Business development sessions",
          "Capacity building workshops",
        ],
      },

      {
        phase: "Phase 02",
        title: "Funding & Financial Linkages",
        color: "bg-blue-700",
        icon: "💰",

        points: [
          "Seed funding assistance",
          "Bank linkage facilitation",
          "Subsidy & scheme guidance",
          "Financial planning support",
        ],
      },

      {
        phase: "Phase 03",
        title: "Mentorship & Incubation",
        color: "bg-purple-700",
        icon: "👥",

        points: [
          "Expert mentoring support",
          "Business handholding",
          "Enterprise monitoring",
          "Growth strategy planning",
        ],
      },

      {
        phase: "Phase 04",
        title: "Market & Branding Support",
        color: "bg-orange-600",
        icon: "🛒",

        points: [
          "Market linkage assistance",
          "Branding & packaging support",
          "Sales and promotion guidance",
          "Expansion opportunities",
        ],
      },
    ],
  },

  duration: {
    title: "Program Duration",

    description:
      "The incubation duration is of 3 years including business training, sector-specific training, and continuous mentoring.",
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
    title: "అర్హత నిబంధనలు",

    items: [
      "NRLM కింద ఉన్న SHG మహిళా సభ్యులు",
      "వ్యాపార ఆలోచనలు ఉన్న వారు",
      "వ్యాపారాన్ని ప్రారంభించాలనుకునే వ్యక్తులు లేదా గ్రూపులు",
      "ఆర్థికంగా బలహీన వర్గాలకు ప్రాధాన్యం",
      "శిక్షణ మరియు మెంటారింగ్ కార్యక్రమాల్లో పాల్గొనాలి",
      "గ్రామీణ జీవనోపాధికి ఉపయోగపడే వ్యాపారాలు కావాలి",
    ],
  },

  phases: {
    title: "సహాయం & ప్రోగ్రామ్ విధానం",

    items: [
      {
        phase: "దశ 01",
        title: "శిక్షణ & నైపుణ్యాభివృద్ధి",
        color: "bg-green-700",
        icon: "🎓",

        points: [
          "వ్యాపార శిక్షణ కార్యక్రమాలు",
          "రంగాల వారీ శిక్షణ",
          "నైపుణ్యాభివృద్ధి వర్క్‌షాప్స్",
          "వ్యాపార అవగాహన కార్యక్రమాలు",
        ],
      },

      {
        phase: "దశ 02",
        title: "ఆర్థిక సహాయం",
        color: "bg-blue-700",
        icon: "💰",

        points: [
          "సీడ్ ఫండ్ సహాయం",
          "బ్యాంకు లింకేజీలు",
          "సబ్సిడీ మార్గదర్శకత్వం",
          "ఆర్థిక ప్రణాళిక సహాయం",
        ],
      },

      {
        phase: "దశ 03",
        title: "మెంటారింగ్ & ఇంక్యుబేషన్",
        color: "bg-purple-700",
        icon: "👥",

        points: [
          "నిపుణుల మార్గదర్శకత్వం",
          "బిజినెస్ హ్యాండ్ హోల్డింగ్",
          "వ్యాపార పర్యవేక్షణ",
          "వృద్ధి వ్యూహాలు",
        ],
      },

      {
        phase: "దశ 04",
        title: "మార్కెట్ & బ్రాండింగ్ సహాయం",
        color: "bg-orange-600",
        icon: "🛒",

        points: [
          "మార్కెట్ లింకేజీలు",
          "బ్రాండింగ్ సహాయం",
          "విక్రయ మార్గదర్శకత్వం",
          "విస్తరణ అవకాశాలు",
        ],
      },
    ],
  },

  duration: {
    title: "ప్రోగ్రామ్ వ్యవధి",

    description:
      "ఇంక్యుబేషన్ వ్యవధి 3 సంవత్సరాలు ఉంటుంది. ఇందులో వ్యాపార శిక్షణ, రంగాల వారీ శిక్షణ మరియు నిరంతర మార్గదర్శకత్వం ఉంటాయి.",
  },
};

export default function SerpContent() {
  const [language, setLanguage] = useState<"english" | "telugu">("english");

  const content = language === "english" ? englishContent : teluguContent;

  return (
    <section className="bg-white text-gray-800">
      {/* Hero Section */}
      <div
        className="relative overflow-hidden text-white bg-cover bg-center"
        style={{
          backgroundImage: `url(${serpImage.src})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="flex justify-end mb-8 md:pt-12">
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
                  setLanguage(language === "english" ? "telugu" : "english")
                }
                className={`w-14 h-7 rounded-full relative transition-all duration-300 ${
                  language === "telugu" ? "bg-white" : "bg-white/40"
                }`}
              >
                <div
                  className={`absolute top-1 w-5 h-5 bg-nord10 rounded-full transition-transform duration-300 ${
                    language === "telugu" ? "translate-x-8" : "translate-x-1"
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
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-20">
        {/* About */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-nord10">
            {content.about.title}
          </h2>

          <p className="text-base md:text-lg leading-9 text-gray-700">
            {content.about.description}
          </p>
        </section>

        {/* Objectives */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-nord10">
            {content.objectives.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {content.objectives.items.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="min-w-9 h-9 rounded-full bg-nord10 text-white flex items-center justify-center font-semibold text-sm">
                    {index + 1}
                  </div>

                  <p className="text-base md:text-lg font-medium leading-8 text-gray-700">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Eligibility */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-nord10">
            {content.eligibility.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {content.eligibility.items.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-5 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
              >
                <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-sm">
                  ✓
                </div>

                <p className="text-base md:text-lg text-gray-700 leading-8">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Support + Program Flow */}
        <section>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-nord10 mb-4">
              {content.phases.title}
            </h2>

            <p className="text-base md:text-lg text-gray-600 leading-8 max-w-4xl">
              {language === "english"
                ? "The incubation program is implemented through structured phases covering training, funding, mentoring and market support."
                : "ఈ ప్రోగ్రామ్ శిక్షణ, ఆర్థిక సహాయం, మెంటారింగ్ మరియు మార్కెట్ సహాయాన్ని దశలవారీగా అమలు చేస్తుంది."}
            </p>
          </div>

          {/* Desktop */}
          <div className="hidden lg:flex items-stretch justify-between gap-5">
            {content.phases.items.map((item, index) => (
              <div
                key={index}
                className="flex-1 bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                <div className={`${item.color} px-5 py-4 text-white`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs tracking-[0.2em] uppercase opacity-90">
                      {item.phase}
                    </span>

                    <span className="text-2xl">{item.icon}</span>
                  </div>

                  <h3 className="text-lg font-semibold leading-snug">
                    {item.title}
                  </h3>
                </div>

                <div className="p-5">
                  <div className="space-y-4">
                    {item.points.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div
                          className={`min-w-6 h-6 rounded-full ${item.color} text-white flex items-center justify-center text-xs font-semibold mt-1`}
                        >
                          {idx + 1}
                        </div>

                        <p className="text-sm md:text-base text-gray-700 leading-7">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile */}
          <div className="lg:hidden space-y-6">
            {content.phases.items.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
              >
                <div className={`${item.color} text-white px-5 py-4`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] opacity-90 mb-1">
                        {item.phase}
                      </p>

                      <h3 className="text-lg font-semibold">
                        {item.title}
                      </h3>
                    </div>

                    <span className="text-2xl">{item.icon}</span>
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  {item.points.map((point, idx) => (
                    <div key={idx} className="flex gap-3">
                      <div
                        className={`min-w-6 h-6 rounded-full ${item.color} text-white flex items-center justify-center text-xs font-semibold mt-1`}
                      >
                        {idx + 1}
                      </div>

                      <p className="text-sm text-gray-700 leading-7">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Duration */}
        <section className="bg-nord10 text-white rounded-[2rem] p-10 shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            {content.duration.title}
          </h2>

          <p className="text-base md:text-xl leading-9 text-white/90">
            {content.duration.description}
          </p>
        </section>
      </div>
    </section>
  );
}