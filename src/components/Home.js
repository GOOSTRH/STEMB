import React, { useState, useEffect, useRef } from "react";
import { motion, px, useScroll, useTransform } from "framer-motion";
import Silk from "./Silk";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import { db } from "../firebase";
import { collection, addDoc, getDocs, query, orderBy, serverTimestamp } from "firebase/firestore";

const COMMENTS_PER_PAGE = 5;
const BANNERS = Array.from({ length: 9 }, (_, i) => `/image/banner/${i + 1}.svg`);

const STUDENTS = [
  "marlon", "calex", "melor", "cole", "ethan", "revin", "gian", "jason", "jr", "kyle",
  "lance", "lars", "lucas", "mac", "marco", "nathan", "raffy", "takumi", "allyson", "ashley",
  "bea", "gianna", "estelle", "jasmine", "keira", "miri", "natania", "nicha", "nitika", "particia",
  "rhian", "riana", "jeehwan",
];

const getMask = (i, total) => {
  if (i === 0 || i === total - 1) return "none";
  return "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)";
};



const Home = () => {
  const [nickname, setNickname] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(1);
  const [showForm, setShowForm] = useState(true);
  const [duplicateError, setDuplicateError] = useState(false);
  const corkBoardRef = useRef(null);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  const cardY = useTransform(scrollYProgress, [0.05, 0.6], [0, -250]);
  const cardOpacity = useTransform(scrollYProgress, [0.02, 0.08], [0, 0.4]);

  const fetchComments = async () => {
    const q = query(collection(db, "comments"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    setComments(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const totalPages = Math.ceil(comments.length / COMMENTS_PER_PAGE);
  const currentComments = comments.slice(
    (page - 1) * COMMENTS_PER_PAGE,
    page * COMMENTS_PER_PAGE
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nickname.trim() || !comment.trim()) return;

    // Check for duplicate (same nickname + same message)
    const dupeCheck = query(
      collection(db, "comments"),
      orderBy("createdAt", "desc")
    );
    const snapshot = await getDocs(dupeCheck);
    const isDuplicate = snapshot.docs.some(
      (doc) =>
        doc.data().nickname === nickname.trim() &&
        doc.data().text === comment.trim()
    );

    if (isDuplicate) {
      setDuplicateError(true);
      setTimeout(() => setDuplicateError(false), 3000);
      return;
    }

    await addDoc(collection(db, "comments"), {
      nickname: nickname.trim(),
      text: comment.trim(),
      createdAt: serverTimestamp(),
    });
    setShowForm(false);
    setNickname("");
    setComment("");
    setPage(1);
    await fetchComments();
    setTimeout(() => {
      corkBoardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="relative">
      {/* Global Silk Background - fixed behind everything */}
      <div className="fixed inset-0 z-0">
        <Silk
          speed={8.2}
          scale={0.9}
          color="#595959"
          noiseIntensity={0.8}
          rotation={0}
        />
      </div>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative z-10 flex flex-col items-center overflow-x-hidden"
      >
        {/* Title Section */}
        <div className="relative min-h-[100vh] flex items-center justify-center w-full">
          <motion.h1
            className="text-7xl md:text-8xl lg:text-9xl font-light text-white font-cocogoose-letterpress tracking-tighter uppercase text-center px-4 leading-none"
            style={{ y: titleY, opacity: titleOpacity }}
          >
            BEEVENGERS<br />DIGITAL<br />YEARBOOK
          </motion.h1>
        </div>

        {/* Our Banners Card */}
        <div className="relative w-full pt-[15vh] pb-0 flex justify-center">
          <motion.div
            className="bg-white min-h-[25vh] w-[85%] md:w-[65%] lg:w-[50%] rounded-[80px] flex items-center justify-center shadow-2xl"
            style={{ y: cardY, opacity: cardOpacity }}
          >
            <h2 className="font-cocogoose font-light text-black text-4xl md:text-6xl tracking-[0.2em] uppercase">
              OUR BANNERS
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Banner ScrollStack */}
      <section className="relative z-10">
        <ScrollStack
          itemDistance={200}
          itemScale={0.03}
          itemStackDistance={30}
          stackPosition="20%"
          scaleEndPosition="10%"
          baseScale={0.60}
          blurAmount={5}
          scaleduration={2}
        >
          {BANNERS.map((src, i) => (
            <ScrollStackItem key={i}>
              <img
                src={src}
                alt={`Banner ${i + 1}`}
                className="w-full h-auto object-contain rounded-[40px] shadow-lg border-8 border-[#BFBFBF]"
              />
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </section>

      {/* Class Gallery */}
      <section className="relative z-10 py-32">
        <div
          className="relative z-10 bg-white mx-6 md:mx-12 lg:mx-24 pt-20 pb-20 px-4 sm:px-6 lg:px-8 rounded-t-[40px] md:rounded-t-[80px] lg:rounded-t-[120px] rounded-b-[40px] overflow-hidden"
          style={{ boxShadow: "0 -20px 80px rgba(0,0,0,0.4)" }}
        >
          <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-5xl font-bold text-black uppercase tracking-tighter text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            MEET THE BEEVENGERS
          </motion.h2>

          {/* Teacher Spotlight */}
          <motion.div
            className="flex flex-col items-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="border-2 border-black overflow-hidden mb-4">
              <img
                src="/image/classmate/teacher.jpg"
                alt="Sir Kerby"
                className="w-64 aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <h3 className="text-2xl font-bold text-black uppercase tracking-tight">SIR KERBY</h3>
            <p className="text-gray-500 uppercase tracking-widest text-sm">Class Adviser</p>
          </motion.div>

          {/* Student Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {STUDENTS.slice(0, 30).map((name, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 5) * 0.1 }}
              >
                <div className="border-2 border-black overflow-hidden mb-3 w-full">
                  <img
                    src={`/image/classmate/${i + 1}.svg`}
                    alt={name}
                    className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h4 className="text-sm font-bold text-black uppercase tracking-tight">{name}</h4>
                <p className="text-xs text-gray-500 uppercase tracking-widest">Future Goal</p>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center gap-8 mt-8">
            {STUDENTS.slice(30).map((name, i) => (
              <motion.div
                key={i + 30}
                className={`flex flex-col items-center w-full max-w-[calc(20%-1.6rem)] ${name === "jeehwan" ? "shadow-[0_0_15px_rgba(255,255,255,0.5)]" : ""}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className={`border-2 overflow-hidden mb-3 w-full ${name === "jeehwan" ? "border-gray-400 shadow-[0_0_20px_rgba(0,0,0,0.3)]" : "border-black"}`}>
                  <img
                    src={`/image/classmate/${i + 31}.svg`}
                    alt={name}
                    className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h4 className="text-sm font-bold text-black uppercase tracking-tight">{name}</h4>
                <p className="text-xs text-gray-500 uppercase tracking-widest">{name === "jeehwan" ? "Developer" : "Future Goal"}</p>
              </motion.div>
            ))}
          </div>
          </div>
        </div>

        {/* Cork Board Comment Section */}
        <div
          ref={corkBoardRef}
          className="relative z-10 mt-32 mx-6 md:mx-12 lg:mx-24 rounded-[40px] p-8 md:p-12 shadow-inner"
          style={{
            backgroundImage: "url('/image/bg/cork.png')",
            backgroundRepeat: "repeat",
            boxShadow: "inset 0 4px 20px rgba(0,0,0,0.5), 0 10px 40px rgba(0,0,0,0.3)",
          }}
        >
          <h2 className="text-3xl md:text-4xl font-architects font-bold text-amber-900 uppercase tracking-wider text-center mb-10 drop-shadow-sm">
            Sign Our Yearbook
          </h2>

          {/* Comment Form - Yellow Sticky Note */}
          {showForm && (
            <div className="flex justify-center mb-12">
              <div className="relative rotate-[-1deg] w-full max-w-md">
                {/* Push Pin */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10 w-5 h-5 rounded-full bg-red-600 shadow-md border-2 border-red-800" />
                <form
                  onSubmit={handleSubmit}
                  className="bg-[#fdf6e3] shadow-lg rounded-sm p-6 pt-8"
                  style={{ boxShadow: "4px 4px 12px rgba(0,0,0,0.3)" }}
                >
                  <input
                    type="text"
                    placeholder="Your nickname..."
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    className="w-full p-3 mb-3 bg-transparent border-b-2 border-black focus:outline-none focus:border-black font-architects text-lg text-black placeholder-black"
                  />
                  <textarea
                    placeholder="Write something on the board..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full p-3 mb-4 bg-transparent border-b-2 border-black focus:outline-none focus:border-black font-architects text-lg text-black placeholder-black resize-none"
                    rows="3"
                  />
                  {duplicateError && (
                    <p className="text-red-600 font-architects text-sm mb-3 text-center">
                      This exact note is already on the board!
                    </p>
                  )}
                  <button
                    type="submit"
                    className="w-full bg-amber-800 text-white py-2 px-4 rounded-md hover:bg-amber-900 transition font-architects font-bold tracking-wide"
                  >
                    Pin It!
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Sticky Note Comments Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {currentComments.length > 0 ? (
              currentComments.map((c, i) => {
                const noteColors = ["#fdf6e3", "#e2f9d8", "#ffe1e1", "#e1ecff", "#fff3cd"];
                const rotations = [-3, 2, -1, 3, -2, 1, -4, 2];
                const bg = noteColors[i % noteColors.length];
                const rot = rotations[i % rotations.length];
                return (
                  <motion.div
                    key={c.id || i}
                    className="relative shadow-lg rounded-sm p-5 pt-7"
                    style={{
                      backgroundColor: bg,
                      transform: `rotate(${rot}deg)`,
                      boxShadow: "3px 3px 10px rgba(0,0,0,0.25)",
                    }}
                    initial={{ scale: 1.25, rotate: 30, opacity: 0 }}
                    whileInView={{ scale: 1, rotate: rot, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {/* Push Pin */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-600 shadow-md border-2 border-red-800" />
                    <p className="font-architects font-bold text-sm text-gray-800 mb-1 uppercase tracking-wide">
                      {c.nickname}
                    </p>
                    <p className="font-architects text-gray-700 text-base leading-relaxed">
                      {c.text}
                    </p>
                  </motion.div>
                );
              })
            ) : (
              <div className="col-span-full">
                <div className="relative rotate-[1deg] max-w-xs mx-auto shadow-lg rounded-sm p-6 pt-8 bg-[#fdf6e3]" style={{ boxShadow: "3px 3px 10px rgba(0,0,0,0.25)" }}>
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-600 shadow-md border-2 border-red-800" />
                  <p className="font-architects text-gray-500 text-center text-lg">
                    No notes yet... be the first to sign!
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-between items-center mt-8 max-w-md mx-auto">
              <button
                onClick={() => setPage((p) => Math.max(p - 1, 1))}
                disabled={page === 1}
                className="px-4 py-2 bg-[#fdf6e3] text-amber-900 font-bold rounded-sm shadow-md disabled:opacity-40 hover:bg-amber-100 transition"
                style={{ transform: "rotate(-1deg)" }}
              >
                Previous
              </button>
              <p className="text-amber-900 font-bold">
                {page} / {totalPages}
              </p>
              <button
                onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                disabled={page === totalPages}
                className="px-4 py-2 bg-[#fdf6e3] text-amber-900 font-bold rounded-sm shadow-md disabled:opacity-40 hover:bg-amber-100 transition"
                style={{ transform: "rotate(1deg)" }}
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
