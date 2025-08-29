import React from "react";
import { Link } from "react-router-dom";

const Group2 = () => {
  return (
    <div className="min-h-screen bg-[var(--light-bg)] flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-4xl font-bold text-[var(--accent-1)] mb-6">
        Group 2
      </h1>
      <p className="text-lg text-[var(--accent-3)] mb-8">
        Welcome to Group 2’s page. Tribe info, members, and project details
        will go here.
      </p>
      <Link
        to="/ucsp"
        className="px-6 py-3 bg-[var(--secondary-bg)] text-[var(--white-bg)] rounded-lg hover:bg-[var(--accent-1)] transition-colors"
      >
        Back to UCSP
      </Link>
    </div>
  );
};

export default Group2;
