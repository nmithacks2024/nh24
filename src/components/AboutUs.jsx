import Reveal from "./Reveal";

const AboutUs = () => {
  return (
    <div className=" min-h-screen mt-3">
      <div>
        <Reveal>
          <h1 className="right-0 text-[64px] font-medium leading-tight text-white">
            About Us
          </h1>
        </Reveal>
      </div>
      <div className="hero-content flex-col lg:flex-row-reverse xs:flex-row-reverse justify-between">
        <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-dimWhite rounded-box">
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
              className="rounded-box"
            />
          </div>
        </div>
        <div>
          <div className=" font-semibold leading-tight text-secondary ">
            <div className="text-[1.2rem] md:text-[1.5rem] lg:text-[2rem] leading-normal lg:leading-[38px] max-w-[24rem] md:max-w-[38rem] lg:max-w-[52rem] text-center">
              <Reveal>Igniting nationwide innovation in</Reveal>
              <Reveal>its 7th edition. Unleashing creativity</Reveal>
              <Reveal>and pushing the boundaries of</Reveal>
              <Reveal>technology on a national stage</Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
