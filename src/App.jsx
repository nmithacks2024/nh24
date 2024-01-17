import styles from "./style";
import {
  Hero,
  AboutUs,
  NavBar,
  Tracks,
  MouseTrail,
  Sponsors,
  FAQ,
  Footer,
  Timeline,
  PrizeSection,
} from "./components";

const App = () => (
  <MouseTrail>
    <div className=" bg-primary w-full overflow-hidden">
      <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={` ${styles.boxWidth} top-0 fixed mx-auto z-50`}>
          <NavBar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`sec ${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} w-full`}>
          <div className={`${styles.paddingY} h-screen `} id="aboutus">
            <AboutUs />
          </div>
          <div className="sec " id="tracks">
            <Tracks />
          </div>
          <div className="sec" id="prizes">
            <PrizeSection />
          </div>
          <div className="sec " id="timeline">
            <Timeline />
          </div>
          <div className="sec" id="sponsors">
            <Sponsors />
          </div>
          <div className="sec" id="faq">
            <FAQ />
          </div>
          <div className="sec" id="footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  </MouseTrail>
);
export default App;
