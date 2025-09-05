import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TextType from "./TextType"; // adjust path if needed

const COMMENTS_PER_PAGE = 5;

const Home = () => {
  const [nickname, setNickname] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  // Replace with your Google Apps Script Web App URL
  const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxpc1a_aIEroAPniXVY_NjyT1rCcP45HUIc68x9NFC12n87yxgsa0kC0L5yJLHq0F5AWw/exec";

  // Load comments from Google Sheets on mount
  useEffect(() => {
    fetch(WEB_APP_URL)
      .then(res => res.json())
      .then(data => setComments(data.reverse())); // newest first
  }, []);
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(comments.length / COMMENTS_PER_PAGE);
  const currentComments = comments.slice(
    (page - 1) * COMMENTS_PER_PAGE,
    page * COMMENTS_PER_PAGE
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nickname.trim() || !comment.trim()) return;
    const formData = new URLSearchParams();
    formData.append("nickname", nickname);
    formData.append("text", comment);
    fetch(WEB_APP_URL, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(() => {
        // Re-fetch comments after posting
        fetch(WEB_APP_URL)
          .then(res => res.json())
          .then(data => setComments(data.reverse()));
      });
    setNickname("");
    setComment("");
    setPage(1);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="relative bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: "url('/bgpic.png')",
        backgroundSize: "100%, 100%",
        backgroundPosition: "center",
      }}
    >
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[var(--accent-1)] mb-6">
            <TextType
              text={["Beevengers Presents", ""]}
              as="h1"
              typingSpeed={30}
              pauseDuration={3000}
              deletingSpeed={20}
              loop={true}
              showCursor={true}
              textColors={["var(--accent-1)", "transparent"]}
              cursorCharacter="|"
              style={{ fontFamily: "SlushyNostalgic" }}
            />
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)]"></span>
          </h1>
          <p className="text-xl text-[var(--accent-3)] mb-8 max-w-3xl mx-auto">
            This is a website made for STEMB 2024-26.
          </p>
        </div>
      </section>

      {/* Comment Section */}
      <section className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-[var(--light-bg)]">
        <div className="max-w-2xl mx-auto">
          {/* Comment Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-[var(--white-bg)] shadow-lg rounded-xl p-6 mb-8"
          >
            <input
              type="text"
              placeholder="Enter your nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-1)]"
            />
            <textarea
              placeholder="Write a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent-2)]"
              rows="4"
            />
            <button
              type="submit"
              className="w-full bg-[var(--accent-1)] text-white py-2 px-4 rounded-lg hover:opacity-90 transition"
            >
              Post Comment
            </button>
          </form>

          {/* Comment List */}
          <div className="bg-[var(--white-bg)] shadow-md rounded-xl divide-y">
            {currentComments.length > 0 ? (
              currentComments.map((c, i) => (
                <div key={i} className="p-4">
                  <p className="font-semibold text-[var(--accent-1)]">
                    {c.nickname}
                  </p>
                  <p className="text-[var(--accent-3)]">{c.text}</p>
                </div>
              ))
            ) : (
              <p className="p-4 text-[var(--accent-2)] text-center">
                No comments yet.
              </p>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={() => setPage((p) => Math.max(p - 1, 1))}
                disabled={page === 1}
                className="px-4 py-2 bg-[var(--white-bg)] text-[var(--accent-1)] border border-[var(--accent-2)] rounded-lg disabled:opacity-50 hover:bg-[var(--light-bg)]"
              >
                Previous
              </button>
              <p className="text-[var(--accent-3)]">
                Page {page} of {totalPages}
              </p>
              <button
                onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                disabled={page === totalPages}
                className="px-4 py-2 bg-[var(--white-bg)] text-[var(--accent-1)] border border-[var(--accent-2)] rounded-lg disabled:opacity-50 hover:bg-[var(--light-bg)]"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
