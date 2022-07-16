import React, { useState } from "react";
import Image from "next/image";
import search from "/public/Assets/icon/search.svg";
import Link from "next/link";

const Cards = [
  {
    Id: 1,
    bgColor: "bg-[#fff5f0]",
    title: "Builder Service",
    image: "/Assets/icon/services/builder.svg",
    tag: "house,office,carpenter,road construction,bridge tailor,jewelry items,House Builder,Office Builder,Carpenter,Road Construction,Bridge Builder,Tailor Service,Jewellary Items,Bridge Builder,Carpenter,House Builder,Jewellary Items, Office Builder,Road Construction,Tailor Service,Bookshelf,chair,dining table,dressing table,sofa set,Bathrooms,Fire Damage,Exterior & Interior Doors,Kitchens,Windows & Doors,Anklet & Toe Rings,Ear Rings,Mangtika,Necklace,Nose Rings,Rings,Chain Soldering,14k,22k,24k,Blue Diamonds,Synthetic Diamonds,Ban Planning,Emerging Issues,Offices,Types Of Spaces, Important Design Considerations,Road Casualty,Road Cycling,Road Death,3 Piece,4 Piece,Blouse,Borka,Lehenga,Scart,Lungi,Blazer,Pant,Shirt,T-Shirt,Frock,Pant",
    href: "/become-seller/builder",
  },
  {
    Id: 2,
    bgColor: "bg-[#e9f2ff]",
    title: "Business Service",
    image: "/Assets/icon/services/business-services.svg",
    tag: "Virtual Assistant,Data Entry,Market Research,Business Plans,Customer Care,Project Management,Hr Consulting,Printer,Branding Services, Business Consulting, Business Plans, Career Counseling, Customer Care, Data Entry,E-Commerce Management,Financial Consulting, Game Concept Design,Hr Consulting,Lead Generation, Legal Consulting,Market Research,Presentations,Printer,Project Management,Supply Chain Management,Virtual Assistant,Startup,Business, Finance & Law,Entertainment & Gaming,Food & Beverage,Profit/loss,Immigration,Loan Approval,Personal Use,Utc Daytime,Freshdesk,Facebook,Instagram,Linkedin,Twitter,Beauty & Cosmetics,Action,Adventure, Arcade, Fighting, Idle ,  Music, Platformers, Puzzle, Racing ,Role Playing, Shooter,Simulation,Sports,Strategy,Digital Marketing Projects,Graphics & Design Projects,Music & Audio Projects,Programming & Tech Projects,Video & Animation Projects,Writing & Translation Projects,Logistics",
    href: "/become-seller/business",
  },
  {
    Id: 3,
    bgColor: "bg-[#fdedf3]",
    title: "Cooker Service",
    image: "/Assets/icon/services/cooker.svg",
    tag: "Coocker Services,Dinner & lunch,Events Items,Hotel / Restaurant Items,Wedding Items,breakfast,cooking,marriage,wedding,birthday,event,Charcoal Choice,Soups,Sandwich,Pizzas,Pasta,set menu,Desserts,picnicanniversary,breakfast,Beverages,Snacks,Rice Items,Curry Items,Cutlet Items,Kebab Items,Fish Items,Chicken Items,Beef Items,Dessert Items,breakfast,",
    href: "/become-seller/cooker",
  },
  {
    Id: 4,
    bgColor: "bg-[#fff8e5]",
    title: "Electrician & Mechanician ",
    image: "/Assets/icon/services/electric.svg",
    tag: "bike,ac,bicycle,Camera,Car,Mobile,Pc,Printer,Refrigerator,Blower, Capacitor, Circuit Board, Clogged Ac Drain, Clogged Air Filter, Coil Leak, Compressor, Condensate Pump, Dirty Outside AC Unit, Expansion Valve, Fan Motor, Freon Leak, Fuse,Refrigerant Recharge,Break/Break Pad",
    href: "/become-seller/electrician",
  },
  {
    Id: 5,
    bgColor: "bg-[#e9f2ff]",
    title: "Entertainment",
    image: "/Assets/icon/services/entertainment.svg",
    tag: "Videographer ,photographer,Picnic,Birthday,Wedding,travel,Birthday cake,Backdrop, Lighting & Drapes,Balloon Decoration,Birthday Cupcake Glass & Etc.,Birthday Cupcake Table Cover,Chocolate fountain ,Candyfloss,Coffee,DJ's & Sound System & Lighting ,Goody Bags and Favor Sets,Ice-cream,Live Snac Magician  & Musician ,Noisemakers,Photography,Pop-corn & Candy floss,Theme Based Decoration",
    href: "/become-seller/entertainment",
  },

  {
    Id: 6,
    bgColor: "bg-[#ffecee]",
    title: "House Keeper",
    image: "/Assets/icon/services/housekipper.svg",
    tag: "",
    href: "/become-seller/house-keeper",
  },
  {
    Id: 7,
    bgColor: "bg-[#e9f2ff]",
    title: "It and Technology",
    image: "/Assets/icon/services/it.svg",
    tag: "data,digital marketing,Programing & Teach,Video & Animation,Graphic,Reactjs,Angular,Nodejs,Expressjs,MongoDB,Mysql,PHP,Laravel,Wordpress,HTML,CSS,JavaScript,Reactjs,Angular,Nodejs,Expressjs,MongoDB,Mysql,PHP,Laravel,Wordpress,HTML,CSS,JavaScript,app development,web development,mobile development,ios development,drupal,cms development,Anomaly Detection,Web Analytics,Trends,Convert Data,Clean Data,Copy Paste,Fix Format,Insert Data,Merge Data,Tagging,Typing,Excel,Google Docs,Google Sheets,Google Slides,Other Spreadsheets,Pdf Editor,Powerpoint,Word,Data Mining & Scraping,Formulas & Macros,Amazon Redshift,C#,Matlab,Competitor Research,Content Marketing,Products & Reviews,Social Media,Data Upload,Forms,Normalization,Nosql,Pivot Tables,Consultation,Computer Vision,Linear Regression,Machine Learning,Neural Networks,Reinforcement Learning,Amazon Sagemaker,Colab,Google Ml Kit,Jupyter Notebook,Python,Pytorch,R,Face Recognition,Image Processing,Image Recognition,Image Segmentation,Image Tagging,Object Detection,Ocr,Graphs & Charts,Reports,Batchgeo,Google Maps Api,Google Earth Pro,How To,Location,Movement,Patterns,Processes,Relationship,User Interaction,Word Cloud,Cloud Based Solutions,Design & Optimization,Queries,Centralized Database,Distributed Database,Graph Database,Network Database,Object-Oriented Database,Relational Database,Filemaker,Mongodb Atlas,Microsoft Azure,Oracle Database,Sql,Virtualization,Troubleshooting,Affiliate Marketing,Community Management,Crowdfunding,Display Advertising,Domain Research,E-Commerce Marketing,Influencer Marketing,Influencer Marketing,Local Seo,Marketing Strategy,Mobile App Marketing,Music Promotion,Social Media Marketing,Surveys,Text Message Marketing,Chat Bots,Convert Files,Data Analysis Reports,Databases,Desktop Applications,Development For Streamers,E-Commerce Development,Game Development, Mobile Apps,Online Coding Lessons,Qa & Review,Support It,User Testing, Web Programming, Website Builders & Cms, Wordpress,3d Product Animation,Animated Gifs,Animation For Kids,Animation For Streamers,App Website Previews,Character Animation, Drone Videography, Elearing VideoProduction,Intros Outros, Live Action Explainers,Lottie Website Animation,Lyric & Music Videos,Product Photography,Screencasting Videos,Short Video Ads,SlideShow Videos,Subtitle & Captions,Unboxing Videos,Video Editing,Visual Effect,Whiteboard Animated Explainers,Album Cover Design,Ar Filters & Lenses,Architecture &Interior Design,Book Design,Brand Style Guide,Business Cards & Stationery,Car Wraps,Cartoons & Comics,Catalog Design,Character Modeling,Fashion & Design,Flyer Design,Game Art,Graphics For Streamers,Illustration,Industrial productDesign,Infographic Design,Invitation Design,Jewelry Design,Landscape Design,Logo Design,Menu Design,Packaging Design,Pattern Design,Photoshop & Editing,Podcast Design,Portraits & Caricatures,Postcard Design,Presentation Design,Signage Design,Social Media Design,Story Boards,Tattoo Design,Trade Booth Trade,Tshirt & Merchandise,Web & Mobile Design,WebBanners",
    href: "/become-seller/it",
  },

  {
    Id: 8,
    bgColor: "bg-[#f8efed]",
    title: "Lawyer Service",
    image: "/Assets/icon/services/lawyer.svg",
    tag: "Bankruptcy lawyers,Business lawyers,Intellectual property ip,Family lawyers,Estate planning lawyers,Medical malpractice lawyers,Labor lawyers,Tax lawyers,Personal injury lawyers,Sexual Assault Communications Privilege Service,Veterans' Advocacy Service,Lobbying,Trade Ecrets",
    href: "/become-seller/lawyer",
  },
  {
    Id: 9,
    bgColor: "bg-[#f2f7ee]",
    title: "Lifestyle",
    image: "/Assets/icon/services/lifestyle.svg",
    tag: "Cooking Lessons,Life Coaching,Fitness Lessons,Personal Stylists,Craft Lessons,Gym",
    href: "/become-seller/lifestyle",
  },

  {
    Id: 10,
    bgColor: "bg-[#ffeff0]",
    title: "Music and Audio Service",
    image: "/Assets/icon/services/music.svg",
    tag: "Singers Concert,Teaching Song,Music Instrument Teaching,Voice Over,Mixing & Mastering,Producers & Composers,Singers & Vocalists,Session Musicians,Songwriters,Beat Making,Online Music Lessons,Podcast Editing,Audiobook Production,Audio Ads Production,Sound Design,Dialogue Editing,Music Transcription,Vocal Tuning,Dj Drops & Tags,Dj Mixing,Remixing & Mashups,Synth Presets,Jingles & Intros",
    href: "/become-seller/musicaudio",
  },

  {
    Id: 11,
    bgColor: "bg-[#fff8ec]",
    title: "Online Tuition",
    image: "/Assets/icon/services/online-tution.svg",
    tag: "Language Tutoring,Math Tutoring,Science Tutoring,Social Sciences Tutoring,Other Subjects,Cooking Lessons,Business Tutoring,Coding Lesson,Music Lesson",
    href: "/become-seller/onlinetution",
  },
  {
    Id: 12,
    bgColor: "bg-[#fbebf9]",
    title: "Painter",
    image: "/Assets/icon/services/painter.svg",
    tag: "",
    href: "/become-seller/painter",
  },
  {
    Id: 13,
    bgColor: "bg-[#ffeeef]",
    title: "Parlor & Saloon",
    image: "/Assets/icon/services/salone.svg",
    tag: "",
    href: "/become-seller/parlor",
  },

  {
    Id: 14,
    bgColor: "bg-[#fbe8eb]",
    title: "Real State",
    image: "/Assets/icon/services/rent.svg",
    tag: "",
  },
  {
    Id: 15,
    bgColor: "bg-[#fbe8eb]",
    title: "Labor",
    image: "/Assets/icon/services/rent.svg",
    tag: "",
    href: "/become-seller/labor",
  },
];
const Mainservices = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredCard = Cards.filter((card) => {
    if (
      card.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.tag?.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return card;
    }
  });

  return (
    <div className="bg-[#f5f5f5] container max-w-screen-xl mx-auto relative pb-8">
     <img className="pt-16 pl-10 pb-4" src="/Assets/icon/leftarrow.svg" alt="" />
      <div className="flex flex-col  md:flex-row justify-between items-start space-y-2 md:items-center px-2 md:px-10 -mt-2 mb-5">
      
        <p className="text-2xl font-semibold">Select Your Service</p>
        <div className="relative text-gray-600 md:w-64 w-full">
          <input
            className=" h-10 px-5 pl-4 pr-8 w-full mx-auto rounded-lg text-sm focus:outline-none  outline-none border-2 border-solid border-[#ECECEC] bg-white"
            type="search"
            name="search"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute right-2 top-3 cursor-pointer">
            <Image src={search} width={18} height={18} alt="search" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:px-10">
        {filteredCard.map((card, i) => (
          <Link href={card.href || "#"} key={i}>
            <a className="flex shadow-3xl pl-2 md:pl-10  items-center rounded-xl py-5 bg-white cursor-pointer gap-6">
              <div
                className={`${card.bgColor} w-14 h-14 flex flex-shrink-0 justify-center items-center rounded-full cursor-pointer`}
              >
                <img className="w-10 h-10" src={card.image} alt="hghh" />
              </div>
              <h1>{card.title}</h1>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Mainservices;
