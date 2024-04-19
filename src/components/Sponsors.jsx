import Reveal from "./Reveal";
import { SponsorIcon } from "./index2";
import { LazyLoadImage } from "react-lazy-load-image-component";
import nh24_brochure from './NH-24.pdf';

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
      <div className="py-8 flex flex-col justify-center items-center text-lg ml-auto">
        <div className="w-[80%] mt-16 p-16 flex lg:flex-row md:flex-col sm:flex-col xxs:flex-col flex-wrap justify-evenly">
          {SponsorIcon.map((SponsorIcon) => (
            <div
              className="lg:w-1/2 block-container mb-16 rounded-xl hover:cursor-pointer border-bg-slate-20 flex flex-col justify-center"
              key={SponsorIcon.name}
            >
              <div className="btn-front flex justify-center items-center">
                <a href={SponsorIcon.URL} target="_blank">
                  <img
                    src={SponsorIcon.imageUrl}
                    alt={SponsorIcon.name}
                    className="w-1/1 h-1/1 object-contain"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="relative max-w-md w-full p-8 bg-white bg-opacity-20 rounded-lg backdrop-blur-md shadow-lg transition duration-300 ease-in-out transform hover:shadow-xl mt-20 xs:mt-[8rem]">

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
