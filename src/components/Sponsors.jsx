import Reveal from "./Reveal";

const Sponsors = () => {
  return (
    <div className="py-[90px]">
      <Reveal>
        <h1 className="right-0 text-[64px] font-medium leading-tight text-white">
          Sponsors
        </h1>
      </Reveal>
      <div className="flex justify-center items-center">
        <div className="relative max-w-md w-full p-8 bg-white bg-opacity-20 rounded-lg backdrop-blur-md shadow-lg transition duration-300 ease-in-out transform hover:shadow-xl mt-20 xs:mt-[8rem]">
          <Reveal width="fit-content">
            <p className="text-white mb-4 text-lg">
              Interested in sponsoring NMIT Hacks 2024? Click the button below!
            </p>
          </Reveal>
          <button className="bg-secondary hover:bg-transparent border-2 border-secondary  hover:text-secondary text-primary font-bold py-2 px-4 rounded inline-flex items-center">
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
