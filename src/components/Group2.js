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
              className="w-full h-full object-cover"
              alt=""
            />
            


          </div>
          {/* title */}
          <h1 
            className="md:text-6xl mb-4 uppercase" 
            style={{ fontFamily: "ITCmedium", fontSize: "20vh",lineHeight: "0", color:"rgba(0, 112, 26)" }}
          >
            The
            <span 
              className="block text-[var(--white-bg)"
              style={{ fontFamily: "awesomelathusca", fontSize: "15vh", lineHeight: "1", color:"rgba(222, 49, 0)" }}
            >
              tausug
            </span>
          </h1>
          {/* description */}
          {/* bottom trim*/}

        </div>

        {/* 2nd section */}
          {/* background pic */}
          {/* title */}
          {/* 5 images section */}
          {/* 3 sub titles section */}
  
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
