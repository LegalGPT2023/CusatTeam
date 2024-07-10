import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-5`}>
    <div class="flex flex-col text-center w-full mb-2">
      <h2 className={styles.heading2}>Our Idea</h2>
      <h4 className="font-poppins font-medium text-slate-400 text-[18px] leading-[23.4px] mb-1">
        LegalGPT: Revolutionizing Legal Document Processing with AI
      </h4>
      {/* <h4 className="font-poppins font-medium text-slate-400 text-[18px] leading-[23.4px] mb-1">
        Overview
      </h4>
      <p class="lg:w-2/3 mx-auto my-5 text-base font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table. Franzen you probably haven't
        heard of them man bun deep jianbing selfies heirloom prism food truck
        ugh squid celiac humblebrag.
      </p> */}
    </div>
  </section>
);

export default Stats;
