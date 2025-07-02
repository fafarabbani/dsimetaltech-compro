import React, { useState } from "react";
import { ExternalLink, ArrowUpRight, Code } from "lucide-react";
import LazyImage from "./LazyImage";

import cowImage from '../assets/product/louver/Cow.png';
import mediumImage from '../assets/product/louver/Medium.png';
import largeImage from '../assets/product/louver/Large.png';
import zincImage from '../assets/product/zinc/350.png';
import spandekImage from '../assets/product/spandek/spandek.png';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = 
  [
    "All",
    "Louver Steel Panel",
    "Zinc Steel Panel",
    "Spandek Steel Panel",
    "Cable Tray",
    "Interior Epoxy",
    "Resin Epoxy",
  ];

  const projects = [
    // Louver
    {
      title: "Cow Bone",
      description: "Our Louvered Steel Plate is crafted exclusively from 100% high-quality Korean materials, provides reliable, long-lasting protection and efficiency, standing out as a superior choice in the market.",
      image: cowImage,
      category: "Louver Steel Panel",
      details: [
        { label: "Thickness", value: "0.51 m/m" },
        { label: "Coil Width", value: "610 MM" },
        { label: "Product Thx", value: "17.5 T" },
      ],
      limits: [
        { label: "Width", value: "345 mm" },
        { label: "Length", value: "900 mm" },
        { label: "Corner", value: "Var" },
      ],
    },
    {
      title: "Medium Bone",
      description: "Our Louvered Steel Plate is crafted exclusively from 100% high-quality Korean materials, provides reliable, long-lasting protection and efficiency, standing out as a superior choice in the market.",
      image: mediumImage,
      category: "Louver Steel Panel",
      details: [
        { label: "Thickness", value: "0.51 m/m" },
        { label: "Coil Width", value: "610 MM" },
        { label: "Product Thx", value: "17.5 T" },
      ],
      limits: [
        { label: "Width", value: "345 mm" },
        { label: "Length", value: "900 mm" },
        { label: "Corner", value: "Var" },
      ],
    },
    {
      title: "Large Bone",
      description: "Our Louvered Steel Plate is crafted exclusively from 100% high-quality Korean materials, provides reliable, long-lasting protection and efficiency, standing out as a superior choice in the market.",
      image: largeImage,
      category: "Louver Steel Panel",
      details: [
        { label: "Thickness", value: "0.51 m/m" },
        { label: "Coil Width", value: "610 MM" },
        { label: "Product Thx", value: "17.5 T" },
      ],
      limits: [
        { label: "Width", value: "355 mm" },
        { label: "Length", value: "900 mm" },
        { label: "Corner", value: "Var" },
      ],
    },
    // Zinc
    {
      title: "370 Width",
      description: "Our Zinc Steel Panel is made from 100% premium Korean materials, offering exceptional strength and durability. Its flexible design ensures easy installation and adaptability for various projects.",
      image: zincImage,
      category: "Zinc Steel Panel",
      details: [
        { label: "Thickness", value: "0.51 m/m" },
        { label: "Coil Width", value: "530 MM" },
        { label: "Product Thx", value: "38 T" },
      ],
      limits: [
        { label: "Width", value: "396.5 mm" },
        { label: "Length", value: "min 900 mm" },
        { label: "Corner", value: "Lock" },
      ],
    },
    {
      title: "450 Width",
      description: "Our Zinc Steel Panel is made from 100% premium Korean materials, offering exceptional strength and durability. Its flexible design ensures easy installation and adaptability for various projects.",
      image: zincImage,
      category: "Zinc Steel Panel",
      details: [
        { label: "Thickness", value: "0.51 m/m" },
        { label: "Coil Width", value: "530 MM" },
        { label: "Product Thx", value: "38 T" },
      ],
      limits: [
        { label: "Width", value: "476.5 mm" },
        { label: "Length", value: "min 900 mm" },
        { label: "Corner", value: "Lock" },
      ],
    },
    // Spandek
    {
      title: "Spandek",
      description: "Our Rooff Steel / Spandek, has three to six times better corrosion resistance compared to other zinc coated (galvanized) steel sheet of the same coating thickness. We issues a 25 year warranty for Roof Steel in case of residential applications.",
      image: spandekImage,
      category: "Spandek Steel Panel",
      details: [
        { label: "Thickness", value: "0.4 m/m" },
        { label: "Coil Width", value: "530 MM" },
        { label: "Product Thx", value: "38 T" },
      ],
      limits: [
        { label: "Width", value: "396.5 mm" },
        { label: "Length", value: "min 900 mm" },
        { label: "Corner", value: "Lock" },
      ],
    },
    // Cable Tray
    {
      title: "Spandek",
      description: "Our Rooff Steel / Spandek, has three to six times better corrosion resistance compared to other zinc coated (galvanized) steel sheet of the same coating thickness. We issues a 25 year warranty for Roof Steel in case of residential applications.",
      image: spandekImage,
      category: "Cable Tray",
      details: [
        { label: "Thickness", value: "0.4 m/m" },
        { label: "Coil Width", value: "530 MM" },
        { label: "Product Thx", value: "38 T" },
      ],
      limits: [
        { label: "Width", value: "396.5 mm" },
        { label: "Length", value: "min 900 mm" },
        { label: "Corner", value: "Lock" },
      ],
    },
  ];

  return (
    <section className="relative py-32 bg-slate-50">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-full h-full">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-violet-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group mb-8">
            <span className="text-sm font-medium">Our Portfolio</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>

          <h2 className="text-5xl font-bold tracking-tight text-slate-900 lg:text-6xl">
            Showcase of Our
            <span className="block mt-2 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </h2>

          <p className="mt-6 text-xl text-slate-600 leading-relaxed">
            Transform your business with our comprehensive suite of digital
            solutions, carefully crafted to drive innovation and sustainable
            growth.
          </p>
        </div>

        {/* Category filters */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 
                ${ 
                  activeFilter === category
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-500/25"
                  : "bg-white text-slate-600 hover:bg-slate-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3">
          {projects
            .filter(
              (project) =>
                activeFilter === "All" || project.category === activeFilter
            )
            .map((project) => (
              <div
                key={project.title}
                className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* Project image using LazyImage */}
                <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
                  <LazyImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="flex items-center gap-4">
                        {project.details.map((detail, idx) => (
                          <div key={idx} className="text-white">
                            <div className="text-sm opacity-75">
                              {detail.label}
                            </div>
                            <div className="text-lg font-bold">
                              {detail.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project info */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center rounded-full bg-violet-50 px-3 py-1 text-sm font-medium text-violet-600">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>

                  {/* Limits */}
                  <div className="flex items-center gap-4 mb-5">
                      {project.limits.map((limit, idx) => (
                        <div key={idx} className="text-gray-600">
                          <div className="text-sm opacity-75">
                            {limit.label}
                          </div>
                          <div className="text-base font-bold">
                            {limit.value}
                          </div>
                        </div>
                      ))}
                    </div>

                  <button className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-700 font-medium group">
                    View Details
                    <ArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
