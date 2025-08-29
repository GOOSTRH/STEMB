import React from 'react';
import { Link } from 'react-router-dom';

const UCSP = () => {
  const groups = [
    { id: 1, name: "SUBANEN", img: "/images/group1.jpg", desc: "Where rivers carry stories and traditions live on" },
    { id: 2, name: "TAUSUG", img: "/images/group2.jpg", desc: "The Tausug are an indigenous group primarily located in the Sulu Archipelago and paris of Zamboanga Peninsula." },
    { id: 3, name: "YAKAN", img: "/images/group3.jpg", desc: "The Yakan are one of the thirteen major Muslim ethnolinguistic groups in the Philippines." },
    { id: 4, name: "CHAVACANO", img: "/images/group4.jpg", desc: "Discover the rich traditions, authentic flavors, and ancient origins that shape our identity" },
  ];

  return (
    <div className="bg-[var(--light-bg)] min-h-screen">
      {/* Hero Section */}
      <section className="bg-[var(--white-bg)] py-20 px-4 sm:px-6 lg:px-8 border-b border-[var(--secondary-bg)]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--accent-1)] mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--secondary-bg)] to-[var(--accent-1)]">
              UCSP
            </span>
          </h1>
          <p className="text-xl font-bold text-[var(--accent-3)] mb-8">
            Understanding Culture, Society, and Politics - Explore our group presentations and research.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center bg-[var(--secondary-bg)] text-[var(--white-bg)] px-6 py-3 rounded-lg hover:bg-[var(--accent-1)] transition-colors font-medium"
          >
            <i className="fas fa-home mr-2"></i>
            Homepage
          </Link>
        </div>
      </section>

      {/* Group Intro */}
      <section className="bg-[var(--primary-bg)] shadow-sm border-b border-[var(--accent-2)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6 text-center">
            <p className="text-lg font-semibold text-[var(--accent-1)]">
              These are the 4 tribes from 4 different groups from STEM B.
            </p>
          </div>
        </div>
      </section>

      {/* Group Cards */}
      <section className="h-screen">
        <div className="flex h-full w-full">
          {groups.map((group) => (
            <Link
              key={group.id}
              to={`/group${group.id}`}
              className="relative flex-1 rounded-none overflow-hidden transition-all duration-300 hover:flex-[2] hover:shadow-lg cursor-pointer"
            >
              {/* Background image */}
              <img
                src={group.img}
                alt={group.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Black gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              {/* Text content */}
              <div className="absolute bottom-0 p-8 text-center text-[var(--white-bg)] w-full">
                <h2 className="text-5xl font-bold mb-3">{group.name}</h2>
                <p className="text-base">
                  "{group.desc}"
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default UCSP;
