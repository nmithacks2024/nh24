import styles from "./style";
import { Hero, NavBar, Tracks, Prizes, Sponsors, Footer } from "./components";

const App = () => (
  <div className=" w-full overflow-hidden">
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <NavBar />
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`sec ${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <div className="sec " id="aboutus">
          <AboutUs />
        </div> */}
        <div className="sec" id="tracks">
          <Tracks />
        </div>
        <div className="sec" id="prizes">
          <Prizes />
        </div>
        <div className="sec" id="sponsors">
          <Sponsors />
        </div>
        <div className="sec" id="footer">
          <Footer />
        </div>
      </div>
    </div>
  </div>
);
export default App;
