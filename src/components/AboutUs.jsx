import Reveal from "./Reveal";

const AboutUs = () => {
  return (
    <div className="mt-3 ">
      <div>
        <Reveal>
          <h1 className="right-0 text-[64px] font-medium leading-tight text-white font-sans">
            About Us
          </h1>
        </Reveal>
      </div>
      <div
        className="hero-content  flex-col lg:flex-row-reverse xs:flex-col-reverse md:flex-col-reverse sm:flex-row-reverse justify-between pb-5 mb-3 font-sans
      "
      >
        <div className="carousel carousel-center h-[20rem] max-w-sm xxs:max-w-xxs p-4 space-x-4 bg-primary rounded-box">
          <div className="carousel-item">
            <img
              src="\assets\photoGallery2.jpg"
              className="rounded-box object-scale-down "
            />
          </div>
          <div className="carousel-item">
            <img src="\assets\photoGallery1.jpg" className="rounded-box" />
          </div>
          <div className="carousel-item">
            <img src="\assets\photoGallery3.jpg" className="rounded-box" />
          </div>
          <div className="carousel-item">
            <img
              src="public\assets\photoGallery4.jpg"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="public/assets/photoGallery5.jpg"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="public/assets/photoGallery6.jpg"
              className="rounded-box"
            />
          </div>
          {/* <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
              className="rounded-box"
            />
          </div> */}
        </div>
        <div>
          <div
            className="font-
          myFont leading-tight text-white font-sans"
          >
            <div className="text-left md:text-[1.5rem] lg:text-[2.25rem] sm:text-[1.5rem] xs:text-[1.2rem] xxs:text-[1rem] leading-normal lg:leading-snug max-w-[24rem] md:max-w-[38rem] lg:max-w-[52rem] xxs:flex-col">
              <Reveal>
                <div className="mb-2">
                  We support{" "}
                  <span className="text-secondary font-semiBold ">
                    budding developers
                  </span>{" "}
                  on their quest to set the spirit of innovation ablaze.
                </div>
              </Reveal>
              <Reveal>
                <div className="mb-2">
                  Over the course of{" "}
                  <span className="text-secondary font-semiBold ">
                    6 editions
                  </span>
                  , NMIT Hacks has hosted participants coming from prestigious
                  institutions across India, and industry experts with several
                  years of domain-experience
                </div>
              </Reveal>
              <Reveal>
                <div className="">
                  This makes it the perfect opportunity for both{" "}
                  <span className="text-secondary font-semiBold ">
                    beginners
                  </span>{" "}
                  and{" "}
                  <span className="text-secondary font-semiBold ">
                    expert developers
                  </span>{" "}
                  to learn, collaborate, and build their network.
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
