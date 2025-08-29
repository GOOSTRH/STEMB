import React from "react";
import { Link } from "react-router-dom";

const Group1 = () => {
  return (
    <div className="min-h-screen bg-[var(--light-bg)] text-[var(--dark-text)]">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-start text-left text-white"
        style={{
          backgroundImage: "url('/images/group1.jpg')", // 🔥 replace with your image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Region IX label pinned top-left */}
        <div className="absolute top-6 left-6 z-20 bg-[var(--accent-1)] text-[var(--white-bg)] px-4 py-2 rounded-md text-sm font-semibold shadow-md">
          Region IX
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl px-8">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            Discover the{" "}
            <span className="font-Ahsing block text-[var(--white-bg)]">
              Subanen
            </span>
          </h1>
          <p className="text-lg font-medium">
            Where rivers carry stories and traditions live on
          </p>
        </div>
      </section>


      {/* Culture Section */}
      <section className="bg-[var(--dark-bg)] text-center py-16 px-6">
        <h2 className="text-5xl font-extrabold mb-4 text-[var(--accent-1)]">
          CULTURE
        </h2>
        <p className="uppercase tracking-wide text-sm font-medium text-[var(--accent-3)]">
          Traditions carried through rivers, rituals, and time.
        </p>
      </section>

      {/* Content Block */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Slot */}
        <div className="w-full h-80 bg-gray-300 rounded-lg overflow-hidden">
          <img
            src="/images/g1p1.jpg" // 🔥 replace with your image
            alt="Subanen Culture"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Slot */}
        <div className="text-left">
          <p className="text-lg text-gray-700 leading-relaxed">
            For the Subanen, the land is not simply ground beneath their feet. It is their history, their lifeline, and a reflection of who they are. The rivers and hills have shaped their way of living, and in return, they shape the land through the homes they build, the food they grow, and the crafts they create.
          </p>
        </div>
      </section>

      {/* Back to UCSP */}
      <div className="text-center pb-16">
        <Link
          to="/ucsp"
          className="px-6 py-3 bg-[var(--secondary-bg)] text-[var(--white-bg)] rounded-lg hover:bg-[var(--accent-1)] transition-colors"
        >
          ← Back to UCSP
        </Link>
      </div>
    </div>
  );
};

export default Group1;
