import React from "react";
import { Link } from "react-router-dom";
import './GlowingText.css';

const Group1 = () => {
  return (
    <div className="relative min-h-screen bg-[var(--light-bg)] text-[var(--dark-text)]"
      style={{backgroundColor:"black"}}
    >
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

        {/* Region IX label pinned top-left */}
        <div className="absolute top-6 left-6 z-20 bg-[var(--accent-1)] text-[var(--white-bg)] px-4 py-2 rounded-md text-sm font-semibold shadow-md">
          Region IX
        </div>



        {/*==========Top Section==========*/}
        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl px-8"
        style={{ marginLeft: "10vw" }}
        >
          <h1 
            className="md:text-6xl mb-4" 
            style={{ fontFamily: "ITCmedium", fontSize: "6vh",lineHeight: "0"  }}
          >
            DISCOVER THE
            <span 
              className="block text-[var(--white-bg)] glowing-text" 
              style={{ fontFamily: "Ahsing", fontSize: "15vh", lineHeight: "1" }}
            >
              SUBANEN
            </span>
          </h1>
          <p className="text-lg" style={{ fontFamily: "AlegreyaSC", fontSize: "2vh", fontStyle: "italic"}}>
            WHERE RIVERS CARRY STORIES AND TRADITIONS LIVE ON
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/10 to-transparent" />
      </section>


      {/*==========Culture Section==========*/}
      <section  
        className="relative flex flex-col items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/images/g1p2.png')", // 🔥 replace with your image
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/100 via-black/10 to-transparent" />

        {/* Culture Section */}
        <section
          className="relative bg-[var(--dark-bg)] text-center py-16 px-6"
        >

          {/* Content */}
          <h2
            className="relative text-5xl font-extrabold mb-4 glowing-text-black"
            style={{ fontFamily: "Ahsing", fontSize: "20vh", lineHeight: "1", color: "#a3b486" }}
          >
            CULTURE
          </h2>
          <p
            className="relative uppercase tracking-wide text-sm font-medium text-[var(--accent-3)] glowing-text-black"
            style={{ fontFamily: "AlegreyaSC", fontSize: "2vh", lineHeight: "1", color: "#ffffffff" }}
          >
            Traditions carried through rivers, rituals, and time.
          </p>
        </section>

        {/* Content Block */}
        <section
          className="relative max-w-7xl mx-auto
          grid grid-cols-1 md:grid-cols-2 gap-8 
          items-center text-white
          border-2 border-white rounded-3xl
          mb-16
          "
          style={{zIndex: 2, backgroundColor: "rgba(40, 46, 32, 0.7)"}}
        >


          {/* Image Slot */}
          <div className="w-full h-80 bg-gray-300 rounded-3xl overflow-hidden
          border-2 border-white rounded-3xl">
            <img
              src="/images/g1p1.jpg" // 🔥 replace with your image
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          {/* Text Slot */}
          <div className="text-left">
            <p
            className="text-lg text-gray-700 leading-relaxed"
            style={{ fontFamily: "vollkorn", fontSize: "2vh",textIndent:"2em", color: "#ffffffff" }}
            >
              For the Subanen, the land is not simply ground beneath their feet. It is their history, their lifeline, and a reflection of who they are. The rivers and hills have shaped their way of living, and in return, they shape the land through the homes they build, the food they grow, and the crafts they create.
            </p>
              <br />
            <p
            className="text-lg text-gray-700 leading-relaxed"
            style={{ fontFamily: "vollkorn", fontSize: "2vh",textIndent:"2em", color: "#ffffffff" }}
            >
              Subanen culture is deeply tied to the land and rivers around them. Their houses, built from wood and plants, are made to withstand rain and welcome air. The same connection to nature appears in everything they create– mats and baskets from fibers, embroidered cloth from natural dyes, and tools or jewelry shaped from metal.
            </p>
          </div>

          {/* Text Slot */}
          <div className="text-left ml-5">
            <p
              className="text-gray-700 leading-relaxed"
              style={{ fontFamily: "vollkorn", fontSize: "2vh",textIndent:"2em", color: "#ffffffff" }}
            >
              The Buklog is the Subanen’s grand thanksgiving ritual. A wooden platform is built, and when the people dance on it, the floor shakes and resounds like a drum– a sound believed to please the spirits.            </p>
            
            <br />

            <p
              className="text-gray-700 leading-relaxed"
              style={{ fontFamily: "vollkorn", fontSize: "2vh",textIndent:"2em", color: "#ffffffff" }}
            >
              For the Subanen, the Buklog is not only about worship. It is a tradition that ties the whole community together: everyone contributes food, labor, or materials; leaders guide and organize; families gather to celebrate; and spirits are honored for protection and blessing.
              This single ritual shows how Subanen society works– economically, socially, politically, and spiritually connected through culture.
            </p>

          </div>

          {/* Image Slot */}
          <div className="w-full h-80 bg-gray-300 rounded-3xl overflow-hidden
          border-2 border-white rounded-3xl">
            <img
              src="/images/g1p3.png" // 🔥 replace with your image
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

        </section>
        
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/10 to-transparent"
          style={{zIndex: 1}} />
      </section>
      
      {/*==========Image Section==========*/}
      <section
        className="relative flex flex-col items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/images/g1p5.png')", // 🔥 replace with your image
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}

      >
        <div className="absolute inset-0 " style={{ backgroundColor: "rgba(40, 46, 32, 0.7)"}} />

        {/* dress Section */}
        <section
          className="relative bg-[var(--dark-bg)] text-center py-16 px-6"
        >

          {/* Content */}
          <h2
            className="relative text-5xl font-extrabold mb-4 glowing-text-black"
            style={{ fontFamily: "Ahsing", fontSize: "20vh", lineHeight: "1", color: "#a3b486" }}
          >
            Dress & Identity
          </h2>
          <p
            className="relative tracking-wide text-sm font-medium text-[var(--accent-3)] glowing-text-black"
            style={{ fontFamily: "AlegreyaSC", fontSize: "2vh", lineHeight: "1", color: "#ffffffff" }}
          >
            Traditional clothing reflects their beliefs. Every color carries meaning, and both men’s and women’s attire show not only style but also status and spirituality.          </p>
        </section>



      </section>

      {/*the bg img section*/}
      <section
        className="relative flex flex-col items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/images/g1p6.png')", // 🔥 replace with your image
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "90%",
          backgroundColor: "#000000",
        }}
      >

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/100 via-black/10 to-transparent"/>
        <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/20 to-transparent"/>
        <div className="absolute inset-0 bg-gradient-to-l from-black/100 via-black/20 to-transparent"/>

        {/*==========Dress&Identity context Section==========*/}
        <div className="flex gap-24 mt-16 mb-16"
          style={{maxWidth: "60vw"}}
        >
          <section
            className="flex-1
            relative max-w-7xl mx-auto gap-8 
            items-center text-white
            border-2 border-white rounded-3xl
            "
            style={{zIndex: 2, backgroundColor: "rgba(40, 46, 32, 0.7)"}}
          >


            {/* Image Slot */}
            <div
              className="relative w-full bg-gray-300 overflow-hidden
              border-2 border-white rounded-3xl flex"
              style={{height: "70vh"}}
            >
              <img
                src="/images/g1p7.png" // 🔥 replace with your image
                className="w-full h-full object-cover"
              alt=""
              />
            </div>
            <br/>
            {/* Text Slot */}
            <div className="text-justify py-10 px-6">
              <p
                className="text-lg text-gray-700 leading-relaxed"
                style={{ fontFamily: "AlegreyaSC", fontSize: "5vh", color: "#ffffffff", textAlign: "center" }}
              >
                Men’s Clothing
              </p>
              <br/>
              <p
                className="text-lg text-gray-700 leading-relaxed"
                style={{ fontFamily: "vollkorn", fontSize: "2vh",textIndent:"2em", color: "#ffffffff" }}
              >
                Men wear a long-sleeved shirt called sub, usually black with colorful stitches for protection, or white for leaders and rituals. Their pants are short for daily life and long for ceremonies. On their heads, they fold a cloth called tulapok, worn differently depending on the occasion. Bead necklaces, bracelets, and anklets complete the attire, marking wealth and prestige.              </p>
            </div>
          
          </section>

          <section
            className="flex-1
            relative max-w-7xl mx-auto gap-8 
            items-center text-white
            border-2 border-white rounded-3xl
            "
            style={{zIndex: 2, backgroundColor: "rgba(40, 46, 32, 0.7)"}}
          >


            {/* Image Slot */}
            <div className="w-full h-80 bg-gray-300 rounded-3xl overflow-hidden
            border-2 border-white rounded-3xl"
            style={{height: "70vh"}}
            >
              <img
                src="/images/g1p8.jpg" // 🔥 replace with your image
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <br/>
            {/* Text Slot */}
            <div className="text-justify py-10 px-6 ">
              <p
                className="text-lg text-gray-700 leading-relaxed"
                style={{ fontFamily: "AlegreyaSC", fontSize: "5vh", color: "#ffffffff", textAlign: "center" }}
              >
                Women’s Clothing
              </p>
                <br />
              <p
                className="text-lg text-gray-700 leading-relaxed"
                style={{ fontFamily: "vollkorn", fontSize: "2vh",textIndent:"2em", color: "#ffffffff" }}
              >
                Women wear a similar sub, but decorated with beads and sequins—black for daily use, white for weddings and rituals. Their skirt, called tapis, is ankle-length: multicolored for female leaders and white for brides. A headdress of abaca cloth, the magpandyo, shields them from the sun. Like the men, women wear beads and bracelets that show social standing.              </p>
            </div>
          
          </section>
        </div>

        {/* Color Symbolism */}
        <section
          className="flex-1
          relative max-w-7xl mx-auto py-5 px-10 gap-8 
          items-center text-white
          border-2 border-white rounded-3xl
          mb-16
          "
          style={{width: "60vw", textAlign: "center", backgroundColor: "rgba(40, 46, 32, 0.7)"}}
        >
          <div className="text-justify">
            <p
              className="text-lg text-gray-700 leading-relaxed"
              style={{ fontFamily: "AlegreyaSC", fontSize: "5vh", color: "#ffffffff", textAlign: "left" }}
            >
              Color Symbolism
            </p>
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 px-7">
              <p
                className=" text-lg text-gray-700 leading-relaxe tracking-wider"
                style={{ fontFamily: "vollkorn", fontSize: "2vh", color: "#ffffffff" }}
              ><strong>
                • Black&nbsp;&nbsp; – &nbsp;protection, night worship<br/>
                • White&nbsp; – &nbsp;peace, sacred unity<br/>
                • Red&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; – &nbsp;defense, blood, ritual wine<br/>
                </strong>
              </p>
              
              <p
                className="text-lg text-gray-700 leading-relaxed tracking-wider"
                style={{ fontFamily: "vollkorn", fontSize: "2vh", color: "#ffffffff" }}
              ><strong>
                • Green&nbsp; – &nbsp;nature, food, medicine<br/>
                • Yellow&nbsp; – &nbsp;spirits, the unseen world<br/>
               </strong>
              </p>
            </div>
          </div>
        </section>

        {/*==========People Section==========*/}
        {/*==========Image Section==========*/}
        <section
          className="self-stretch relative flex flex-col items-center justify-center text-center text-white"
          style={{
            backgroundImage: "url('/images/g1p9.jpg')", // 🔥 replace with your image
            backgroundSize: "cover",
            backgroundPosition: "0px -270px",
            
          }}

        >
          <div className="absolute inset-0 " style={{ backgroundColor: "rgba(40, 46, 32, 0.7)"}} />

          {/* dress Section */}
          <section
            className="relative bg-[var(--dark-bg)] text-center py-16 px-6"
          >
            {/* Content */}
            <h2
              className="relative text-5xl font-extrabold mb-4 glowing-text-black"
              style={{ fontFamily: "Ahsing", fontSize: "20vh", lineHeight: "1", color: "#a3b486" }}
            >
              People
            </h2>
            <br/>
            <p
              className="relative tracking-wide text-sm font-medium text-[var(--accent-3)] glowing-text-black"
              style={{ fontFamily: "AlegreyaSC", fontSize: "4vh", lineHeight: "1", color: "#ffffffff" }}
            >
              Community is identity.
            </p>
          </section>
        </section>


        {/* Content Block */}
        <section
          className="relative max-w-7xl mx-auto gap-8 
          items-center text-white
          border-2 border-white rounded-3xl
          mb-16 mt-16
          "
          style={{zIndex: 2, backgroundColor: "rgba(40, 46, 32, 0.7)", width: "60vw"}}
        >
          {/* Text Slot */}
          <div className="text-lg mt-10 px-10">
            <p
              className="text-justify leading-relaxed"
              style={{ fontFamily: "vollkorn", fontSize: "2.3vh", color: "#ffffffff" }}
            >
               Families farm, share food, and work together, and during rituals or festivals, everyone contributes– whether through labor, offerings, or music. 
            </p>
            <br />
          </div>

          <br/>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Text Slot */}
            <div className="px-10">
              <p
                className="text-justify leading-relaxed"
                style={{ fontFamily: "vollkorn", fontSize: "2.3vh", color: "#ffffffff" }}
              >
                The Subanen are known as the “people of the river,” the largest indigenous group of the Zamboanga Peninsula. They have long lived along rivers and mountains, where community life is as important as survival itself.
              </p>
            </div>

            {/* Image Slot */}
            <div className="w-full h-80 bg-gray-300 overflow-hidden
              border-2 border-white rounded-3xl"
            >
              <img
                src="/images/g1p10.jpg" // 🔥 replace with your image
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>
          
        </section>
        
        <p
          className="relative tracking-wide text-sm font-medium text-[var(--accent-3)] glowing-text-black"
          style={{ fontFamily: "AlegreyaSC", fontSize: "2vh", lineHeight: "1", color: "#ffffffff" }}
        >
          “To be Subanen is to belong: to the river, to the land, and to each other.”
        </p>

        {/* Content Block */}
        <section
          className="relative max-w-7xl mx-auto gap-8 
          items-center text-white
          border-2 border-white rounded-3xl
          mb-16 mt-16
          grid grid-cols-1 md:grid-cols-2
          "
          style={{zIndex: 2, backgroundColor: "rgba(40, 46, 32, 0.7)", width: "60vw"}}
        >
          {/* Image Slot */}
          <div className="w-full h-full bg-gray-300 overflow-hidden
            border-2 border-white rounded-3xl"
          >
            <img
              src="/images/g1p11.jpg" // 🔥 replace with your image
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div>
            {/* Text Slot */}
            <p
              className="relative tracking-widest font-medium text-[var(--accent-3)] glowing-text-black
              tracking-wide text-left mt-5
              "
              style={{ fontFamily: "AlegreyaSC", fontSize: "6vh", lineHeight: "1", color: "#ffffffff" }}
            >
              History
            </p>

            {/* Text Slot */}
            <div className="px-10 mb-5">
              <p
                className="text-justify leading-relaxed"
                style={{ fontFamily: "vollkorn", fontSize: "2vh", color: "#ffffffff" }}
              >
                The Subanen have always valued independence. For centuries they migrated through rivers and mountains, avoiding outside control. This way of life allowed them to resist the spread of Islam and Christianity in Mindanao, preserving their own beliefs and rituals. Only today, with modern migration and education, are the Subanen becoming more exposed to mainstream ideals.
              </p>
            </div>

          </div>
        </section>

        {/* Content Block */}
        <section
          className="relative max-w-7xl mx-auto gap-8 
          items-center text-white
          border-2 border-white rounded-3xl
          mb-16
          grid grid-cols-1 md:grid-cols-2
          "
          style={{zIndex: 2, backgroundColor: "rgba(40, 46, 32, 0.7)", width: "60vw"}}
        >
          <div className="ml-10">
            {/* Text Slot */}
            <p
              className="relative tracking-widest font-medium text-[var(--accent-3)] glowing-text-black
              tracking-wide text-left mt-5
              "
              style={{ fontFamily: "AlegreyaSC", fontSize: "6vh", lineHeight: "1", color: "#ffffffff" }}
            >
              Values
            </p>

            {/* Text Slot */}
            <div className="px-10 mb-5">
              <p
                className="text-justify leading-relaxed"
                style={{ fontFamily: "vollkorn", fontSize: "2vh", color: "#ffffffff" }}
              >
               For the Subanen, togetherness is at the heart of life. Families, neighbors, and leaders share food, labor, and responsibility, especially during rituals like the Buklog where every person has a role to play. This unity is not just cultural but essential for survival in the rivers and mountains they call home.
              </p>
            </div>
          </div>
          {/* Image Slot */}
          <div className="w-full h-full bg-gray-300 overflow-hidden
            border-2 border-white rounded-3xl"
          >
            <img
              src="/images/g1p12.jpg" // 🔥 replace with your image
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </section>    

        {/*==========Delicacies Section==========*/}
        {/*==========Image Section==========*/}
        <section
          className="self-stretch relative flex flex-col items-center justify-center text-center text-white"
          style={{
            backgroundImage: "url('/images/g1p13.jpg')", // 🔥 replace with your image
            backgroundSize: "cover",
            backgroundPosition: "0px -270px",
            
          }}

        >
          <div className="absolute inset-0 " style={{ backgroundColor: "rgba(40, 46, 32, 0.7)"}} />

          {/* dress Section */}
          <section
            className="relative bg-[var(--dark-bg)] text-center py-16 px-6"
          >
            {/* Content */}
            <h2
              className="relative text-5xl font-extrabold mb-4 glowing-text-black"
              style={{ fontFamily: "Ahsing", fontSize: "20vh", lineHeight: "1", color: "#a3b486" }}
            >
              Delicacies
            </h2>
            <br/>
            <p
              className="relative tracking-wide text-sm font-medium text-[var(--accent-3)] glowing-text-black"
              style={{ fontFamily: "AlegreyaSC", fontSize: "4vh", lineHeight: "1", color: "#ffffffff" }}
            >
              Meals that nourish body and spirit.
            </p>
          </section>
        </section>


        {/* Content Block */}
        <section
          className="relative max-w-7xl mx-auto gap-8 
          items-center text-white
          border-2 border-white rounded-3xl
          mb-16 mt-16
          "
          style={{zIndex: 2, backgroundColor: "rgba(40, 46, 32, 0.7)", width: "60vw"}}
        >
          {/* Text Slot */}
          <div className="text-lg my-10 px-10">
            <p
              className="text-justify leading-relaxed"
              style={{ fontFamily: "vollkorn", fontSize: "2.3vh", color: "#ffffffff" }}
            >
            Subanen food comes from the land they farm and the rivers they live with. Root crops like cassava and sweet potato, along with rice and corn, are the cornerstone of their daily meals. But food is more than just survival– it’s a connection, a symbol, an identity.
            </p>
          </div>
          
        </section>


        {/* Content Block */}
        <section
          className="relative max-w-7xl mx-auto gap-8 
          items-center text-white
          border-2 border-white rounded-3xl
          mb-16
          grid grid-cols-1 md:grid-cols-2
          "
          style={{zIndex: 2, backgroundColor: "rgba(40, 46, 32, 0.7)", width: "60vw"}}
        >
          <div className="ml-10">
            {/* Text Slot */}
            <p
              className="relative tracking-widest font-medium text-[var(--accent-3)] glowing-text-black
              tracking-wide text-left mt-5
              "
              style={{ fontFamily: "AlegreyaSC", fontSize: "6vh", lineHeight: "1", color: "#ffffffff" }}
            >
              Ginataan Miki
            </p>

            {/* Text Slot */}
            <div className="px-10 mb-5">
              <p
                className="text-justify leading-relaxed"
                style={{ fontFamily: "vollkorn", fontSize: "2vh", color: "#ffffffff" }}
              >
                A well-known dish is Ginataan Miki, also called Ginagu Sera, made with coconut milk, noodles, salted fish, and herbs. It is traditionally served before harvest.
                <br/>
                It is shared as a prayer for abundance for the harvest and an offering to the spirits.
              </p>
            </div>
          </div>
          {/* Image Slot */}
          <div className="w-full h-full bg-gray-300 overflow-hidden
            border-2 border-white rounded-3xl"
          >
            <img
              src="/images/g1p14.jpg" // 🔥 replace with your image
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </section>    

        {/* Content Block */}
        <section
          className="relative max-w-7xl mx-auto gap-8 
          items-center text-white
          border-2 border-white rounded-3xl
          mb-16
          grid grid-cols-1 md:grid-cols-2
          "
          style={{zIndex: 2, backgroundColor: "rgba(40, 46, 32, 0.7)", width: "60vw"}}
        >
          <div className="ml-10">
            {/* Text Slot */}
            <p
              className="relative tracking-widest font-medium text-[var(--accent-3)] glowing-text-black
              tracking-wide text-left mt-5
              "
              style={{ fontFamily: "AlegreyaSC", fontSize: "6vh", lineHeight: "1", color: "#ffffffff" }}
            >
              Thimo (timu)
            </p>

            {/* Text Slot */}
            <div className="px-10 mb-5">
              <p
                className="text-justify leading-relaxed"
                style={{ fontFamily: "vollkorn", fontSize: "2vh", color: "#ffffffff" }}
              >
                A cone shaped suman made with sticky rice, coconut milk, rock salt, and brown sugar wrapped in a medicinal leaf called dun geyk. It has a symbolic meaning in Subanen because of its pointed form that is said to bring prosperity which is why it’s served mostly in special occasions like weddings and festivals. 
              </p>
            </div>
          </div>
          {/* Image Slot */}
          <div className="w-full h-full bg-gray-300 overflow-hidden
            border-2 border-white rounded-3xl"
          >
            <img
              src="/images/g1p15.jpg" // 🔥 replace with your image
              className="h-full object-cover"
              alt=""
            />
          </div>
        </section>    



      </section>

      
      






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

export default Group1;
