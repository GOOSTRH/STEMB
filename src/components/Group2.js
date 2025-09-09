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
            {Array.from({ length: 19 }).map((_, i) => (
              <img key={i} src="/images/group2/g2p17.png" alt="" className="h-12 w-auto" />
            ))}
          </div>
        </div>

        {/* 2nd section */}
        <div style={{backgroundColor:"rgba(146,145,110)", height:"100vh"}} className="relative">
          {/* background pic */}
          <div style={{
            backgroundImage:"url('/images/group2/g2p18.png')"
            , backgroundSize:"contain"
            , backgroundPosition:"center"
            , backgroundRepeat:"repeat"
            , opacity :"0.06"
          }}
          className="absolute inset-0"
          >

          </div>

          {/* 5 images section */}
          {/* title */}
          {/* 3 sub titles section */}
          <div
            className="flex relative justify-center items-center"
            style={{ maxWidth: "80vw", margin: "0 auto", height: "100vh" }}
          >


            <div 
              className="absolute flex items-center justify-center text-center overflow-hidden"
              style={{ zindex:0, width: "20vw", transform: "translate(10vw, -10vw)"}}
              
            >
              <img
                src="/images/group2/g2p2.png" // 🔥 replace with your image
                className="max-w-full max-h-full object-contain mx-auto"
                alt=""
              />
              <div
                className="absolute inset-0"
                style={{ backgroundColor: "rgba(40, 46, 32, 0.3)" }}
              />
            </div>

            <div 
              className="absolute flex items-center justify-center text-center overflow-hidden"
              style={{ zindex:1,  width: "20vw"}}
              
            >
              <img
                src="/images/group2/g2p3.png" // 🔥 replace with your image
                className="max-w-full max-h-full object-contain mx-auto"
                alt=""
              />
              <div
                className="absolute inset-0"
                style={{ backgroundColor: "rgba(40, 46, 32, 0.3)" }}
              />
            </div>

            <div 
              className="absolute flex items-center justify-center text-center overflow-hidden"
              style={{ zindex:2, width: "20vw", transform: "translate(-8vw, -10vw)"}}
              
            >
              <img
                src="/images/group2/g2p4.png" // 🔥 replace with your image
                className="max-w-full max-h-full object-contain mx-auto"
                alt=""
              />
              <div
                className="absolute inset-0"
                style={{ backgroundColor: "rgba(40, 46, 32, 0.3)" }}
              />
            </div>

            <div 
              className="absolute flex items-center justify-center text-center overflow-hidden"
              style={{ zindex:2, width: "auto", transform: "translate(-9vw, 7vw)"}}
              
            >
              <img
                src="/images/group2/g2p6.png" // 🔥 replace with your image
                className="max-w-full max-h-full object-contain mx-auto"
                alt=""
              />
              <div
                className="absolute inset-0"
                style={{ backgroundColor: "rgba(40, 46, 32, 0.3)" }}
              />
            </div>

            <div 
              className="absolute flex items-center justify-center text-center overflow-hidden"
              style={{ zindex:2, width: "16vw", transform: "translate(10vw, 10vw)"}}
              
            >
              <img
                src="/images/group2/g2p5.png" // 🔥 replace with your image
                className="max-w-full max-h-full object-contain mx-auto"
                alt=""
              />
              <div
                className="absolute inset-0"
                style={{ backgroundColor: "rgba(40, 46, 32, 0.3)" }}
              />
            </div>

            {/* title */}
            <section
              className="absolute"
              style={{maxWidth:"60vw", zindex:3, margin:"0 auto", transform: "translate(-5vw, -15vw)"}}  
            >
              <h2
                className="relative text-6xl font-extrabold mb-4 uppercase text-justify"
                style={{ fontFamily: "awesomelathusca", fontSize: "5vw", lineHeight: "0", color:"rgba(255,255,255)"}}
              >
                welcome to
              </h2>
              <p
                className="relative uppercase tracking-wide text-sm font-medium text-[var(--accent-3)] glowing-text-black text-justify"
                style={{ fontFamily: "awesomelathusca", fontSize: "5vw", lineHeight: "1", color:"rgba(222, 49, 0)" }}
              >
                tausug
              </p>
            </section>


          {/* 3 sub titles section */}
            <section
              className="absolute"
              style={{maxWidth:"60vw", zindex:3, margin:"0 auto", transform: "translate(-20vw, -4vw)"}}  
            >
              <p
                className="relative text-6xl font-extrabold mb-4 uppercase text-justify"
                style={{ fontFamily: "perandorysemi", fontSize: "3vw", lineHeight: "1" }}
              >
                <span style={{ color: "rgba(2, 87, 0)", textDecoration: "underline", backgroundColor:"rgba(132, 127, 0)" }}>
                  culture&nbsp;
                </span>
                <span style={{ color: "rgba(255, 255, 255)", textDecoration: "underline", backgroundColor:"rgba(132, 127, 0)" }}>
                  and tradition
                </span>
              </p>
            </section>

            <section
              className="absolute"
              style={{maxWidth:"60vw", zindex:3, margin:"0 auto", transform: "translate(18vw, -1vw)"}}  
            >
              <p
                className="relative text-6xl font-extrabold mb-4 uppercase text-justify"
                style={{ fontFamily: "perandorysemi", fontSize: "3vw", lineHeight: "1" }}
              >
                <span style={{ color: "rgba(255, 255, 255)", backgroundColor:"rgba(161, 47, 18)" }}>
                  weaving&nbsp;
                </span>
                <span style={{ color: "rgba(0,147,254) ",backgroundColor:"rgba(161, 47, 18)" }}>
                  and attire
                </span>
              </p>
            </section>

            <section
              className="absolute"
              style={{maxWidth:"60vw", zindex:3, margin:"0 auto", transform: "translate(-12vw, 12vw)"}}  
            >
              <p
                className="relative text-6xl font-extrabold mb-4 uppercase text-justify"
                style={{ fontFamily: "perandorysemi", fontSize: "3vw", lineHeight: "1" }}
              >
                <span style={{ color: "rgba(255, 145, 0)", backgroundColor:"rgba(36, 64, 136)" }}>
                  specialties&nbsp;
                </span>
                <span style={{ color: "rgba(255, 255, 255)", backgroundColor:"rgba(36, 64, 136)" }}>
                  and cuisines
                </span>
              </p>
            </section>

          </div>

        </div>
        


        {/* 3rd section */}
        <div style={{ backgroundColor: "rgba(25, 39, 45)" }} className="relative w-full h-screen">
          {/* Background image */}
          <div className="absolute inset-y-0 right-0">
            <img
              src="/images/group2/g2p7.png"
              className="h-full object-contain"
              alt=""
            />
          </div>

          {/* title */}
          {/* side pic */}
          {/* description */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_7fr] items-center pt-16"
          style={{maxWidth:"80vw", justifyContent:"center", margin:"0 auto"}}>

            <p
              className="text-center text-2xl font-semibold mb-8 uppercase"
              style={{
                fontSize: "5vh",
                color: "rgba(194,193,11)",
                textIndent: "25px",
                fontFamily: "DMsans",
                width: "100%", // let grid control width
              }}
            >
              01
            </p>
            <section className="relative bg-[var(--dark-bg)] pt-16 px-6">
              <h2
                className="relative text-6xl font-extrabold mb-4 uppercase glowing-text-black text-justify"
                style={{ fontFamily: "ITCbenguiat", fontSize: "20vh", lineHeight: "0", color:"rgba(20, 110, 176)"}}
              >
                Culture
              </h2>
              <p
                className="relative uppercase tracking-wide text-sm font-medium text-[var(--accent-3)] glowing-text-black text-justify"
                style={{ fontFamily: "awesomelathusca", fontSize: "16vh", lineHeight: "1", color:"rgba(255, 198, 88)" }}
              >
                tradition
              </p>
              
            </section>
          </div>

          {/* description */}
          <div classname="flex relative" style={{maxWidth:"80vw", justifyContent:"flex-center", margin:"0 auto"}}>
            <section
              className="flex relative bg-[var(--dark-bg)] pb-16 justify-end" style={{maxWidth:"60vw"}}
            >
              <p
                className="relative tracking-wide text-sm font-medium text-[var(--accent-3)] glowing-text-black text-justify"
                style={{ fontFamily: "tanmoncheri", fontSize: "3vh", lineHeight: "1.5", color:"rgba(244,222,174)", maxWidth:"40vw" }}
              >
Pangalay Dance - it is also known as “fingernail dance.” Pangalay means gift offering — is one of the oldest traditional dances of the tausug. It predates Islam and Christianity in the Sulu Archipelago and still remains rooted in pre-Islamic cultural heritage. Dancers wear long, ornate metal extensions called “janggay” to accentuate flowing hand movements. The movements emphasize elegance and fluidity, mimicking ocean waves or bird wings through slow, continuous glares. It is often performed in weddings and festive occasions which is accompanied by traditional instruments like kulintang, gabbang, and agong.
              </p>

            </section>
          </div>

        </div>






        {/* 4th section */}
          {/* image */}
        <section
          className="relative flex flex-col text-white"
          style={{
            backgroundImage: "url('/images/group2/g2p8.png')", // 🔥 replace with your image
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "80% 30%",
            backgroundColor:"#0e100d"
        }}>

          {/* title */}
          <section
            className="relative bg-[var(--dark-bg)] py-16 px-6"
          >
            {/* Content */}
            <h2
              className="text-left font-extrabold mb-4 glowing-text-black pl-10"
              style={{
                fontFamily: "awesomelathusca",
                fontSize: "20vh",
                lineHeight: "1",
                textAlign: "left"
              }}
            >
              RELIGION
            </h2>
          </section>
        </section>
        {/* trim */}
        {/* description */}
        <section
          className="relative flex flex-col text-white" style={{backgroundColor:"#ab6100", height:"5px"}}
        >
        </section>


        {/* description */}
        <div classname="relative items-center justify-center"  style={{backgroundColor: "rgba(25, 39, 45)"}}>
          <section
            className="relative bg-[var(--dark-bg)] pb-16" style={{maxWidth:"80vw"}}
          >
            <p
              className="tracking-wide text-sm font-medium glowing-text-black text-justify"
              style={{ fontFamily: "tanmoncheri", fontSize: "3vh", lineHeight: "1.5", color:"rgba(244,222,174)"}}
            >
             Islam was introduced in the late 14th century. According to Cesar Adib Majul (Islamic Historian). This introduction is largely attributed to Arab and Chinese merchants and missionaries, who arrived via trade routes. Tausug follows the mainstream branch of Islam, Sunni Islam, which is the largest branch worldwide. They also follow the practices like the Five Pillars of Islam: Shahada, Faith in one God (Allah) and Prophet Muhammad as His messenger. Salah, praying five times a day. Zakat, giving out to the poor. Sawm, fasting during Ramadan, and Hajj, pilgrimage to Mecca.Tausug Muslims strictly observe these pillars and teach them early to children is Madrasah (Islamic school/college). They have different religious celebrations like Ramadan, Eid al-Fitr, Eid al-Adha, and Maulid an-Nabi.

            </p>
          </section>
        </div>

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
