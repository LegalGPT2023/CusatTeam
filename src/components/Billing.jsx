import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className="flex md:flex-row flex-col-reverse pt-0 pb-6">
    {/* <div className={layout.sectionImgReverse}> */}
    {/* <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" /> */}

    {/* gradient start */}
    {/* <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
    <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" /> */}
    {/* gradient end */}
    {/* </div> */}

    <div className="flex justify-center mx-auto gap-x-10 flex-row flex-wrap sm:mt-10 mt-6">
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Problem Statement <br className="sm:block hidden" />
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Solution <br className="sm:block hidden" />
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
      </div>
    </div>

    {/* </div> */}
  </section>
);

export default Billing;
