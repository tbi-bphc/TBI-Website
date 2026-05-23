"use client";

import { useState } from "react";
import serpImage from "public/homegallery/serp.png";

const englishContent = {
  hero: {
    title: "SERP Telangana Incubator Program",
    subtitle:
      "Empowering Rural Women Entrepreneurs through Innovation, Incubation, Mentorship & Sustainable Enterprise Development",
  },

  about: {
    title: "About the Program",

    description:
      "The Society for Elimination of Rural Poverty (SERP) Telangana Incubator Program is a flagship entrepreneurship initiative implemented under the National Rural Livelihoods Mission (NRLM) with support from the Ministry of Rural Development, Government of India. The program is implemented in collaboration with T-Hub, BITS Pilani Hyderabad – TBIS and WE Hub to strengthen rural entrepreneurship and women-led enterprises across Telangana.",
  },

  objectives: {
    title: "Program Objectives",

    items: [
      "Support innovative and scalable rural enterprises",
      "Strengthen SHG-based businesses and micro enterprises",
      "Enable market access, branding and digital transformation",
      "Facilitate access to funding, schemes and investors",
      "Create sustainable livelihoods and employment opportunities",
      "Build entrepreneurial skills through training and mentorship",
    ],
  },

  support: {
    title: "Support Provided Under the Program",

    items: [
      {
        title: "Business Incubation",
        icon: "🚀",
        description:
          "Guidance to convert business ideas into sustainable enterprises through structured incubation support.",
      },

      {
        title: "Mentorship & Expert Guidance",
        icon: "👥",
        description:
          "Access to startup mentors, industry experts, consultants and successful entrepreneurs.",
      },

      {
        title: "Capacity Building & Training",
        icon: "🎓",
        description:
          "Training on business planning, financial management, branding, packaging and digital marketing.",
      },

      {
        title: "Market Linkages",
        icon: "🛍️",
        description:
          "Support for product promotion, e-commerce onboarding, networking and buyer-seller connections.",
      },

      {
        title: "Funding & Financial Assistance",
        icon: "💰",
        description:
          "Support in accessing government schemes, loans, grants and investor opportunities.",
      },

      {
        title: "Technology & Innovation",
        icon: "💡",
        description:
          "Guidance for adopting innovation, digital tools and technology for business growth.",
      },
    ],
  },

  eligibility: {
    title: "Eligibility",

    items: [
      "Rural women entrepreneurs",
      "SHG members and SHG federations",
      "Existing micro and small enterprises led by women SHGs",
      "Businesses operated by SHG household members",
    ],
  },

  sectors: {
    title: "Eligible Enterprise Sectors",

    items: [
      "Food Processing",
      "Handicrafts & Handlooms",
      "Services",
      "Manufacturing",
      "Rural Innovation & Technology",
    ],
  },

  phases: {
    title: "Program Flow & Phases",

    description:
      "A structured entrepreneurial journey designed to take rural enterprises from awareness and onboarding to sustainable business growth and scale.",

    items: [
      {
        phase: "01",
        title: "Outreach & Mobilization",
        icon: "📢",
        color: "from-green-600 to-emerald-500",
        points: [
          "Awareness campaigns",
          "Registrations",
          "Entrepreneur identification",
        ],
      },

      {
        phase: "02",
        title: "Screening & Selection",
        icon: "📝",
        color: "from-blue-600 to-cyan-500",
        points: [
          "Application evaluation",
          "Business idea review",
          "Potential assessment",
        ],
      },

      {
        phase: "03",
        title: "Training & Capacity Building",
        icon: "🎓",
        color: "from-purple-600 to-fuchsia-500",
        points: [
          "Entrepreneurship training",
          "Business workshops",
          "Skill development",
        ],
      },

      {
        phase: "04",
        title: "Incubation & Mentoring",
        icon: "👥",
        color: "from-orange-500 to-amber-500",
        points: [
          "Mentorship support",
          "Business planning",
          "Enterprise development",
        ],
      },

      {
        phase: "05",
        title: "Market & Financial Linkages",
        icon: "💰",
        color: "from-cyan-600 to-sky-500",
        points: [
          "Investor connect",
          "Market opportunities",
          "Financial linkages",
        ],
      },

      {
        phase: "06",
        title: "Growth & Scale-up",
        icon: "📈",
        color: "from-pink-600 to-rose-500",
        points: [
          "Expansion support",
          "Branding",
          "Technology adoption",
        ],
      },
    ],
  },
};

const teluguContent = {
  hero: {
    title: "తెలంగాణ SERP ఇన్క్యుబేటర్ ప్రోగ్రామ్",

    subtitle:
      "గ్రామీణ మహిళా పారిశ్రామికవేత్తలకు శిక్షణ, ఇంక్యుబేషన్, మెంటరింగ్ మరియు వ్యాపారాభివృద్ధి సహాయం",
  },

  about: {
    title: "కార్యక్రమం గురించి",

    description:
      "సొసైటీ ఫర్ ఎలిమినేషన్ ఆఫ్ రూరల్ పావర్టీ (SERP) తెలంగాణ ఇన్క్యుబేటర్ ప్రోగ్రామ్ భారత ప్రభుత్వ గ్రామీణాభివృద్ధి మంత్రిత్వ శాఖ ఆధ్వర్యంలోని NRLM కింద అమలు చేయబడుతున్న ప్రముఖ కార్యక్రమం.",
  },

  objectives: {
    title: "కార్యక్రమ లక్ష్యాలు",

    items: [
      "వినూత్న గ్రామీణ వ్యాపారాలకు ప్రోత్సాహం",
      "SHG ఆధారిత వ్యాపారాలను బలోపేతం చేయడం",
      "మార్కెట్ మరియు డిజిటల్ అవకాశాలు కల్పించడం",
      "రుణాలు మరియు పెట్టుబడులపై సహాయం",
      "గ్రామీణ ఉపాధి అవకాశాల సృష్టి",
      "మెంటరింగ్ ద్వారా వ్యాపార నైపుణ్యాల అభివృద్ధి",
    ],
  },

  support: {
    title: "కార్యక్రమం ద్వారా అందించే సహాయం",

    items: [
      {
        title: "బిజినెస్ ఇన్క్యుబేషన్",
        icon: "🚀",
        description:
          "వ్యాపార ఆలోచనలను స్థిరమైన వ్యాపారాలుగా మార్చేందుకు మార్గదర్శకత్వం.",
      },

      {
        title: "మెంటరింగ్ & నిపుణుల సహాయం",
        icon: "👥",
        description:
          "ఇండస్ట్రీ నిపుణులు మరియు వ్యాపార మెంటర్ల మార్గదర్శకత్వం.",
      },

      {
        title: "శిక్షణ & సామర్థ్యాభివృద్ధి",
        icon: "🎓",
        description:
          "బిజినెస్ ప్లానింగ్ మరియు డిజిటల్ మార్కెటింగ్ శిక్షణ.",
      },

      {
        title: "మార్కెట్ అనుసంధానం",
        icon: "🛍️",
        description:
          "ఈ-కామర్స్ మరియు మార్కెట్ లింకేజీ సహాయం.",
      },

      {
        title: "ఆర్థిక సహాయం",
        icon: "💰",
        description:
          "ప్రభుత్వ పథకాలు మరియు రుణాలపై సహాయం.",
      },

      {
        title: "టెక్నాలజీ & ఇన్నోవేషన్",
        icon: "💡",
        description:
          "డిజిటల్ టూల్స్ మరియు సాంకేతిక సహాయం.",
      },
    ],
  },

  eligibility: {
    title: "అర్హతలు",

    items: [
      "గ్రామీణ మహిళా పారిశ్రామికవేత్తలు",
      "SHG సభ్యులు మరియు సంఘాలు",
      "మహిళల ఆధ్వర్యంలోని సూక్ష్మ సంస్థలు",
      "SHG కుటుంబ సభ్యులు నిర్వహించే వ్యాపారాలు",
    ],
  },

  sectors: {
    title: "అర్హత గల రంగాలు",

    items: [
      "ఫుడ్ ప్రాసెసింగ్",
      "హస్తకళలు & హ్యాండ్‌లూమ్స్",
      "సేవా రంగం",
      "తయారీ రంగం",
      "గ్రామీణ ఇన్నోవేషన్ & టెక్నాలజీ",
    ],
  },

  phases: {
    title: "ప్రోగ్రామ్ దశలు",

    description:
      "వ్యాపార అభివృద్ధి నుండి విస్తరణ వరకు దశలవారీ సహాయం అందించే ప్రత్యేక కార్యక్రమం.",

    items: [
      {
        phase: "01",
        title: "అవగాహన & నమోదు",
        icon: "📢",
        color: "from-green-600 to-emerald-500",
        points: ["అవగాహన", "నమోదు", "వ్యాపార అభ్యర్థుల గుర్తింపు"],
      },

      {
        phase: "02",
        title: "ఎంపిక ప్రక్రియ",
        icon: "📝",
        color: "from-blue-600 to-cyan-500",
        points: ["దరఖాస్తుల పరిశీలన", "వ్యాపార ఆలోచనల అంచనా", "ఎంపిక"],
      },

      {
        phase: "03",
        title: "శిక్షణ & అభివృద్ధి",
        icon: "🎓",
        color: "from-purple-600 to-fuchsia-500",
        points: ["వ్యాపార శిక్షణ", "నైపుణ్యాభివృద్ధి", "వర్క్‌షాప్స్"],
      },

      {
        phase: "04",
        title: "ఇంక్యుబేషన్ & మెంటరింగ్",
        icon: "👥",
        color: "from-orange-500 to-amber-500",
        points: ["మెంటరింగ్", "బిజినెస్ ప్లానింగ్", "వ్యాపార సహాయం"],
      },

      {
        phase: "05",
        title: "మార్కెట్ & ఫైనాన్స్",
        icon: "💰",
        color: "from-cyan-600 to-sky-500",
        points: ["బ్యాంక్ లింకేజీలు", "మార్కెట్ అవకాశాలు", "పెట్టుబడిదారులు"],
      },

      {
        phase: "06",
        title: "విస్తరణ & అభివృద్ధి",
        icon: "📈",
        color: "from-pink-600 to-rose-500",
        points: ["బ్రాండింగ్", "టెక్నాలజీ", "వ్యాపార విస్తరణ"],
      },
    ],
  },
};

export default function SerpContent() {
  const [language, setLanguage] = useState<"english" | "telugu">("english");

  const content = language === "english" ? englishContent : teluguContent;

  return (
    <section className="bg-white text-gray-800 overflow-hidden">
      {/* HERO */}
      <div
        className="relative overflow-hidden text-white bg-cover bg-center"
        style={{
          backgroundImage: `url(${serpImage.src})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="flex justify-end mb-10 md:pt-12">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
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

          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {content.hero.title}
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/90 leading-9">
              {content.hero.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-24">
        {/* ABOUT */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-nord10">
            {content.about.title}
          </h2>

          <div className="bg-gray-50 border border-gray-200 rounded-[2rem] p-8 md:p-10">
            <p className="text-base md:text-lg leading-9 text-gray-700">
              {content.about.description}
            </p>
          </div>
        </section>

        {/* OBJECTIVES */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-nord10">
            {content.objectives.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {content.objectives.items.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="min-w-10 h-10 rounded-full bg-nord10 text-white flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>

                  <p className="text-base md:text-lg leading-8 text-gray-700 font-medium">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SUPPORT */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-nord10 mb-12">
            {content.support.title}
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {content.support.items.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-[2rem] p-7 shadow-sm hover:shadow-2xl transition-all"
              >
                <div className="text-4xl mb-5">{item.icon}</div>

                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-8 text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ELIGIBILITY */}
        <section className="grid lg:grid-cols-2 gap-8">
          <div className="bg-gray-50 border border-gray-200 rounded-[2rem] p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-nord10">
              {content.eligibility.title}
            </h2>

            <div className="space-y-5">
              {content.eligibility.items.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-sm mt-1">
                    ✓
                  </div>

                  <p className="text-gray-700 leading-8 text-base md:text-lg">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-nord10 text-white rounded-[2rem] p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">
              {content.sectors.title}
            </h2>

            <div className="grid gap-4">
              {content.sectors.items.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 border border-white/10 rounded-2xl px-5 py-4 backdrop-blur-sm"
                >
                  <p className="text-base md:text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CREATIVE TIMELINE */}
{/* NEW CREATIVE PROGRAM FLOW */}
<section className="relative overflow-hidden py-10">
  <div className="mb-16">
    <h2 className="text-3xl md:text-4xl font-bold text-nord10 mb-5">
      {content.phases.title}
    </h2>

    <p className="text-base md:text-lg text-gray-600 leading-8 max-w-4xl">
      {content.phases.description}
    </p>
  </div>

  {/* Desktop */}
  <div className="hidden xl:flex flex-col gap-16 relative">
    {content.phases.items.map((item, index) => {
      const reverse = index % 2 !== 0;

      return (
        <div
          key={index}
          className={`relative flex items-center ${
            reverse ? "justify-end" : "justify-start"
          }`}
        >
          {/* Center Timeline */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 flex flex-col items-center z-20">
            {/* Connecting Line */}
            {index !== content.phases.items.length - 1 && (
              <div className="absolute top-20 h-[170px] w-[3px] bg-gradient-to-b from-gray-300 to-gray-200" />
            )}

            {/* Dot */}
            <div
              className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} shadow-2xl flex items-center justify-center text-white text-3xl border-[6px] border-white`}
            >
              {item.icon}
            </div>
          </div>

          {/* Card */}
          <div
            className={`w-[42%] relative ${
              reverse ? "mr-[8%]" : "ml-[8%]"
            }`}
          >
            {/* Connector */}
            <div
              className={`absolute top-10 h-[3px] bg-gradient-to-r ${item.color} ${
                reverse
                  ? "right-[-90px] w-[90px]"
                  : "left-[-90px] w-[90px]"
              }`}
            />

            <div className="bg-white border border-gray-200 rounded-[2.5rem] p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              {/* Header */}
              <div className="flex items-start justify-between mb-8">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.35em] text-gray-400 font-semibold mb-3">
                    Phase {item.phase}
                  </p>

                  <h3 className="text-3xl font-bold text-gray-900 leading-tight max-w-sm">
                    {item.title}
                  </h3>
                </div>

                <span className="text-6xl font-black text-gray-100 leading-none">
                  {item.phase}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-5">
                {item.points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div
                      className={`min-w-3 h-3 rounded-full bg-gradient-to-r ${item.color} mt-2`}
                    />

                    <p className="text-gray-600 leading-8 text-[15px]">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </div>

  {/* Tablet */}
  <div className="hidden md:flex xl:hidden flex-col gap-10 relative">
    {/* Main Line */}
    <div className="absolute left-8 top-0 bottom-0 w-[3px] bg-gradient-to-b from-green-500 via-cyan-500 to-pink-500 rounded-full" />

    {content.phases.items.map((item, index) => (
      <div key={index} className="relative pl-24">
        {/* Timeline Node */}
        <div
          className={`absolute left-0 top-5 w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white text-2xl shadow-xl border-[5px] border-white`}
        >
          {item.icon}
        </div>

        {/* Card */}
        <div className="bg-white border border-gray-200 rounded-[2rem] p-7 shadow-sm hover:shadow-xl transition-all">
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-gray-400 font-semibold mb-2">
                Phase {item.phase}
              </p>

              <h3 className="text-2xl font-bold text-gray-900">
                {item.title}
              </h3>
            </div>

            <span className="text-5xl font-black text-gray-100">
              {item.phase}
            </span>
          </div>

          <div className="space-y-4">
            {item.points.map((point, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div
                  className={`min-w-3 h-3 rounded-full bg-gradient-to-r ${item.color} mt-2`}
                />

                <p className="text-gray-600 leading-8 text-[15px]">
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
  <div className="md:hidden flex flex-col gap-8 relative">
    {/* Vertical Line */}
    <div className="absolute left-5 top-0 bottom-0 w-[3px] bg-gradient-to-b from-green-500 via-cyan-500 to-pink-500 rounded-full" />

    {content.phases.items.map((item, index) => (
      <div key={index} className="relative pl-16">
        {/* Node */}
        <div
          className={`absolute left-0 top-6 w-10 h-10 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-lg`}
        >
          {item.icon}
        </div>

        {/* Card */}
        <div className="bg-white border border-gray-200 rounded-[1.7rem] p-5 shadow-sm">
          <div className="flex items-start justify-between mb-5">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-semibold mb-2">
                Phase {item.phase}
              </p>

              <h3 className="text-xl font-bold text-gray-900 leading-snug">
                {item.title}
              </h3>
            </div>

            <span className="text-4xl font-black text-gray-100">
              {item.phase}
            </span>
          </div>

          <div className="space-y-3">
            {item.points.map((point, idx) => (
              <div key={idx} className="flex gap-3 items-start">
                <div
                  className={`min-w-2.5 h-2.5 rounded-full bg-gradient-to-r ${item.color} mt-2`}
                />

                <p className="text-sm text-gray-600 leading-7">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
      </div>
    </section>
  );
}