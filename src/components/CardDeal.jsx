import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className="items-center flex flex-row px-10 py-10 mx-auto text-center">
    <div className={`${layout.sectionInfo} items-center lg:w-1/2`}>
      <h2 className={`${styles.heading2} text-center`}>
        Presentation <br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionInfo} items-center lg:w-1/2`}>
      <h2 className={`${styles.heading2} text-center`}>
        Project <br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>

      <Button styles={`mt-10`} />
    </div>
  </section>
);

export default CardDeal;
