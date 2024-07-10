import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, TeamMembers, Hero } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Business />
        <TeamMembers />
        {/* <Billing /> // TODO: Uncomment and edit as needed
        <CardDeal />
        <Clients />
        <CTA /> */}
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
