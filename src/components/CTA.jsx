import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Wanna test our solution?</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Click on the button to test our web app solution.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button>Visit LegalGPT</Button>
    </div>
  </section>
);

export default CTA;
