import React from "react";
import { Rocket, Eye, Users, ArrowUpRight } from "lucide-react";

const About = () => {
  const features = [
    {
      title: "Our Mission",
      description:
        "To empower businesses with innovative digital solutions that drive growth and success.",
      icon: Rocket,
      gradient: "from-blue-900 to-indigo-600",
    },
    {
      title: "Our Vision",
      description:
        "To be the catalyst for digital transformation, setting new benchmarks in innovation worldwide.",
      icon: Eye,
      gradient: "from-indigo-600 to-blue-600",
    },
    {
      title: "Our Values",
      description:
        "Built on innovation, integrity, and excellence. These core values guide our every decision.",
      icon: Users,
      gradient: "from-blue-600 to-sky-600",
    },
  ];

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "1000+", label: "Projects Delivered" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "100+", label: "Expert Team" },
  ];

  return (
    <section className="relative py-32 bg-slate-50">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0">
          <div className="absolute w-full h-full">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] aspect-[1/0.7] bg-gradient-to-b from-white via-slate-50/20 to-transparent rounded-[50%] blur-3xl" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group mb-8">
            <span className="text-sm font-medium">About Our Company</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>

          <h2 className="text-5xl font-bold tracking-tight text-slate-900 lg:text-6xl">
            <span className=" mt-2 bg-gradient-to-r from-blue-900 to-indigo-600 bg-clip-text text-transparent">
              DSI Metal Technology
            </span>
          </h2>

          <p className="mt-6 text-xl text-slate-600 leading-relaxed text-justify">
            At PT DSI Metal Technology, we specialize in importing and supplying 100% Korean materials for high-quality construction and industrial applications. With a commitment to excellence, durability, and innovation, we collaborate with leading Korean manufacturers to bring specialty building materials to the global market.
            <br/>
            As an ISO 9001, 45001, and 14001 certified company, we ensure the highest standards in quality, safety, and environmental responsibility. Our product range includes steel roofing systems, perforated steel plates, cable trays, systems, epoxy resins, designed for superior performance and long-term reliability.
            <br/>
            Driven by a customer-first approach, PT DSI Metal Technology provides customized solutions for industrial, commercial, and residential projects. Whether for large-scale infrastructure or specialty applications, our materials are trusted by architects, builders, and developers worldwide.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/5 hover:-translate-y-1"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} text-white shadow-lg transform group-hover:scale-110 transition-all duration-300`}
                >
                  <feature.icon size={28} />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  {feature.description}
                </p>

                <div className="mt-6 inline-flex items-center text-sm font-medium text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more
                  <ArrowUpRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-24 rounded-3xl bg-slate-900 p-12 sm:p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-indigo-600/10" />
          <div className="relative grid grid-cols-2 gap-12 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center group cursor-pointer transition-all duration-300 hover:-translate-y-1"
              >
                <p className="text-4xl font-bold text-white">{stat.number}</p>
                <p className="mt-2 text-sm font-medium text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
