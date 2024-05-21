import Reveal from "./Reveal";
import { SponsorIcon, PlatinumSponsors, GoldSponsors, SilverSponsors, CommunitySponsors, drinkSponsors } from "./index2";
import { LazyLoadImage } from "react-lazy-load-image-component";
import nh24_brochure from './NH-24.pdf';
import "./hover.css"
import { CardWrapper, CardWrapper2 } from "./SponsorStyles";
const Sponsors = () => {
  // const onButtonClick = () => {
  //   const pdfUrl = "./nh24_brochure.pdf";
  //   const link = document.createElement("a");
  //   link.href = pdfUrl;
  //   link.download = "NH24 Brochure.pdf";
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.download = "nh24-brochure";

    link.href = nh24_brochure;

    link.click();
  };

  return (
    <div className="py-[90px]">
      <Reveal>
        <h1 className="right-0 text-[64px] font-medium leading-tight text-white">
          Sponsors
        </h1>
      </Reveal>
      <div className="mt-16 flex flex-col justify-center items-center text-lg mx-auto">
        {/* PLATINUM */}

        <div className="text-white justify-center items-center font-brand-medium text-[2rem] md:text-[3rem] lg:text-[3rem] leading-normal  text-center">
          <div className="hover-1 font-extrabold">
            PLATINUM
          </div>
        </div>
        <div className="w-[80%] mt-1 p-4 flex lg:flex-row md:flex-col sm:flex-row flex-wrap justify-center items-center gap-5">
          {PlatinumSponsors.map((PlatinumSponsors) => (
            <CardWrapper>
              <a href={PlatinumSponsors.URL} target="_blank" className="flex justify-center items-center">
                <img
                  src={PlatinumSponsors.imageUrl}
                  alt={PlatinumSponsors.name}
                  className="w-[90%] h-[90%] object-contain"
                />
              </a>
            </CardWrapper>
          ))}
        </div>
      </div>
      {/* GOLD */}
      <div className="py-2 flex flex-col justify-center items-center text-lg ml-auto">
        <div className="text-white justify-center items-center font-brand-medium text-[2rem] md:text-[3rem] lg:text-[3rem] leading-normal  text-center">
          <div className="hover-2 font-semibold">
            GOLD
          </div>
        </div>
        <div className="w-[100%] mt-2 p-4 flex lg:flex-row md:flex-row sm:flex-row flex-wrap justify-center items-center gap-5">
          {GoldSponsors.map((GoldSponsors) => (
            <CardWrapper>
              <a href={GoldSponsors.URL} target="_blank" className="flex justify-center items-center">
                <img
                  src={GoldSponsors.imageUrl}
                  alt={GoldSponsors.name}
                  className={`${GoldSponsors.name=="SandLogic" ? "w-[50%] h-[50%]" : " w-[90%] h-[90%]"} object-contain`}
                  
                />
              </a>
            </CardWrapper>
          ))}
        </div>
      </div>
      {/* silver */}
      <div className="py-2 flex flex-col justify-center items-center text-lg ml-auto">
        <div className="text-white justify-center items-center font-brand-medium text-[2rem] md:text-[3rem] lg:text-[3rem] leading-normal  text-center">
          <div className="hover-3 font-bold">
            SILVER
          </div>
        </div>
        <div className="w-[100%] mt-3 p-4 flex lg:flex-row md:flex-row sm:flex-row flex-wrap justify-center items-center gap-5">
          {SilverSponsors.map((SilverSponsors) => (
            <CardWrapper>
              <a href={SilverSponsors.URL} target="_blank" className="flex justify-center items-center">
                <img
                  src={SilverSponsors.imageUrl}
                  alt={SilverSponsors.name}
                  className="w-[80%] h-[80%] object-contain"
                />
              </a>
            </CardWrapper>
          ))}
        </div>
      </div>
      {/* Drinks Sponsors */}
      <div className="py-2 flex flex-col justify-center items-center text-lg ml-auto">
        <div className="text-white justify-center items-center font-brand-medium text-[2rem] md:text-[3rem] lg:text-[3rem] leading-normal  text-center">
          <div className="hover-3 font-bold">
            Energy Drink Partner
          </div>
        </div>
        <div className="w-[100%] mt-3 p-4 flex lg:flex-row md:flex-row sm:flex-row flex-wrap justify-center items-center gap-5">
          {drinkSponsors.map((drinkSponsor) => (
            <CardWrapper2>
              <a href={drinkSponsor.URL} target="_blank" className="flex justify-center items-center">
                <img
                  src={drinkSponsor.imageUrl}
                  alt={drinkSponsor.name}
                  className="w-[95%] h-[95%] object-contain"
                />
              </a>
            </CardWrapper2>
          ))}
        </div>
      </div>
      {/* Community Partner */}
      <div className="pt-3 flex flex-col justify-center items-center text-lg mx-auto">
        <div className="text-white flex text-center justify-center items-center mx-auto font-brand-medium text-[2rem] md:text-[3rem] lg:text-[3rem] leading-normal">
          <div className="hover-1 text-center flex justify-center items-center">
            Community Partners
          </div>
        </div>
        <div className="w-[100%] mt-3 p-4 flex lg:flex-row md:flex-row sm:flex-row flex-wrap justify-center items-center gap-5">
          {CommunitySponsors.map((CommunitySponsors) => (
            // <div
            //   className="lg:w-1/2 block-container mb-16 rounded-xl hover:cursor-pointer border-bg-slate-20 flex flex-col justify-center"
            //   key={CommunitySponsors.name}
            // >
            <CardWrapper>
              <a href={CommunitySponsors.URL} target="_blank" className="flex justify-center items-center">
                <img
                  src={CommunitySponsors.imageUrl}
                  alt={CommunitySponsors.name}
                  className={`${CommunitySponsors.name=="Blockchain India" ? "w-[90%] h-[90%]" : "w-[70%] h-[60%]"} object-contain`}
                />
              </a>
            </CardWrapper>
            // </div>
          ))}
        </div>
      </div>


      <div className="flex justify-center items-center mt-10">
        <div className="relative max-w-md w-full p-8 bg-white bg-opacity-20 rounded-lg backdrop-blur-md shadow-lg transition duration-300 ease-in-out transform hover:shadow-xl mt-20 xs:mt-[1rem]">

          <p className="text-white mb-4 text-lg">
            Interested in sponsoring NMIT Hacks 2024? Click the button below!
          </p>

          <button className="bg-secondary hover:bg-transparent border-2 border-secondary  hover:text-secondary text-primary font-bold py-2 px-4 rounded inline-flex items-center" onClick={handleDownload}>
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Download</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;


















// import Reveal from "./Reveal";
// import { SponsorIcon, PlatinumSponsors, GoldSponsors, SilverSponsors, CommunitySponsors } from "./index2";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import nh24_brochure from './NH-24.pdf';
// import "./hover.css"
// import { CardWrapper } from "./SponsorStyles";
// const Sponsors = () => {
//   // const onButtonClick = () => {
//   //   const pdfUrl = "./nh24_brochure.pdf";
//   //   const link = document.createElement("a");
//   //   link.href = pdfUrl;
//   //   link.download = "NH24 Brochure.pdf";
//   //   document.body.appendChild(link);
//   //   link.click();
//   //   document.body.removeChild(link);
//   // };

//   const handleDownload = () => {
//     const link = document.createElement("a");
//     link.download = "nh24-brochure";

//     link.href = nh24_brochure;

//     link.click();
//   };

//   return (
//     <div className="py-[90px]">
//       <Reveal>
//         <h1 className="right-0 text-[64px] font-medium leading-tight text-white">
//           Sponsors
//         </h1>
//       </Reveal>
//       <div className="py-8 flex flex-col justify-center items-center text-lg ml-auto">
//         {/* PLATINUM */}

//         <div className="text-white justify-center items-center font-brand-medium text-[2rem] md:text-[3rem] lg:text-[3rem] leading-normal  text-center">
//           <div className="hover-1">
//             PLATINUM
//           </div>
//         </div>
//         <div className="w-[100%] mt-16 p-16 flex lg:flex-row md:flex-col sm:flex-col xxs:flex-col flex-wrap justify-evenly">
//           {PlatinumSponsors.map((PlatinumSponsors) => (
//             <CardWrapper>
//               <div
//                 className="lg:w-1/2 block-container mb-16 rounded-xl hover:cursor-pointer border-bg-slate-20 flex flex-col justify-center "
//                 key={PlatinumSponsors.name}
//               >
//                 <div className="btn-front flex justify-center items-center">
//                   <a href={PlatinumSponsors.URL} target="_blank">
//                     <img
//                       src={PlatinumSponsors.imageUrl}
//                       alt={PlatinumSponsors.name}
//                       className="w-1/1 h-1/1 object-contain"
//                     />
//                   </a>
//                 </div>
//               </div>
//             </CardWrapper>
//           ))}
//         </div>
//       </div>
//       {/* GOLD */}
//       <div className="py-8 flex flex-col justify-center items-center text-lg ml-auto">
//         <div className="text-white justify-center items-center font-brand-medium text-[2rem] md:text-[3rem] lg:text-[3rem] leading-normal  text-center">
//           <div className="hover-2">
//             GOLD
//           </div>
//         </div>
//         <div className="w-[80%] mt-16 p-16 flex lg:flex-row md:flex-col sm:flex-col xxs:flex-col flex-wrap justify-evenly">
//           {GoldSponsors.map((GoldSponsors) => (
//             <div
//               className="lg:w-1/2 block-container mb-16 rounded-xl hover:cursor-pointer border-bg-slate-20 flex flex-col justify-center"
//               key={GoldSponsors.name}
//             >
//               <div className="btn-front flex justify-center items-center">
//                 <a href={GoldSponsors.URL} target="_blank">
//                   <img
//                     src={GoldSponsors.imageUrl}
//                     alt={GoldSponsors.name}
//                     className="w-[100%] h-1/1 object-contain"
//                   />
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* silver */}
//       <div className="py-8 flex flex-col justify-center items-center text-lg ml-auto">
//         <div className="text-white justify-center items-center font-brand-medium text-[2rem] md:text-[3rem] lg:text-[3rem] leading-normal  text-center">
//           <div className="hover-3">
//             SILVER
//           </div>
//         </div>
//         <div className="w-[100%] mt-16 p-4 flex lg:flex-row md:flex-col flex-col flex-wrap justify-center items-center ">
//           {SilverSponsors.map((SilverSponsors) => (
//             <div
//               className="lg:w-1/2 block-container mb-16 rounded-xl hover:cursor-pointer border-bg-slate-20 flex flex-col justify-center"
//               key={SilverSponsors.name}
//             >
//               <div className="btn-front flex justify-center items-center ">
//                 <a href={SilverSponsors.URL} target="_blank">
//                   <img
//                     src={SilverSponsors.imageUrl}
//                     alt={SilverSponsors.name}
//                     className="w-[70%] h-1/1 object-contain xxs:ml-12"
//                   />
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* Community Parrtner */}
//       <div className="py-8 flex flex-col justify-center items-center text-lg ml-auto">
//         <div className="text-white justify-center items-center font-brand-medium text-[2rem] md:text-[3rem] lg:text-[3rem] leading-normal mr-10  text-center">
//           <div className="hover-1">
//             Community Partners
//           </div>
//         </div>
//         <div className="w-[100%] mt-16 ml-24 p-4 flex lg:flex-row md:flex-col flex-col flex-wrap justify-center items-center">
//           {CommunitySponsors.map((CommunitySponsors) => (
//             <div
//               className="lg:w-1/2 block-container mb-16 rounded-xl hover:cursor-pointer border-bg-slate-20 flex flex-col justify-center"
//               key={CommunitySponsors.name}
//             >
//               <div className="btn-front flex justify-center items-center ">
//                 <a href={CommunitySponsors.URL} target="_blank">
//                   <img
//                     src={CommunitySponsors.imageUrl}
//                     alt={CommunitySponsors.name}
//                     className="w-[70%] h-1/1 object-contain"
//                   />
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>


//       <div className="flex justify-center items-center">
//         <div className="relative max-w-md w-full p-8 bg-white bg-opacity-20 rounded-lg backdrop-blur-md shadow-lg transition duration-300 ease-in-out transform hover:shadow-xl mt-20 xs:mt-[8rem]">

//           <p className="text-white mb-4 text-lg">
//             Interested in sponsoring NMIT Hacks 2024? Click the button below!
//           </p>

//           <button className="bg-secondary hover:bg-transparent border-2 border-secondary  hover:text-secondary text-primary font-bold py-2 px-4 rounded inline-flex items-center" onClick={handleDownload}>
//             <svg
//               className="fill-current w-4 h-4 mr-2"
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 20 20"
//             >
//               <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
//             </svg>
//             <span>Download</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sponsors;