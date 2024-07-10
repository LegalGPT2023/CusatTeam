import { stats } from "../constants";
import styles from "../style";

const Impact = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20`}>
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-5/6 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
        <h1 class="flex-grow sm:pr-16 text-base font-poppins font-normal text-dimWhite">
          LegalGPT is an innovative solution designed to streamline legal
          document processing through AI technologies, including LLM RAG and IBM
          WatsonX. By automating legal research, document compilation, and
          providing accessible legal advice, LegalGPT aims to transform the
          legal field.
        </h1>
        <h2 className={styles.heading2}>Overview</h2>
      </div>
    </div>
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-5/6 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
        <h2 className={styles.heading2}>Problem Statement</h2>
        <h1 class="flex-grow sm:pr-16 text-base font-poppins font-normal text-dimWhite">
          The legal industry struggles with:
          <br />
          <ul className="py-2">
            <li className="py-1">
              Time-consuming and manual legal research.
              <br />
            </li>
            <li className="py-1">
              Complicated document compilation processes.
              <br />
            </li>
            <li className="py-1">
              Difficulty in identifying relevant precedents.
              <br />
            </li>
          </ul>
          These challenges necessitate a streamlined approach to improve legal
          strategies and ensure ethical data practices.
        </h1>
      </div>
    </div>
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-5/6 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
        <h1 class="flex-grow sm:pr-16 text-base font-poppins font-normal text-dimWhite">
          LegalGPT addresses these issues with three key functionalities:
          <br />
          <ul className="py-2">
            <li className="py-1">
              Similar Case Finding:
              <br />
              Uses AI to identify and reference similar legal cases efficiently.
              Supports legal professionals in finding precedents and enhancing
              case strategies.
            </li>
            <li className="py-1">
              AI Conversational Agent for Legal Advice:
              <br />
              Provides accurate and accessible legal information to the public.
              Helps users understand their legal rights and connects them to
              appropriate resources.
            </li>
            <li className="py-1">
              Automatic Citation Engine:
              <br />
              Automates citation processes for legal documents, ensuring
              accuracy and saving time. Reduces manual research efforts by
              retrieving relevant legal texts quickly.
            </li>
          </ul>
        </h1>
        <h2 className={styles.heading2}>Solution</h2>
      </div>
    </div>
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-5/6 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
        <h2 className={styles.heading2}>Impact</h2>
        <h1 class="flex-grow sm:pr-16 text-base font-poppins font-normal text-dimWhite">
          LegalGPT offers significant benefits:
          <br />
          <ul className="py-2">
            <li className="py-1">
              Efficiency: Reduces time and effort in legal research and document
              compilation.
              <br />
            </li>
            <li className="py-1">
              Enhanced Strategies: Provides access to relevant precedents and
              legal information for better case strategies.
              <br />
            </li>
            <li className="py-1">
              Accessibility: Improves public access to legal information and
              resources.
              <br />
            </li>
            <li className="py-1">
              Ethical Practices: Ensures fairness and transparency in legal
              processes by mitigating bias and clarifying AI reasoning.
              <br />
            </li>
          </ul>
          LegalGPT leverages advanced AI to enhance efficiency, accessibility,
          and fairness in the legal industry.
        </h1>
      </div>
    </div>
  </section>
);

export default Impact;
