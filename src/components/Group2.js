import React from "react";
import { Link } from "react-router-dom";

const Group2 = () => {
  return (
      <div className="relative min-h-screen bg-[var(--light-bg)] text-[var(--dark-text)]"
        style={{backgroundColor:"black"}}
      >

        {/* top section */}
        <div style={{backgroundColor:"rgba(25, 39, 45)"}}>
          {/* top image */}
          <div
            className="w-full overflow-hidden"
            style={{height:"60vh", marginBottom:"-5rem"}}
          >
            <img
              src="/images/group2/g2p1.png" // 🔥 replace with your image
              className="w-full h-full object-cover object-[0_70%]"
              alt=""
            />
          </div>
          {/* title */}
          <div classname="flex relative" style={{maxWidth:"80vw", justifyContent:"flex-center", margin:"0 auto"}}>
            <section
              className="relative bg-[var(--dark-bg)] pt-16 px-6"
              style={{maxWidth:"60vw"}}
            >
              <h2
                className="relative text-6xl font-extrabold mb-4 uppercase glowing-text-black text-justify"
                style={{ fontFamily: "ITCbenguiat", fontSize: "25vh", lineHeight: "0", color:"rgba(0, 112, 26)"}}
              >
                The
              </h2>
              <p
                className="relative uppercase tracking-wide text-sm font-medium text-[var(--accent-3)] glowing-text-black text-justify"
                style={{ fontFamily: "awesomelathusca", fontSize: "20vh", lineHeight: "1", color:"rgba(222, 49, 0)" }}
              >
                tausug
              </p>
            <p
              className="text-center text-2xl font-semibold mb-8 uppercase text-justify"
              style={{fontSize:"5vh", color:"rgba(194,193,11)",textIndent:"25px", fontFamily:"DMsans"}}
            >
              Region IX
            </p>
            </section>
          </div>

          {/* description */}
          <div classname="flex relative" style={{maxWidth:"80vw", justifyContent:"flex-center", margin:"0 auto"}}>
            <section
              className="flex relative bg-[var(--dark-bg)] pb-16 justify-end"
            >
              <p
                className="relative tracking-wide text-sm font-medium text-[var(--accent-3)] glowing-text-black text-justify"
                style={{ fontFamily: "tanmoncheri", fontSize: "3vh", lineHeight: "1.5", color:"rgba(244,222,174)", maxWidth:"40vw" }}
              >
                The Tausug are an indigenous group primarily located in the Sulu Archipelago and parts of Zamboanga Peninsula. The name Tausug is derived from “tau” meaning person and “sug” meaning sea current, reflecting their seafaring lifestyle.
              </p>

            </section>
          </div>
          {/* bottom trim*/}
          <div className="flex flex-row justify-center items-center pt-4">
            {Array.from({ length: 9 }).map((_, i) => (
              <img key={i} src="/images/group2/g2p17.png" alt="" className="h-12 w-auto" />
            ))}
          </div>
        </div>

        {/* 2nd section */}
          {/* title */}
          {/* 3 sub titles section */}
        <div style={{backgroundColor:"rgba(146,145,110)"}}>
          {/* background pic */}
          <div style={{backgroundImage:"url('/images/group2/g2p18.png')"
            , backgroundSize:"contain"
            , backgroundPosition:"center"
            , backgroundRepeat:"repeat"
            , opacity :"0.06"
          }}>
          </div>
          {/* 5 images section */}
          <div classname="flex relative justify-center items-center" style={{maxWidth:"80vw", margin:"0 auto", height:"100vh"}}>

            <div className="relative flex flex-col items-center justify-center text-center overflow-hidden" style={{width:"20vw", translateY:"-10vw", translateX:"20vw"}}>
              <img
                src="/images/group2/g2p2.png" // 🔥 replace with your image
                className="w-full h-full object-cover"
                alt=""
              />
              <div className="absolute inset-0 " style={{ backgroundColor: "rgba(40, 46, 32, 0.3)"}} />
            </div>

          </div>
        </div>
        


        {/* 3rd section */}
          {/* title */}
          {/* side pic */}
          {/* description */}

        {/* 4th section */}
          {/* title */}
          {/* image */}
          {/* trim */}
          {/* description */}

        {/* 5th section */}
          {/* title */}
          {/* image */}
          {/* description */}
          
        {/* 5th section */}
          {/* image */}
          {/* title */}
          {/* bg color */}
          {/* decription */}

        {/* 6th section */}
          {/* title */}
          {/* trim */}
          {/* pics and shit*/}

        {/* 7th section */}
          {/* title */}
          {/* trim */}
          {/* pics and shit*/}

        {/* 8th section */}
          {/* title */}
          {/* trim */}
          {/* pics and shit*/}

        {/* 9th section */}
          {/* title */}
          {/* bgpic */}
          {/* icon */}






  
        {/* Back to UCSP */}
        <div className="text-center pb-16 mt-20">
          <Link
            to="/ucsp"
            className="px-6 py-3 bg-[var(--secondary-bg)] text-[var(--white-bg)] rounded-3xl hover:bg-[var(--accent-1)] transition-colors"
          >
            ← Back to UCSP
          </Link>
        </div>
      </div>
    );
};

export default Group2;
